let container = document.querySelector('.container');

// Creates div squares based off user input

function createDivs(numOfDivs) {

    let numOfSquares = numOfDivs * numOfDivs;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.className = "sq";
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover";
        });
    }

}

createDivs(16);