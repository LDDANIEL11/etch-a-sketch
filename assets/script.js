"use strict";

//setting up the defualt color
let color = "black";

function boardCreator(size) {
  const container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    square.style.backgroundColor = "#e0e0e0";
    square.addEventListener("mouseover", colorSquare);
    container.appendChild(square);
  }
}

//changing the color based on the users choice
function changeColor(choice) {
  color = choice;
}

//setting up a function to change the bg color of divs inside the sketchboard based on users choice
function colorSquare() {
  if (color == "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color == "gray") {
    this.style.backgroundColor = "gray";
  } else if (color == "black") {
    this.style.backgroundColor = "#000000";
  } else {
    this.style.backgroundColor = "#e0e0e0";
  }
}

//function for the reset button
function resetContainer() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
  boardCreator(16);
}

//function for changing grid numbers
function changeSize(input) {
  if (input <= 100 && input >= 2) {
    boardCreator(input);
  } else if (input > 100) {
    alert("Wrong input! too many squares!!!");
  } else {
    alert("Wrong input! too low squares!!!");
  }
}

boardCreator(16);
