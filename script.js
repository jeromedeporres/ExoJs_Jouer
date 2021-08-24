/* var pageTitle = document.querySelector('h1');
var htmlTitle = document.querySelector('#html-title');
var cssTitle = document.querySelector('#css-title');
var jsTitle = document.querySelector('#js-title');
var strongArray = document.querySelectorAll('strong');
 
pageTitle.addEventListener('mouseenter', colormodify_1);
pageTitle.addEventListener('mouseleave', colormodify_2);
htmlTitle.addEventListener('click', addWaves);
cssTitle.addEventListener('click', addWaves);
jsTitle.addEventListener('click', addWaves);
strongArray[0].addEventListener('mouseover', changeColor);
strongArray[1].addEventListener('mouseover', changeColor);
strongArray[2].addEventListener('mouseover', changeColor);
strongArray[3].addEventListener('mouseover', changeColor);
strongArray[4].addEventListener('mouseover', changeColor);
strongArray[5].addEventListener('mouseover', changeColor);

function colormodify_1() {
    event.target.style.backgroundColor = "orange";
    event.target.style.color = "darkred";
}
function colormodify_2() {
    event.target.style.backgroundColor = "darkred";
    event.target.style.color = "white";
}
function addWaves() {
  event.target.innerHTML = "~ " + event.target.innerHTML + " ~";
}
function changeColor() {
    if (event.target.style.backgroundColor != "yellow") {
        event.target.style.backgroundColor = "yellow";
    }
    else {
        event.target.style.backgroundColor = "cyan";
    }
} 


var count = 0;
var player1 = document.querySelector("validBtnP1");
var player2 = document.querySelector("validBtnP2");


player1.addEventListener("click", checknumber);
player2.addEventListener("click", checknumber);

function checknumber (theForm) {
    if (pareInt(theForm.player1.value) == (parseInt(theForm.player2.value))){
        alert("NO");
    }
}
function checknumber (theForm){
    if (pareInt(theForm.player1.value) != (theForm.parseInt(player2.value))){
        alert("YES");
    }
}
 

function checknumber(theForm) {   
    if (parseInt(theForm.player2.value) == (parseInt(theForm.player1.value))) 
       { 
       alert('WON');
              
               } else 
        alert('Try Again');
               
   } 
 
 
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

/* document.getElementById("valider").addEventListener("onclick", valider2);
document.getElementById("valider").addEventListener("onclick", valider2);
 

player1.addEventListener("click", valider);
player2.addEventListener("click", valider);

function valider() {
    if (parseInt(player1.value) == (parseInt(player2.value))) {
        alert('OK');
    }else
        alert('Not OK');
}*/



function check() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    if (isNaN(player1) || isNaN(player2) === true) {
        document.getElementById("result").innerHTML = "Entrez un nombre";
    } else {
        if (player1 < player2) {
            alert('C\'est plus grand');
        } else if (player1 == player2) {
            alert('Vous etre gagné');
        } else if (player1 > player2) {
            alert('C\'est plus petit');
        }
    }
}