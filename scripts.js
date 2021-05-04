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
const deleteButton = document.querySelector('#delete');
const percentButton = document.querySelector('#percent');
const equalsButton = document.querySelector('#equals');
const zeroButton = document.querySelector('.bigger_button');

let firstNum = "";
let secondNum = "";
let currentOperator = null;
let resetScreen = false;

const numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach(num => {
    num.addEventListener('click', function() {
        appendNum(num.textContent);
    });
});
const symbolButtons = Array.from(document.querySelectorAll('.symbol_button'));
symbolButtons.forEach(symbol => {
    symbol.addEventListener('click', function() {
        setOperation(symbol.textContent);
    });
});

equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteNum);
percentButton.addEventListener('click', percentage);
zeroButton.addEventListener('click', function() {
    appendNum('0');
});

function appendNum(num) {
    if (display.textContent === '0' || resetScreen) reset();
    display.textContent += num;
}

function deleteNum() {
    display.textContent = display.textContent.slice(0, -1);
}

function percentage() {
    if(display.textContent !== '') {
        let num = (Number(display.textContent) / 100) * 1.0;
        display.textContent = num;
    }
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

function setOperation(operation) {
    if(currentOperator !== null) calculate();
    firstNum = display.textContent;
    currentOperator = operation;
    resetScreen = true;
}

function calculate() {
    if(currentOperator === null || resetScreen) return;
    if(currentOperator === '÷' && display.textContent === '0') {
        alert("Not a number");
        clearScreen();
        return;
    }
    secondNum = display.textContent;
    display.textContent = roundNum(operate(currentOperator, firstNum, secondNum));
    currentOperator = null;
}

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if(b === 0) {
        return null;
    } else {
        return a / b;
    }
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function operate (operator, a, b) {
    //MAKE SURE THESE ARE INTEGERS AND NOT STRINGS
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case 'x':
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
}