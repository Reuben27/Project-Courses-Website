var options = {
    valueNames: [ 'Projecttopic', 'Supername' , 'Name', 'Branch', 'PCC' ]
};

//Using list.js for filtering the data.
var userList = new List('users', options);

//Array of classes of the different filters.
var filterarray = ['.filter-chemical', '.filter-civil', '.filter-mechanical', '.filter-computer', '.filter-material', '.filter-electrical'];

//Filter - Electrical Engineering
$('.filter-electrical').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Electrical Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-electrical'){
                console.log('Hey Electrical!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Filter - Computer Science & Engineering
$('.filter-computer').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Computer Science and Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-computer'){
                console.log('Hey Computer!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Filter - Chemical Engineering
$('.filter-chemical').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Chemical Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-chemical'){
                console.log('Hey Chemical!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Filter - Civil Engineering
$('.filter-civil').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Civil Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-civil'){
                console.log('Hey Civil!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Filter - Mechanical Engineering
$('.filter-mechanical').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Mechanical Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-mechanical'){
                console.log('Hey Mechanical!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Filter - Material Science & Engineering
$('.filter-material').on('click',function(){
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Materials Science and Engineering");
        });
        $(this).addClass('selected');
        for(j = 0; j < 6; j++){
            if(filterarray[j] === '.filter-material'){
                console.log('Hey Material!')
            }
            else{
                if($(filterarray[j]).hasClass( 'selected' )){
                    $(filterarray[j]).removeClass('selected');
                }
            }
        }
    }
});

//Function to display content on the clicked modal.
function modaler(topic, brief, supervisor, discipline, email){
    bodytext =  "<h6> Project Brief: </h6>" + brief;
    bodytext += "<br><br> <h6>Supervisor: </h6> " + supervisor  ;
    bodytext += "<br><br> <h6>Discipline: </h6>" + discipline ;
    bodytext += "<br><br> <h6>Academic Year: </h6> Fall, 2020-21";
    bodytext += "<br><br> <h6>Email: </h6>" + "<a href = mailto:" + email + ">" + email + "</a>";
    $('#exampleModalLabel').html(topic);
    $('#boddy').html(bodytext);
    console.log("Hey-Modal!");
}