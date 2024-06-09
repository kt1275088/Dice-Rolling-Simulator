// JavaScript code for Dice Rolling Simulator

// Function to generate a random number between 1 and 6 (representing the dice)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to display the result of rolling the dice
function displayResult() {
    const result = rollDice();
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `You rolled a ${result}!`;
}

// Event listener for the roll button
const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', displayResult);
