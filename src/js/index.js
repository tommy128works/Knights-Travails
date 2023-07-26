import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// import { header } from "./header";
// import footer from "./footer";
// document.body.appendChild(header());
// document.body.appendChild(footer());

import { createChessBoardUI } from "./chessBoardUI";
import {
  createControlButtonsUI,
  addPlaceKnightButtonEventListeners,
  addPlaceEndButtonEventListeners,
  addStartButtonEventListeners,
} from "./controlButtonsUI";

let contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "content-container");

contentContainer.appendChild(createControlButtonsUI());
contentContainer.appendChild(createChessBoardUI());

document.body.appendChild(contentContainer);

addPlaceKnightButtonEventListeners();
addPlaceEndButtonEventListeners();
addStartButtonEventListeners();

// PathFinderGraph.findPath("3,1", "2,2");
