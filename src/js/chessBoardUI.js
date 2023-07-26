const CHESS_BOARD_SIZE = 8;

const createArrow = () => {};

const addKnightMove = () => {};

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

export { createChessBoardUI, addKnightMove };
