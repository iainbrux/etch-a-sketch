import { blueAdd, redAdd, yellowAdd, rgbAdd } from "./selectColour.js";

const rgbButton = document.getElementById("rgb-button");
const blueButton = document.getElementById("blue-button");
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");

export const colorButtonChecked = () => {
  if (blueButton.checked) {
    blueAdd();
  } else if (redButton.checked) {
    redAdd();
  } else if (yellowButton.checked) {
    yellowAdd();
  } else if (rgbButton.checked) {
    rgbAdd();
  }
}