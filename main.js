let container = document.getElementById('container');

let userInput = 32;

if (userInput > 64 || userInput < 0) {
    alert("Number is over specified limit. Please enter a number up to 64.");
    userInput = prompt('Please enter a number up to  and including 64.');
} else if (userInput == undefined) {
    userInput = 16;
}


// Function takes the userInput and creates the number of divs respective to the sqaure of that number
// and then calculates the square size in px to prevent overflow from the container

function createDivs(userInput) {

    const numOfSquares = userInput * userInput;
    const size = (640 / userInput) - 2;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = "sq";
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover active-button";
        });
    }

}

function resetDivs() {

    let div = document.querySelectorAll('.mouseover');

    for (let i = 0; i < div.length; i++) {
        div[i].classList.remove('mouseover', 'active-button');
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

function sixteen() {
    removeDivs();
    createDivs(16);
}

function thirtyTwo() {
    removeDivs();
    createDivs(32);
}

createDivs(16);