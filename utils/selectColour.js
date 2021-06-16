const container = document.querySelector('#container');
const userInputColor = document.getElementById("color-picker");

export const rgbAdd = () => {
  container.addEventListener("mouseover", (e) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 255)`;
    e.target.classList.add("rgb");
  });
}

export const blueAdd = () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
    e.target.classList.add("blue");
  })
}

export const redAdd = () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red"
    e.target.classList.add("red")
  });
}

export const yellowAdd = () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "yellow"
    e.target.classList.add("yellow")
  })
}

export const userColorAdd = () => {
  container.addEventListener("mouseover", (e) => e.target.style.backgroundColor = userInputColor.value)
}