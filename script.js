let color = "black";

document.addEventListener("DOMContentLoaded", () => {
  createGridCells(16);
});

const GRIDSIZE = 500;

let sketchArea = document.querySelector(".sketchArea");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

const reSize = document.querySelector("#resize");
reSize.addEventListener("click", () => {
  removeGridCells();
  let input = prompt("Enter the grid size");
  if (input <= 0 || input > 100) {
    alert("Please enter something in the range 1-100");
    createGridCells(16);
  } else createGridCells(input);
});

function createGridCells(squaresPerSide) {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const btn = document.querySelector("#clear");
  for (let i = 0; i < numOfSquares; i++) {
    let gridCell = document.createElement("div");
    gridCell.style.width = `${GRIDSIZE / squaresPerSide - 2}px`;
    gridCell.style.height = `${GRIDSIZE / squaresPerSide - 2}px`;
    gridCell.classList.add("cells");
    sketchArea.appendChild(gridCell);
    gridCell.addEventListener("mouseover", colorDiv);
    btn.addEventListener("click", () => {
      gridCell.style.backgroundColor = "white";
    });
  }
}

function removeGridCells() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}

function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}
