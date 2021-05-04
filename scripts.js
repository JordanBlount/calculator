//TODO: Add multiply, divide, subtract, add. (Look up the rules for each)
//      Do not forget about negative numbers.

//TODO: Add functionality to the plus/negative button

//TODO: Method to display text

//TODO: Add percents using floats (I think). I'll probably have to convert
//      between floats and integers. Look that up.

//TODO: Make it so that a button's focus can be maintained. OR change all
//      to divs instead of buttons. EX: the symbol buttons

//TODO: Make current_number text move to left dynamically based 
//      on size of number

const display = document.getElementById('current_number');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

let firstNum = "";
let secondNum = "";
let currentOperator = null;
let resetScreen = false;

const numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach(num => {
    num.addEventListener('click', function() {
        if(display.textContent == "Not a number") {
            display.textContent = "";
        }
        appendNum(num.textContent);
    });
});
const symbolButtons = Array.from(document.querySelectorAll('.symbol_button'));
symbolButtons.forEach(symbol => {
    symbol.addEventListener('click', function() {
        console.log("REACHED");
        setOperation(symbol.textContent);
    });
});

equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearScreen);

function appendNum(num) {
    if (display.textContent === '0' || resetScreen) reset();
    display.textContent += num;
}

function setOperation(operation) {
    if(currentOperator !== null) calculate();
    firstNum = display.textContent;
    currentOperator = operation;
    resetScreen = true;
}

function calculate() {
    if(currentOperator === null || resetScreen) return;
    if(currentOperator === '÷' && display.textContent === '0') {
        display.textContent = "Not a number";
        clearScreen();
        return;
    }
    secondNum = display.textContent;
    console.log('CHEGOU');
    display.textContent = roundNum(operate(currentOperator, firstNum, secondNum));
    console.log(display.textContent);
    currentOperator = null;
}

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function reset() {
    display.textContent = "";
    resetScreen = false;
}

function clearScreen() {
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    currentOperator = null;
    resetScreen = false;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if(b === 0) return null;
        else return a / b;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function operate (operator, a, b) {
    switch(operate) {
        case '*':
            return multiply(a, b);;
        case '÷':
            return divide(a, b);
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        default:
            return null;
    }
    return value;
}