const GRIDSIZE = 500;
let squaresPerSide = 16;

let sketchArea = document.querySelector(".sketchArea");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function createGridCells() {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const btn = document.querySelector("#clear");
  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${GRIDSIZE / squaresPerSide - 2}px`;
    gridCell.style.height = `${GRIDSIZE / squaresPerSide - 2}px`;
    gridCell.classList.add("cells");
    sketchArea.appendChild(gridCell);
    gridCell.addEventListener("mouseover", () => {
      gridCell.style.backgroundColor = "black";
    });
    btn.addEventListener("click", () => {
      gridCell.style.backgroundColor = "white";
    });
  }
}

createGridCells();
