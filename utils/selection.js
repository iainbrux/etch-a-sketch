const rgbButton = document.getElementById("rgb-button");
const blueButton = document.getElementById("blue-button");
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const clearButton = document.getElementById("reset-button");
const sixteenButton = document.getElementById("sixteen");
const thirtyTwoButton = document.getElementById("thirty-two");
const sixtyFourButton = document.getElementById("sixty-four");

import { sizeButtonChecked } from "./sizeButtonChecked.js";
import { colorButtonChecked } from "./colorButtonChecked.js";
import { resetDivs } from "./divFunctions.js";

export const userSelection = () => {
  rgbButton.addEventListener("click", function () {
    rgbButton.checked = "true";
    colorButtonChecked();
  });

  blueButton.addEventListener("click", function () {
    blueButton.checked = "true";
    colorButtonChecked();
  });

  redButton.addEventListener("click", function () {
    redButton.checked = "true";
    colorButtonChecked();
  });

  yellowButton.addEventListener("click", function () {
    yellowButton.checked = "true";
    colorButtonChecked();
  });

  clearButton.addEventListener("click", function () {
    resetDivs();
  });

  sixteenButton.addEventListener("click", function () {
    sixteenButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
  });

  thirtyTwoButton.addEventListener("click", function () {
    thirtyTwoButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
  });

  sixtyFourButton.addEventListener("click", function () {
    sixtyFourButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
  });
};
