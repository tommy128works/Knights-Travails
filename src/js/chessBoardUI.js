const CHESS_BOARD_SIZE = 8;

const displayKnightMoves = (pathArray) => {
  for (let i = 0; i < pathArray.length; i++) {
    let coordinates = pathArray[i];
    coordinates = coordinates.split(",");
    let x = coordinates[0];
    let y = coordinates[1];
    let tile = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    tile.textContent = i;

    if (i !== 0 || i !== pathArray.length - 1) {
      tile.classList.add("gray-tile");
    }
  }
};

const createChessBoardUI = () => {
  let container = document.createElement("div");
  container.setAttribute("id", "chess-board");

  for (let i = 0; i < CHESS_BOARD_SIZE; i++) {
    for (let j = 0; j < CHESS_BOARD_SIZE; j++) {
      let tile = document.createElement("div");
      if ((i + j) % 2 === 0) {
        tile.classList.add("black-tile");
      } else {
        tile.classList.add("white-tile");
      }
      tile.dataset.x = j;
      tile.dataset.y = 7 - i;
      container.appendChild(tile);
    }
  }
  return container;
};

export { createChessBoardUI, displayKnightMoves };
