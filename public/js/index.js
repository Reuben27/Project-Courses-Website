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

    var classarray = ["filter-chemical", "filter-civil", "filter-mechanical", "filter-computer", "filter-material"];
    var x = document.getElementsByClassName("filter-electrical");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        //console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                var ele = document.getElementsByClassName(classarray[j]);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
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

    var classarray = ["filter-chemical", "filter-electrical", "filter-mechanical", "filter-civil", "filter-material"];
    var x = document.getElementsByClassName("filter-computer");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        //console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                var ele = document.getElementsByClassName(classarray[j]);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
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

    var classarray = ["filter-civil", "filter-electrical", "filter-mechanical", "filter-computer", "filter-material"];
    var x = document.getElementsByClassName("filter-chemical");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        //console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                console.log(classarray[j]);
                var ele = document.getElementsByClassName(classarray[j]);
                console.log(ele);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
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

    var classarray = ["filter-chemical", "filter-electrical", "filter-mechanical", "filter-computer", "filter-material"];
    var x = document.getElementsByClassName("filter-civil");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        //console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                var ele = document.getElementsByClassName(classarray[j]);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
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

    var classarray = ["filter-chemical", "filter-electrical", "filter-civil", "filter-computer", "filter-material"];
    var x = document.getElementsByClassName("filter-mechanical");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                console.log(classarray[j]);
                var ele = document.getElementsByClassName(classarray[j]);
                console.log(ele);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
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

    var classarray = ["filter-chemical", "filter-electrical", "filter-mechanical", "filter-computer", "filter-civil"];
    var x = document.getElementsByClassName("filter-material");
    for (i = 0; i < x.length; i++) {
        var m = x[i].style.backgroundColor;
        console.log(m);
        //If filter selected => Change color from grey to blue.
        if(m === "rgb(233, 236, 239)"){
            x[i].style.backgroundColor = "#007bff";
            x[i].style.color = "#fff";
            for(j = 0; j < 5; j++){
                var ele = document.getElementsByClassName(classarray[j]);
                for (k = 0; k < ele.length; k++) {
                    ele[k].style.backgroundColor = "rgb(233, 236, 239)";
                    ele[k].style.color = "#495057";
                }
            }
        }
        else{
            x[i].style.backgroundColor = "rgb(233, 236, 239)";
            x[i].style.color = "#495057";
        }
    }
});