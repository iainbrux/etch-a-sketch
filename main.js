let container = document.getElementById('container');
let rgbButton = document.getElementById('rgb-button');
let blueButton = document.getElementById('blue-button');

let userInput = 32;

//Conditionals 

if (userInput > 64 || userInput < 0) {
    alert("Number is over specified limit. Please enter a number up to 64.");
    userInput = prompt('Please enter a number up to  and including 64.');
} else if (userInput == undefined) {
    userInput = 16;
}

// Functions

function createDivs(userInput) {

    const numOfSquares = userInput * userInput;
    const size = (640 / userInput) - 2;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = "sq";
        div.style.backgroundColor = 'rgba(255, 255, 255, 255)';
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover active-button"
            div.style.backgroundColor = 'grey';
        });
    }

}

function resetDivs() {

    let div = document.querySelectorAll('.mouseover');
    let rgbDiv = document.querySelectorAll('.rgb')

    for (let i = 0; i < div.length; i++) {
        div[i].classList.remove('mouseover', 'active-button');
        div[i].style.backgroundColor = 'rgba(255, 255, 255, 255)';
    }

    for (let i = 0; i < rgbDiv.length; i++) {
        rgbDiv[i].classList.remove('rgb');
        rgbDiv[i].style.backgroundColor = 'rgba(255, 255, 255, 255)';

    }

}

function removeDivs() {

    let div = document.querySelectorAll('.sq');

    if (container.children) {
        for (let i = 0; i < div.length; i++) {
            let square = div[i];
            container.removeChild(square);
        }
    }

}

function rgbAdd() {

    let square = document.querySelectorAll('.rgb');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            item.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', 255)';
        });
    });
}

function blueAdd() {
    let square = document.querySelectorAll('.blue');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'blue';
        });
    });
}

function sixteen() {
    removeDivs();
    createDivs(16);
}

function thirtyTwo() {
    removeDivs();
    createDivs(32);
}

function sixtyFour() {
    removeDivs();
    createDivs(64);
}

//Events

rgbButton.addEventListener("click", function() {
    let square = document.querySelectorAll('.sq');
    for (i = 0; i < square.length; i++) {
        square[i].classList.add("rgb");
    }
    rgbAdd();
})

blueButton.addEventListener("click", function() {
    let square = document.querySelectorAll('.sq');
    for (i = 0; i < square.length; i++) {
        square[i].classList.add("blue");
    }
    blueAdd();
})

//Calls

createDivs(16);

// I need to create a function that when mouseover a div randomly sets an rgb value
// with this I need a button that will attach a function to the mouseover
//