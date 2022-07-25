let firstNumber = ''
let secondNumber = ''
let operator = null


const decimalBtn = document.getElementById('decimalBtn');
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn = document.getElementById('clearBtn');
const equalBtn = document.getElementById('equalBtn');
const lastInput = document.getElementById('lastInput')
const currentInput = document.getElementById('currentInput')


function add(firstNumber,secondNumber) {
     return +secondNumber + +firstNumber 
}
function subtract(firstNumber,secondNumber) {
   return firstNumber - secondNumber 
}
function multpily(firstNumber,secondNumber) {
    return firstNumber * secondNumber 
}
function divide(firstNumber,secondNumber) {
    return firstNumber / secondNumber 
}


function operate(operator, firstNumber, secondNumber) {
    
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber)
        case '-':
            return subtract(firstNumber, secondNumber)
        case '*':
            return multpily(firstNumber, secondNumber)
        case '/':
            return divide(firstNumber, secondNumber)
        default:
            return null
    }

}

multiplyBtn.addEventListener('click', inputMultiply)
addBtn.addEventListener('click', inputAdd)
subtractBtn.addEventListener('click', inputSubtract)
divideBtn.addEventListener('click', inputDivide)
decimalBtn.addEventListener('click',addDecimal)

function inputMultiply() {
    if (operator !== null) evaluate()
    lastInput.textContent = currentInput.textContent + ' ' + document.getElementById("multiplyBtn").value;
    firstNumber = currentInput.textContent
    currentInput.textContent = ''
    operator = '*'
}
function inputAdd() {
    if (operator !== null) evaluate()
    lastInput.textContent = currentInput.textContent + ' ' + document.getElementById("addBtn").value;
    firstNumber = currentInput.textContent
    currentInput.textContent = ''
    operator = '+'   
}
function inputSubtract() {
    if (operator !== null) evaluate()
    lastInput.textContent = currentInput.textContent + ' ' + document.getElementById("subtractBtn").value;
    firstNumber = currentInput.textContent
    currentInput.textContent = ''
    operator = '-'
}
function inputDivide() {
    if (operator !== null) evaluate()
    lastInput.textContent = currentInput.textContent + ' ' + document.getElementById("divideBtn").value;
    firstNumber = currentInput.textContent
    currentInput.textContent = ''
    operator = '/'
}
equalBtn.addEventListener('click', evaluate)
deleteBtn.addEventListener('click', deleteNumber)
clearBtn.addEventListener('click', clear)

sevenBtn.addEventListener('click', inputSeven)
eightBtn.addEventListener('click', inputEight)
nineBtn.addEventListener('click', inputNine)
sixBtn.addEventListener('click', inputSix)
fiveBtn.addEventListener('click', inputFive)
fourBtn.addEventListener('click', inputFour)
threeBtn.addEventListener('click', inputThree)
twoBtn.addEventListener('click', inputTwo)
oneBtn.addEventListener('click', inputOne)
zeroBtn.addEventListener('click', inputZero)

function clear() {
    currentInput.textContent = ''
    lastInput.textContent = ''
    secondNumber = ''
    firstNumber = ''
    
       
}
function evaluate() {
    if(operator === null){
        return
    }
    lastInput.textContent = lastInput.textContent + ' ' + currentInput.textContent + ' ='
    secondNumber = currentInput.textContent
    currentInput.textContent = ''
    if(operator === '/' && secondNumber === '0'){
        alert('Error: You can not divide by 0')
        currentInput.textContent = ''
        lastInput.textContent = ''
        return
    }
    if(secondNumber === ''){
        return '0'
    }
    currentInput.textContent = currentInput.textContent + operate(operator, firstNumber, secondNumber);
    operator = null
    
}
function deleteNumber() {
    currentInput.textContent = currentInput.textContent.toString().slice(0, -1)
}
function resetScreen() {
    currentInput.textContent = ''
}
function addDecimal() {
    if(currentInput.textContent === '') {
        currentInput.textContent = currentInput.textContent + '0.'
    }
    else {currentInput.textContent = currentInput.textContent + '.'}
}


function inputSeven () {
    currentInput.textContent += document.getElementById("sevenBtn").value;
}

function inputEight () {
    currentInput.textContent += document.getElementById("eightBtn").value;
}

function inputNine () {
    currentInput.textContent += document.getElementById("nineBtn").value;
}

function inputSix () {
    currentInput.textContent += document.getElementById("sixBtn").value;
}

function inputFive () {
    currentInput.textContent += document.getElementById("fiveBtn").value;
}

function inputFour () {
    currentInput.textContent += document.getElementById("fourBtn").value;
}

function inputThree () {
    currentInput.textContent += document.getElementById("threeBtn").value;
}

function inputTwo () {
    currentInput.textContent += document.getElementById("twoBtn").value;
}

function inputOne () {
    currentInput.textContent += document.getElementById("oneBtn").value;
}

function inputZero () {
    currentInput.textContent += document.getElementById("zeroBtn").value;
}



