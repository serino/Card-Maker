let square = document.getElementById("square");

let birthdayButton = document.getElementById("birthdayButton");
let congratsButton = document.getElementById("congratsButton");
let getWellButton = document.getElementById("getWellButton");

let mistyRoseButton = document.getElementById("mistyRoseButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");

let redTextButton = document.getElementById("redTextButton");
let greenTextButton = document.getElementById("greenTextButton");
let blueTextButton = document.getElementById("blueTextButton");

let pixel40Button = document.getElementById("pixel40Button");
let pixel60Button = document.getElementById("pixel60Button");
let pixel80Button = document.getElementById("pixel80Button");

let textBox = document.getElementById("textBox");

let paragraph = document.getElementById("paragraph");

let backgroundColorPicker = document.getElementById("backgroundColorPicker");

let fontSizeSlider = document.getElementById("fontSizeSlider");

birthdayButton.addEventListener("click", sayHappyBirthday);
congratsButton.addEventListener("click", sayCongrats);
getWellButton.addEventListener("click", sayGetWell);

mistyRoseButton.addEventListener("click", changeBackgroundMisty);
greenButton.addEventListener("click", changeBackgroundSpring);
blueButton.addEventListener("click", changeBackgroundSky);

redTextButton.addEventListener("click", changeTextRed);
greenTextButton.addEventListener("click", changeTextGreen);
blueTextButton.addEventListener("click", changeTextBlue);

pixel40Button.addEventListener("click", changePixelForty);
pixel60Button.addEventListener("click", changePixelSixty);
pixel80Button.addEventListener("click", changePixelEighty);

textBox.addEventListener("input", showText);

backgroundColorPicker.addEventListener("input", changeBackgroundColor);

fontSizeSlider.addEventListener("input", changeFontSize);


function sayHappyBirthday() {
  square.innerText = "Happy Birthday!";
}

function sayCongrats() {
  square.innerText = "Congrats!";
}

function sayGetWell() {
  square.innerText = "Get Well Soon!";
}

function changeBackgroundMisty() {
  square.style.backgroundColor = "mistyrose";
}

function changeBackgroundSpring() {
  square.style.backgroundColor = "springgreen";
}

function changeBackgroundSky() {
  square.style.backgroundColor = "skyblue";
}
  
function changeTextRed() {
  square.style.color = "red";
}

function changeTextGreen() {
  square.style.color = "green";
}

function changeTextBlue() {
  square.style.color = "blue";
}

function changePixelForty() {
  square.style.fontSize = "40px";
}

function changePixelSixty() {
  square.style.fontSize = "60px";
}

function changePixelEighty() {
  square.style.fontSize = "80px";
}

function showText() {
  square.innerHTML = textBox.value;
}

function changeBackgroundColor() {
  square.style.backgroundColor = backgroundColorPicker.value;
}

function changeFontSize() {
  square.style.fontSize = fontSizeSlider.value + "px";
}

