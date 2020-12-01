let container = document.querySelector('.container');

// Creates div squares based off user input

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
    }

}

createDivs(64);