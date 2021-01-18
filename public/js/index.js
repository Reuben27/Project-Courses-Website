var options = {
    valueNames: [ 'Projecttopic', 'Supername' , 'Name', 'Branch', 'PCC' ]
};

var userList = new List('users', options);

$('.filter-electrical').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Electrical Engineering");
        });
        $(this).addClass('selected');
    }
});

$('.filter-computer').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Computer Science and Engineering");
        });
        $(this).addClass('selected');
    }
});

$('.filter-chemical').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Chemical Engineering");
        });
        $(this).addClass('selected');
    }
});

$('.filter-civil').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Civil Engineering");
        });
        $(this).addClass('selected');
    }
});

$('.filter-mechanical').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Mechanical Engineering");
        });
        $(this).addClass('selected');
    }
});

$('.filter-material').on('click',function(){
    //var $text = $(this).text();
    //console.log($text);
    if($(this).hasClass( 'selected' )){
        userList.filter();
        $(this).removeClass('selected');
    } 
    else {
        userList.filter(function(item) {
            return (item.values().Branch == "Branch: Materials Science and Engineering");
        });
        $(this).addClass('selected');
    }
});