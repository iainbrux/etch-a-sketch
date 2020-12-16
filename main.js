//Variables

let container = document.getElementById('container');

const rgbButton = document.getElementById('rgb-button');
const blueButton = document.getElementById('blue-button');
const redButton = document.getElementById('red-button');
const yellowButton = document.getElementById('yellow-button');
const clearButton = document.getElementById('reset-button');
const sixteenButton = document.getElementById('sixteen');
const thirtyTwoButton = document.getElementById('thirty-two');
const sixtyFourButton = document.getElementById('sixty-four');

let userInput = document.getElementById('size-slider');
const userInputDefault = 16;
let sizeValue = document.getElementById('size-value');
let getColor = 'grey';

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
    const size = (720 / userInput) - 2;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = "sq";
        div.style.backgroundColor = 'rgba(255, 255, 255, 255)';
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover active-button";
            div.style.backgroundColor = getColor;
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
        //getColor = 'blue';
    });
}

function redAdd() {
    let square = document.querySelectorAll('.red');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'red';
        });
        //getColor = 'red';
    });
}

function yellowAdd() {
    let square = document.querySelectorAll('.yellow');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'yellow';
        });
        //getColor = 'yellow';
    });
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

redButton.addEventListener("click", function() {
    let square = document.querySelectorAll('.sq');
    for (i = 0; i < square.length; i++) {
        square[i].classList.add("red");
    }
    redAdd();
})

yellowButton.addEventListener("click", function() {
    let square = document.querySelectorAll('.sq');
    for (i = 0; i < square.length; i++) {
        square[i].classList.add("yellow");
    }
    yellowAdd();
})

clearButton.addEventListener("click", function() {
    resetDivs();
});

sixteenButton.addEventListener("click", function() {
    removeDivs();
    createDivs(16);
});

thirtyTwoButton.addEventListener("click", function() {
    removeDivs();
    createDivs(32);
});

sixtyFourButton.addEventListener("click", function() {
    removeDivs();
    createDivs(64);
});

sizeValue.innerHTML = userInput.value;

userInput.oninput = function() {
    sizeValue.innerHTML = this.value;
    removeDivs();
    createDivs(this.value);
}

//Calls

createDivs(userInputDefault);