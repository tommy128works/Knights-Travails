import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// import { header } from "./header";
// import footer from "./footer";
// document.body.appendChild(header());
// document.body.appendChild(footer());

import createChessBoardUI from "./chessBoardUI";
import createControlButtonsUI from "./controlButtonsUI";
import PathFinder from "./PathFinder";

let contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "content-container");

contentContainer.appendChild(createControlButtonsUI());
contentContainer.appendChild(createChessBoardUI());

document.body.appendChild(contentContainer);

PathFinder.findPath(0, 0, 0, 4);
