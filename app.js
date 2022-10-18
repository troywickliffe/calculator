//DOM Manipulation 
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const equalsButton = document.getElementById('equalsBtn')

//Event Listeners
equalsButton.addEventListener('click', evaluate)
pointButton.addEventListener('click', appendPoint)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)

//Basic calculator functions
function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}