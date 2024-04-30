let currentInput = '';
let resultDisplayed = false;

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function appendCharacter(char) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }

  currentInput += char;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
    resultDisplayed = true;
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}