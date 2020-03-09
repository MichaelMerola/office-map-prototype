var defaultObj;
var activeObj;

var userList = [
    "jon-button",
    "merola-button",
    "jorge-button",
    "meeta-button",
    "meetb-button",
    "restroom-button",
    "printer-button",
    "coffee-button"
]

function start() {
    defaultObj = document.getElementById('default-detail');
    activeObj = defaultObj;
    activeObj.style.display = "block";

    userList.forEach(function (item, index) {
        document.getElementById(item).style.display = "flex";
    });
}

function displayDetail(c) {
    
    var clickedObj = c;
    
    if (clickedObj.style.display === "none" || clickedObj.style.opacity === "") { //clickedObj is off
        //turn off active
        activeObj.style.opacity = "0";
        activeObj.style.display = "none";
        activeObj = clickedObj;

        //turn on new
        clickedObj.style.display = "block";
        setTimeout(() => {
            clickedObj.style.opacity = "1";
        }, 155);
    } 
    else { //clickedObj is on
        //turn off
        clickedObj.style.opacity = "0";
        clickedObj.style.display = "none";
        activeObj = defaultObj;
        //set default
        defaultObj.style.display = "block";
        setTimeout(() => {
            defaultObj.style.opacity = "1";
        }, 155);
        //set active
    }
    //set active
    console.log(activeObj);
}



function searchSkills() {
    console.log("SUBMIT")

    var x = document.getElementById("skill-search");
    var input = x.elements[0].value;

    if (input === "python") {

        var elements = document.getElementsByClassName("python");
        var names = '';
        for(var i=0; i<elements.length; i++) {
            elements[i].style.transform = "scale(1.3)";
        }
        displayDetail(document.getElementById('merola'));
    }
    else if (input === "luis" || input === "luis vega"){
        var target = document.getElementById("jon-button");
        target.style.transform = "scale(1.3)";
        // target.style.border = "100px blue";
        // target.scrollIntoView();

        displayDetail(document.getElementById('jon'))
    }
    else if (input === "michael" || input === "michael merola"){
        document.getElementById("merola-button").style.transform = "scale(1.3)";
        displayDetail(document.getElementById('merola'));
    }
    else if (input === "jorge" || input === "jorge moreno"){
        document.getElementById("jorge-button").style.transform = "scale(1.3)";
        displayDetail(document.getElementById('jorge'));
    }
    else if (input === "coffee") {
        document.getElementById("coffee-button").style.transform = "scale(1.3)";
        displayDetail(document.getElementById('coffee'));
        
    }
    else if (input === "printer") {
        document.getElementById("printer-button").style.transform = "scale(1.3)";
        displayDetail(document.getElementById('printer'));
        
    }
    else if (input === "restroom") {
        var target = document.getElementById("restroom-button");
        target.style.transform = "scale(1.3)";
        target.scrollIntoView();
        // displayDetail(document.getElementById('printer'));
        
    }
    else if (input === "meeting b") {
        document.getElementById("meetb-button").style.transform = "scale(1.3)";
        displayDetail(document.getElementById('meet-b'));
        
    }
    else {
        userList.forEach(function (item, index) {
            document.getElementById(item).style.transform = "scale(1)";
        });

        //turn off
        activeObj.style.opacity = "0";
        activeObj.style.display = "none";
        activeObj = defaultObj;
        //set default
        defaultObj.style.display = "block";
        setTimeout(() => {
            defaultObj.style.opacity = "1";
        }, 155);
    }
}


