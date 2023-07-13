function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[
    randomNumber
  ]; /* Will return either rock, paper or scissors with index 0 to 2*/
}

function determineWinner(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  let playerWin = "You win!";
  let playerLose = "You Lose!";
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    return "The game is a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("saaad");
    return playerWin;
  } else {
    console.log("sad");
    return playerLose;
  }
}

const playerSelection = "paper";
const computerSelection = "scissors";
console.log(playerSelection, computerSelection);

console.log(determineWinner(playerSelection, computerSelection));
