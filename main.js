//imports

import { colorButtonChecked } from "./utils/colorButtonChecked.js";
import { sizeButtonChecked } from "./utils/sizeButtonChecked.js";
import { userSelection } from "./utils/selection.js";
import { userDefined } from "./utils/userDefined.js";

const container = document.getElementById("container");
container.addEventListener("mouseover", (e) => (e.target.className = "sq mouseover active-button"));

function start() {
  userSelection();
  userDefined();
  sizeButtonChecked();
  colorButtonChecked();
}

//Calls

start();
