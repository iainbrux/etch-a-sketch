import { removeDivs, createDivs } from "./divFunctions.js";
import { colorButtonChecked } from './colorButtonChecked.js'
import { userColorAdd } from './selectColour.js'

const userInput = document.getElementById("size-slider");
const userInputColor = document.getElementById("color-picker");
const sizeValue = document.getElementById("size-value");
const colorValue = document.getElementById("color-value");

export const userDefined = () => {
  userInput.addEventListener("input", () => {
    sizeValue.innerHTML = userInput.value
    removeDivs();
    createDivs(sizeValue.innerHTML);
    colorButtonChecked();
  });

  userInputColor.addEventListener("input", () => {
    colorValue.innerHTML = userInputColor.value;
    const container = document.querySelector("#container");
    container.addEventListener("mouseover", (e) => {
      e.target.classList.add("user-color")
    })
    userColorAdd();
  });
};
