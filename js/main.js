let playButton = document.querySelector(".btn--play");

createNewLevel();

playButton.addEventListener("click", createNewLevel);

function createNewLevel() {
  let levelSelect = document.querySelector("#level-select");

  newLevel = parseInt(levelSelect.value);
  numberOfCells = getHowManyCellsNeededFor(newLevel);

  setNumberOfColumns(numberOfCells);
  createCells(numberOfCells);
  addEventListenerToCells();
}

function getHowManyCellsNeededFor(newLevel) {
  const cellsPerLevel = [100, 81, 49];
  let numberOfCells;
  for (let i = 0; i < cellsPerLevel.length; i++) {
    if (i === newLevel) {
      numberOfCells = cellsPerLevel[i];
    }
  }
  return numberOfCells;
}

function setNumberOfColumns(numberOfCells) {
  let gridContainer = document.querySelector(".minefield");

  let numberOfColumns = Math.sqrt(numberOfCells);

  gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
}

function createCells(numberOfCells) {
  let gridContainer = document.querySelector(".minefield");
  gridContainer.textContent = "";

  for (let i = 0; i < numberOfCells; i++) {
    let cell = createNewSingleCell(i);
    gridContainer.append(cell);
  }
}

function createNewSingleCell(index) {
  let cell = document.createElement("div");
  let ratio = document.createElement("div");
  let cellContent = document.createElement("div");

  cell.classList.add("cell");
  ratio.classList.add("ratio");
  cellContent.classList.add("cell-content");

  cellContent.textContent = index + 1;
  cell.append(cellContent);

  return cell;
}

function addEventListenerToCells() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", clickCell);
  }
}

function clickCell() {
  this.classList.add("active");
}
