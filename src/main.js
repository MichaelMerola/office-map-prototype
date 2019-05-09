var defaultObj;
var activeObj;

function start() {
    defaultObj = document.getElementById('default-detail');
    activeObj = defaultObj;
    activeObj.style.display = "block";
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

    if (input === "apex") {

        var elements = document.getElementsByClassName("apex");
        var names = '';
        for(var i=0; i<elements.length; i++) {
            elements[i].style.display = "flex";
        }
    }
    else if (input === "jon smith"){
        document.getElementById("jon-button").style.display = "flex";
    }
    else if (input === "coffee") {
        document.getElementById("coffee-label").style.display = "flex";
        
    }
    else {
        document.getElementById("riso-button").style.display = "none";
        document.getElementById("alex-button").style.display = "none";
        document.getElementById("merola-button").style.display = "none";
        document.getElementById("jon-button").style.display = "none";
        document.getElementById("coffee-label").style.display = "none";

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

 function emailRiso () {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=164fb7e7041c6478','_blank');
 }

