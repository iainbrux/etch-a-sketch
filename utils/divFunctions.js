const container = document.querySelector("#container");

export const createDivs = (userInput) => {
  const numOfSquares = userInput * userInput;
  const size = 720 / userInput - 2;

  for (let i = 1; i <= numOfSquares; i++) {
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.className = "sq white";
    container.appendChild(div);
  }
};

export const removeDivs = () => {
  const squares = container.querySelectorAll(".sq");
  if (container.children) {
    squares.forEach((square) => container.removeChild(square));
  }
};

export const resetDivs = () => {
  const container = document.querySelector('#container')
  container.className = "";
  const divs = document.querySelectorAll(".sq");
  divs.forEach((div) => {
    div.className = "sq white";
    div.style.backgroundColor = "";
  });
};
