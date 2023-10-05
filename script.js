let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to calculate the absolute difference between two numbers
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
}

// Function to generate the target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Function to compare guesses and determine the winner
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Please enter a number between 0 and 9.');
    return false; // User's guess is out of range
  }

  const userDifference = getAbsoluteDistance(targetNumber, userGuess);
  const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);

  if (userDifference === computerDifference) {
    return true; // Human wins in case of a tie
  } else if (userDifference < computerDifference) {
    return true; // Human is closer to the target and wins
  } else {
    return false; // Computer is closer to the target and wins
  }
}

// Function to update the score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Function to advance the round number
const advanceRound = () => {
  currentRoundNumber++;
}


