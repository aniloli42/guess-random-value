import checkInput from "./index.js"

let timeoutInit = false
let timeout: any

function displayResult({ message, type }) {
	const displayElement: HTMLElement = document.querySelector("#displayResult")

	displayElement.innerText = message
	displayElement.classList.add("visible")

	if (type === "warn") {
		displayElement.classList.add("warning")
		displayElement.classList.remove("success")
	}

	if (type === "success") {
		displayElement.classList.add("success")
		displayElement.classList.remove("warning")
	}

	timeoutInit = true

	timeout = setTimeout(() => {
		displayElement.removeAttribute("class")

		timeoutInit = false
	}, 5000)
}

const guessForm: HTMLFormElement = document.querySelector("#guessForm")

guessForm.addEventListener("submit", handleGuess)

function handleGuess(e: any): void {
	e.preventDefault()

	if (timeoutInit === true) {
		clearTimeout(timeout)
		timeoutInit = false
	}

	const getInput: HTMLInputElement = document.querySelector("#guessedNumber")

	const guessedValue: number = parseInt(getInput.value)

	displayResult(checkInput(guessedValue))
}

// function is used to display the result based on guess
