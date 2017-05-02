var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  // add initial colours to squares
  squares[i].style.background = colours[i];

  // add click llisteners to squares
  squares[i].addEventListener("click", function(){
    // grab colour of clicked square
    var clickedColour = this.style.background;
    // compare colour to picked colour
    if(clickedColour === pickedColour){
      messageDisplay.textContent = "Correct!";
      changeColours(clickedColour);
      h1.style.background = clickedColour;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColours(colour){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
  // change each colour to match given colours
    squares[i].style.background = colour;
  }
}

function pickColour(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num){
  //make an array
  var arr = [];
  //add num random colours to arr
  for(var i = 0; i < num; i++){
    arr.push(randomColour());
    //get random colour and push into arr
  };
  //return that array
  return arr;
}

function randomColour(){
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
