const express  = require("express");
const cookieParser = require('cookie-parser');
const app = express(); 
const ejs = require('ejs'); 
const bodyParser = require("body-parser");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '473236609433-bsunp8lbeannucdc8m0om4ueph6iaue6.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

app.set ("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet(){    
    const doc = new GoogleSpreadsheet('1wK6xv92DiMobXxDvHLEYssk9D-BTqKz471GFEe5K9Rc');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    //console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);

    var rows = await sheet.getRows();
    rows = rows.map(a => a._rawData);
    var headerRow = sheet.headerValues;

    var database = [];
    for (let i = 0; i < rows.length; i++) {
        let firstArray = rows[i];
        let secondArray = headerRow;
        let arrayOfObject = secondArray.map(function (value, index) {
        return [value, firstArray[index]]
        });
        let obj = Object.fromEntries(arrayOfObject);
        database.push(obj);
    }

    //console.log(database);
    return database;
}

async function displaySpreadsheet(){
    const database = await accessSpreadsheet();
    console.log(database);
}

app.get("/login", (req,res) => {
    res.render("login");
});

app.post("/login", (req,res) => {
    let token = req.body.token;
    //console.log(token);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        //console.log(payload);
    }
    verify().then(() => {
        res.cookie('session-token', token);
        res.send('success');
    }).catch(console.error);
});

//displaySpreadsheet();

app.get("/", checkAuthenticated, async (req,res) => {
    var database = await accessSpreadsheet();
    //database = [{"name": "Reuben"}, {"name": "Aditya"}];
    //console.log(database);
    database = JSON.parse(JSON.stringify(database));
    res.render("index", {database: database});
});

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login');
})

function checkAuthenticated(req, res, next){
    let token = req.cookies['session-token'];
    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
    verify()
    .then(()=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        res.redirect('/login');
    })
}

app.listen(process.env.PORT || 3000, function (){
    console.log("Server running");
});