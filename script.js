const grid = document.querySelector(".grid");
let gridSize = 16;
let color = "black";

createGrid(gridSize);

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.style.height = 650 / size + "px";
    pixel.style.width = 650 / size + "px";
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", () => {
        if(color === 'random'){
        pixel.style.backgroundColor = `rgb(${random()},${random()},${random()})`
        } else{
            pixel.style.backgroundColor = 'black'
        }
    });
    grid.appendChild(pixel);
  }
}

const btnClear = document.querySelector(".btnClr");

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

btnClear.addEventListener("click", () => {
  clearGrid();
  createGrid(gridSize);
});

const btnSize = document.querySelector(".btnSize");

function setSize() {
  gridSize = parseInt(
    prompt("How large would you like your canvas:\n Max Size - 100")
  );

  while (gridSize % 1 !== 0 || 0 > gridSize || gridSize > 100) {
    gridSize = parseInt(
      prompt(
        "- Invalid Argument -\n How large would you like your canvas:\n Max Size - 100"
      )
    );
  }

  return gridSize;
}

btnSize.addEventListener("click", () => {
  clearGrid();
  gridSize = setSize();
  createGrid(gridSize);
});

const drawBlck = document.querySelector(".drawBlck");
const drawRndm = document.querySelector(".drawRndm");

drawBlck.addEventListener("click", () => {
  color = "black";
});

drawRndm.addEventListener("click", () => {
  color = 'random'
});

function random(max=255){
    return Math.floor(Math.random()*max)
}
