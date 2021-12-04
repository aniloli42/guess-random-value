/*
Code: Guess the random number
*/
// function whose generator random number
function generateNumber(min = 0, max = 100) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.ceil(Math.random() * (max - min) + min);
}
let generatedNumber = generateNumber();
function changeNumber() {
    generatedNumber = generateNumber();
}
// check the condition where the number matches or lower or greater
function checkInput(inputNumber) {
    if (inputNumber < generatedNumber)
        return {
            message: `Your guess is wrong. Value is greater than ${inputNumber}.`,
            type: "warn",
        };
    if (inputNumber > generatedNumber)
        return {
            message: `Your guess is wrong. Value is less than ${inputNumber}.`,
            type: "warn",
        };
    if (inputNumber === generatedNumber) {
        changeNumber();
        return {
            message: `Your guess is correct. Value is ${inputNumber}.`,
            type: "success",
        };
    }
}
export default checkInput;
