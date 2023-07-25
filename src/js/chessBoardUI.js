const CHESS_BOARD_SIZE = 8;

const createChessBoardUI = () => {
  let container = document.createElement("div");
  container.setAttribute("id", "chess-board");

  for (let x = 0; x < CHESS_BOARD_SIZE; x++) {
    for (let y = 0; y < CHESS_BOARD_SIZE; y++) {
      let tile = document.createElement("div");
      if ((x + y) % 2 === 0) {
        tile.classList.add("black-tile");
      } else {
        tile.classList.add("white-tile");
      }
      container.appendChild(tile);
    }
  }
  return container;
};

export default createChessBoardUI;
