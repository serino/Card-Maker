let square = document.getElementById("square");

let textBox = document.getElementById("textBox");

let backgroundColorPicker = document.getElementById("backgroundColorPicker");

let fontSizeSlider = document.getElementById("fontSizeSlider");

textBox.addEventListener("input", showText);

backgroundColorPicker.addEventListener("input", customBackgroundColor);
fontSizeSlider.addEventListener("input", customFontSize);

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
  fontSizeSlider.value = 40;
  square.style.fontSize = "40px";
}

function changePixelSixty() {
  fontSizeSlider.value = 60;
  square.style.fontSize = "60px";
}

function changePixelEighty() {
  fontSizeSlider.value = 80;
  square.style.fontSize = "80px";
}

function showText() {
  square.innerHTML = textBox.value;
}

function customBackgroundColor() {
  square.style.backgroundColor = backgroundColorPicker.value;
}

function customFontSize() {
  square.style.fontSize = fontSizeSlider.value + "px";

}

