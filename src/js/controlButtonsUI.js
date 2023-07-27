const CHESS_BOARD_SIZE = 8;

import PathFinderGraph from "./PathFinderGraph";
import { displayKnightMoves } from "./chessBoardUI";

const knightPlaced = (event) => {
  let chessBoard = document.getElementById("chess-board");
  let tiles = chessBoard.childNodes;

  tiles.forEach((child) => {
    child.classList.remove("start-tile");
  });
  event.target.classList.add("start-tile");

  let startButton = document.getElementById("start-button");
  startButton.dataset.startX = event.target.dataset.x;
  startButton.dataset.startY = event.target.dataset.y;

  chessBoard.removeEventListener("click", knightPlaced);
};

const allowKnightPlacement = (event) => {
  let chessBoard = document.getElementById("chess-board");
  chessBoard.addEventListener("click", knightPlaced);
  chessBoard.removeEventListener("click", endPlaced);
};

const addPlaceKnightButtonEventListeners = () => {
  let placeKnight = document.getElementById("place-knight-button");
  placeKnight.addEventListener("click", allowKnightPlacement);
};

const endPlaced = (event) => {
  let chessBoard = document.getElementById("chess-board");
  let tiles = chessBoard.childNodes;

  tiles.forEach((child) => {
    child.classList.remove("end-tile");
  });
  event.target.classList.add("end-tile");

  let startButton = document.getElementById("start-button");
  startButton.dataset.endX = event.target.dataset.x;
  startButton.dataset.endY = event.target.dataset.y;

  chessBoard.removeEventListener("click", endPlaced);
};

const allowEndPlacement = (event) => {
  let chessBoard = document.getElementById("chess-board");
  chessBoard.addEventListener("click", endPlaced);
  chessBoard.removeEventListener("click", knightPlaced);
};

const addPlaceEndButtonEventListeners = () => {
  let placeEnd = document.getElementById("place-end-button");
  placeEnd.addEventListener("click", allowEndPlacement);
};

const addStartButtonEventListeners = () => {
  let startButton = document.getElementById("start-button");
  let pathArray = [];

  startButton.addEventListener("click", (event) => {
    if (
      startButton.hasAttribute("data-start-x") &&
      startButton.hasAttribute("data-start-y") &&
      startButton.hasAttribute("data-end-x") &&
      startButton.hasAttribute("data-end-x")
    ) {
      pathArray = PathFinderGraph.findPath(
        startButton.dataset.startX + "," + startButton.dataset.startY,
        startButton.dataset.endX + "," + startButton.dataset.endY
      );

      displayKnightMoves(pathArray);

      let placeKnight = document.getElementById("place-knight-button");
      let randomKnight = document.getElementById("random-knight-button");
      let placeEnd = document.getElementById("place-end-button");
      let randomEnd = document.getElementById("random-end-button");
      let buttons = [placeKnight, randomKnight, placeEnd, randomEnd];

      buttons.forEach((button) => {
        button.addEventListener("click", resetBoard);
      });
    }
  });
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const addRandomKnightButtonEventListeners = () => {
  let randomKnight = document.getElementById("random-knight-button");

  randomKnight.addEventListener("click", (event) => {
    let chessBoard = document.getElementById("chess-board");
    let tiles = chessBoard.childNodes;

    tiles.forEach((child) => {
      child.classList.remove("start-tile");
    });

    let x = getRandomInt(CHESS_BOARD_SIZE);
    let y = getRandomInt(CHESS_BOARD_SIZE);
    let tile = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    tile.classList.add("start-tile");

    let startButton = document.getElementById("start-button");
    startButton.dataset.startX = x;
    startButton.dataset.startY = y;
  });
};

const addRandomEndButtonEventListeners = () => {
  let randomEnd = document.getElementById("random-end-button");

  randomEnd.addEventListener("click", (event) => {
    let chessBoard = document.getElementById("chess-board");
    let tiles = chessBoard.childNodes;

    tiles.forEach((child) => {
      child.classList.remove("end-tile");
    });

    let x = getRandomInt(CHESS_BOARD_SIZE);
    let y = getRandomInt(CHESS_BOARD_SIZE);
    let tile = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    tile.classList.add("end-tile");

    let startButton = document.getElementById("start-button");
    startButton.dataset.endX = x;
    startButton.dataset.endY = y;
  });
};

const resetBoard = () => {
  let startButton = document.getElementById("start-button");
  startButton.removeAttribute("data-start-x");
  startButton.removeAttribute("data-start-y");
  startButton.removeAttribute("data-end-x");
  startButton.removeAttribute("data-end-y");

  let chessBoard = document.getElementById("chess-board");
  let tiles = chessBoard.childNodes;

  tiles.forEach((child) => {
    child.classList.remove("end-tile", "start-tile", "gray-tile");
    child.textContent = "";
  });

  removeResetFromControlButtons();
};

const removeResetFromControlButtons = () => {
  let placeKnight = document.getElementById("place-knight-button");
  let randomKnight = document.getElementById("random-knight-button");
  let placeEnd = document.getElementById("place-end-button");
  let randomEnd = document.getElementById("random-end-button");
  let buttons = [placeKnight, randomKnight, placeEnd, randomEnd];

  buttons.forEach((button) => {
    button.removeEventListener("click", resetBoard);
  });
};

const addResetButtonEventListeners = () => {
  let resetButton = document.getElementById("reset-button");

  resetButton.addEventListener("click", resetBoard);
};

const addControlButtonsEventListeners = () => {
  addPlaceKnightButtonEventListeners();
  addPlaceEndButtonEventListeners();
  addStartButtonEventListeners();
  addRandomKnightButtonEventListeners();
  addRandomEndButtonEventListeners();
  addResetButtonEventListeners();
};

const createControlButtonsUI = () => {
  let container = document.createElement("div");
  container.setAttribute("id", "control-buttons-container");

  let knightContainer = document.createElement("div");

  let placeKnight = document.createElement("button");
  placeKnight.textContent = "PLACE KNIGHT";
  placeKnight.setAttribute("id", "place-knight-button");
  knightContainer.appendChild(placeKnight);

  let randomKnight = document.createElement("button");
  randomKnight.textContent = "PLACE RANDOM KNIGHT";
  randomKnight.setAttribute("id", "random-knight-button");
  knightContainer.appendChild(randomKnight);

  container.appendChild(knightContainer);

  let endContainer = document.createElement("div");

  let placeEnd = document.createElement("button");
  placeEnd.textContent = "PLACE END";
  placeEnd.setAttribute("id", "place-end-button");
  endContainer.appendChild(placeEnd);

  let randomEnd = document.createElement("button");
  randomEnd.textContent = "PLACE RANDOM END";
  randomEnd.setAttribute("id", "random-end-button");
  endContainer.appendChild(randomEnd);

  container.appendChild(endContainer);

  let startButton = document.createElement("button");
  startButton.textContent = "START";
  startButton.setAttribute("id", "start-button");
  container.appendChild(startButton);

  let resetButton = document.createElement("button");
  resetButton.textContent = "RESET BOARD";
  resetButton.setAttribute("id", "reset-button");
  container.appendChild(resetButton);

  return container;
};

export { createControlButtonsUI, addControlButtonsEventListeners };
