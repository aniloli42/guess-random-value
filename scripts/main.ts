import checkInput from "."

const guessForm: HTMLFormElement = document.querySelector("#guessForm")

guessForm.addEventListener("submit", handleGuess)

function handleGuess(e: any): void {
	e.preventDefault()

	const getInput: HTMLInputElement = document.querySelector("#guessedNumber")

	const guessedValue: number = parseInt(getInput.value)

	displayResult(checkInput(guessedValue))
}

// function is used to display the result based on guess
function displayResult({ message, type }) {
	const displayElement: HTMLElement = document.querySelector("#displayResult")

	displayElement.innerText = message
	displayElement.classList.add("visible")

	if (type === "warn") displayElement.classList.add("warning")

	if (type === "success") displayElement.classList.add("success")

	setTimeout(() => {
		displayElement.removeAttribute("class")
	}, 5000)
}
