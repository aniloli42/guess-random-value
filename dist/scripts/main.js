import checkInput from "./index.js";
let timeoutInit = false;
let timeout;
function displayResult({ message, type }) {
    const displayElement = document.querySelector("#displayResult");
    displayElement.innerText = message;
    displayElement.classList.add("visible");
    if (type === "warn") {
        displayElement.classList.add("warning");
        displayElement.classList.remove("success");
    }
    if (type === "success") {
        displayElement.classList.add("success");
        displayElement.classList.remove("warning");
    }
    timeoutInit = true;
    timeout = setTimeout(() => {
        displayElement.removeAttribute("class");
        timeoutInit = false;
    }, 5000);
}
const guessForm = document.querySelector("#guessForm");
guessForm.addEventListener("submit", handleGuess);
function handleGuess(e) {
    e.preventDefault();
    if (timeoutInit === true) {
        clearTimeout(timeout);
        timeoutInit = false;
    }
    const getInput = document.querySelector("#guessedNumber");
    const guessedValue = parseInt(getInput.value);
    displayResult(checkInput(guessedValue));
}
// function is used to display the result based on guess
