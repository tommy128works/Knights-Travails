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

export default createControlButtonsUI;
