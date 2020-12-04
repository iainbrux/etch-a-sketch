let container = document.querySelector('.container');

let userInput = prompt("Please enter a number up to and including 64.", 16);

if (userInput > 64) {
    alert("Number is over specified limit. Please enter a number up to 64.");
    userInput = 16; // sets the default square size to 16
}

// Function takes the userInput and creates the number of divs respective to the sqaure of that number
// and then calculates the square size in px to prevent overflow from the container

function createDivs(numOfDivs) {

    const numOfSquares = numOfDivs * numOfDivs;
    const size = (640 / numOfDivs) - 2;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = "sq";
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover";
        });
    };

};

function resetDivs() {

    let div = document.querySelectorAll('.mouseover');
    for (let i = 0; i <= div.length - 1; i++) {
        div[i].classList.remove('mouseover');
    }

}

createDivs(userInput);