import { createDivs, removeDivs } from './divFunctions.js'

let userInput = document.getElementById("size-slider");
const sixteenButton = document.getElementById("sixteen");
const thirtyTwoButton = document.getElementById("thirty-two");
const sixtyFourButton = document.getElementById("sixty-four");

export const sizeButtonChecked = () => {
  if (sixteenButton.checked) {
    userInput = "16";
    removeDivs();
    createDivs(userInput);
  } else if (thirtyTwoButton.checked) {
    userInput = "32";
    removeDivs();
    createDivs(userInput);
  } else if (sixtyFourButton.checked) {
    userInput = "64";
    removeDivs();
    createDivs(userInput);
  } else {
    userInput = document.getElementById("size-slider");
    createDivs(userInput);
  }
}