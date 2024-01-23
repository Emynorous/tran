let currentInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendOperator(newOperator) {
    operator = newOperator;
    currentInput += operator;
    updateResult();
}

function clearResult() {
    currentInput = '';
    operator = '';
    updateResult();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function calculateFactorial() {
    const number = parseInt(currentInput);
    if (!isNaN(number) && number >= 0) {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        currentInput = result.toString();
        updateResult();
    } else {
        currentInput = 'Error';
        updateResult();
    }
}

function calculateFibonacci() {
    const number = parseInt(currentInput);
    if (!isNaN(number) && number >= 0) {
        let fib = [0, 1];
        for (let i = 2; i <= number; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        currentInput = fib[number].toString();
        updateResult();
    } else {
        currentInput = 'Error';
        updateResult();
    }
}

function calculateCos() {
    const radians = parseFloat(currentInput);
    if (!isNaN(radians)) {
        const result = Math.cos(radians);
        currentInput = result.toString();
        updateResult();
    } else {
        currentInput = 'Error';
        updateResult();
    }
}

function calculateSin() {
    const radians = parseFloat(currentInput);
    if (!isNaN(radians)) {
        const result = Math.sin(radians);
        currentInput = result.toString();
        updateResult();
    } else {
        currentInput = 'Error';
        updateResult();
    }
}

function calculateLog() {
    const number = parseFloat(currentInput);
    if (!isNaN(number) && number > 0) {
        const result = Math.log10(number);
        currentInput = result.toString();
        updateResult();
    } else {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}