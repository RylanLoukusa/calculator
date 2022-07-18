let firstNumber = ''
let secondNumber = ''
let currentOperation = null


const sevenBtn = document.getElementById('sevenBtn');
const eightBtn = document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn');
const divideBtn = document.getElementById('divideBtn');
const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn = document.getElementById('sixBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const oneBtn = document.getElementById('oneBtn');
const twoBtn = document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const subtractBtn = document.getElementById('subtractBtn');
const zeroBtn = document.getElementById('zeroBtn');
const decimalBtn = document.getElementById('decimalBtn');
const deleteBtn = document.getElementById('deleteBtn');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const equalBtn = document.getElementById('equalBtn');
const lastInput = document.getElecmentById('lastInput')
const currentInput = document.getElementById('currentInput')


function add(a,b) {
     return a + b 
}
function subtract(a,b) {
   return a - b 
}
function multpily(a,b) {
    return a * b 
}
function divide(a,b) {
    return a / b 
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multpily(a,b)
        case '/':
            return divide(a,b)
        default:
            return null
    }

}

equalsButton.addEventListener('click', evaluate)
deleteButton.addEventListener('click', deleteNumber)
clearButton.addEventListener('click', clear)

function clear() {
    currentInput.textContent = '0'
    lastInput.textContent = ''
    firstNumber = ''
    secondNumber = ''
    currentInput = null
}
function evaluate() {
    secondNumber = currentInput.textContent
    currentInput.textContent = operate(currentInput, firstNumber, secondNumber)

    lastInput.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
    currentOperation = null
}
function deleteNumber() {
    currentInput.textContent = currentInput.textContent.toString().slice(0, -1)
}

sevenBtn.addEventListener('click', inputNumber)
eightBtn.addEventListener('click', inputNumber)
nineBtn.addEventListener('click', inputNumber)
fourBtn.addEventListener('click', inputNumber)
fiveBtn.addEventListener('click', inputNumber)
sixBtn.addEventListener('click', inputNumber)
threeBtn.addEventListener('click', inputNumber)
twoBtn.addEventListener('click', inputNumber)
oneBtn.addEventListener('click', inputNumber)
zeroBtn.addEventListener('click', inputNumber(button.textContent))

function inputNumber(number) {
    if(currentInput === '0' ){
        resetScreen()
    }
    currentInput.textContent += number
}
function resetScreen() {
    currentInput.textContent = ''
}
