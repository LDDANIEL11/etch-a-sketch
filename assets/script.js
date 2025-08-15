"use strict";

let color = "black";

divCreation(16);

function divCreation(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  //i dont know how these work technically found em somwhere else
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}

function colorSquare() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color == "black") {
    this.style.backgroundColor = "#000000";
  } else if (color == "gray") {
    this.style.backgroundColor = "gray";
  } else {
    this.style.backgroundColor = "#e0e0e0";
  }
}

function resetContainer() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}

function changeSize(input) {
  input >= 2 && input <= 100
    ? divCreation(input)
    : console.log("input error! to many or to few squares");
}

function changeColor(choice) {
  color = choice;
}
