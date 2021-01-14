const express  = require("express");
const app = express(); 
const ejs = require('ejs'); 
const bodyParser = require("body-parser");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.set ("view engine", "ejs");

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

app.get("/", async (req,res) => {
    var database = await accessSpreadsheet();
    //database = [{"name": "Reuben"}, {"name": "Aditya"}];
    //console.log(database);
    database = JSON.parse(JSON.stringify(database));
    res.render("index", {database: database});
});

//displaySpreadsheet();

app.listen(port, function (){
    console.log("Server running");
});