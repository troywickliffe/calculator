let shouldResetScreen = false
let currentOperation = null
let firstOperand = ''
let secondOperand = ''

//DOM Manipulation 
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const equalsButton = document.getElementById('equalsBtn')
const currentScreen = document.getElementById('currentScreen')

//Event Listeners
equalsButton.addEventListener('click', evaluate)
pointButton.addEventListener('click', appendPoint)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentScreen.textContent += number
}

function resetScreen() {
    currentScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentScreen.textContent = '0'
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentScreen.textContent === '')
        currentScreen.textContent === '0'
    if (currentScreen.textContent.includes('.')) return
    currentScreen.textContent += '.'
}

function deleteNumber() {
    currentScreen.textContent = currentScreen.textContent
        .toString()
        .slice(0, -1)
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentScreen.textContent
    currentOperation = operator
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentScreen.textContent === '0') {
        alert('You can\'t divide by 0!')
        return
    }
    secondOperand = currentScreen.textContent
    currentScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

//Function for basic math operators
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

//Function that takes an operator, two numbers and calls basic math function
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷': 
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}