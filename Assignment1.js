//alert("Loaded");
//document.getElementById(btn1).innerHTML = "English"

var button1 = document.getElementById("btn1");
var pa1 = document.getElementById("p1");
var header1 = document.getElementById("he1");
let button2 = document.getElementById("btn2");
let area = document.getElementById("Area51");
let bod = document.querySelector("body");
let button3 = document.getElementById("end");
let pend1 = document.getElementById("pend");


let pinAlpha = 0;
let pinBeta = 0;
let pinGamma = 0;
let syntaxExpressCode = 0;

button1.addEventListener("click", eventOne);
//p1.addEventListener("mouseover", button1.innerHTML = "Click Me");
button1.addEventListener("mouseover", eventThree);
button1.addEventListener("mouseout", eventTwo);
button3.addEventListener("click", eventSeven);
//area.addEventListener("dblclick", eventFive);
bod.addEventListener("keyup", eventSix);
bod.addEventListener("keydown", eventFive);
window.addEventListener("dblclick", raveBreak);

function eventOne()
{
document.getElementById("li1").innerHTML = "That's what you are using";
  if (pinAlpha < 1) {
  pinAlpha = 1;
  document.getElementById("btn2").innerHTML = "Activated";
  button2.addEventListener("click", eventFour);
  }
}

function eventTwo()
{
button1.addEventListener("mouseover", button1.innerHTML = "Click Me");
}

function eventThree()
{
button1.addEventListener("mouseover", button1.innerHTML = "Нажмите меня");
//alert("In EventThree");
}

function eventFour()
{
pinBeta = 1;
//area.background.color = "red";
//area.innerHTML = "1";
alert("pinAlpha has already unlocked, pinBeta is now active as well.");
}

function eventFive()
{
  if (syntaxExpressCode == 42) {

  }else {
    document.body.style.backgroundColor = "red";
  }

}

function eventSix()
{
  if (pinBeta >= 1) {
    alert("pinGamma has activated");
    pinGamma = 1;
    pend1.innerHTML = "Be Ready";
  }else {
    alert("pinBeta missing");
  }
}

function eventSeven()
{
if (pinAlpha == 1 && pinBeta == 1 && pinGamma == 1) {
document.body.style.backgroundColor = "black";
syntaxExpressCode = 42;
alert("Ascendance Achieved");
document.body.innerHTML = '';
}

}

function raveBreak()
{
area.style.backgroundColor = "Yellow";

}
