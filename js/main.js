let gridContainer = document.querySelector(".minefield");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  let ratio = document.createElement("div");
  let cellContent = document.createElement("div");
  cell.classList.add("cell");
  ratio.classList.add("ratio");
  cellContent.classList.add("cell-content");
  cellContent.textContent = i + 1;
  cell.append(cellContent);
  gridContainer.append(cell);
}
