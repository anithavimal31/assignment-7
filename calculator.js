let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquare() {
    try {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateCube() {
    try {
        currentInput = Math.pow(parseFloat(currentInput), 3).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
