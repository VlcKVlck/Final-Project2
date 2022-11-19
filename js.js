
document.addEventListener('DOMContentLoaded',  initialize);
let i=0;
function showOutput(inputElement) {
    const outputElement = document.querySelectorAll('.outputKey');
    console.log(inputElement)
    if (i < 5) {
        outputElement[i].innerHTML = inputElement.path[0].id;
    }
    i++;
}

function initialize() {
    console.log("loaded")
    const inputButtons = document.getElementsByClassName("letters");
    Array.from(inputButtons).forEach(function(btn) {
         btn.addEventListener('click', showOutput);
    });
}







