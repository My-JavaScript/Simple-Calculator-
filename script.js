// Function to append numbers to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = number; // Replace '0' or 'Error' with the number
    } else {
        display.value += number; // Append the number to the current value
    }
}

// Function to append operators to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    // Prevent multiple operators in a row
    if (!['+', '-', '*', '/'].includes(lastChar)) {
        display.value += operator;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch {
        // Handle any errors that occur during evaluation
        display.value = 'Error';
    }
}
