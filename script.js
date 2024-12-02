// Select the display input
const display = document.getElementById('display');

// Function to append a value to the display
function appendValue(value) {
  // If display has placeholder "0", replace it
  if (display.value === "0") {
    display.value = value;
  } else {
    // Add the clicked value to the current value
    display.value += value;
  }
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (error) {
    // If there’s an error in the calculation, show "Error"
    display.value = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  // Reset the display to placeholder "0"
  display.value = "0";
}
