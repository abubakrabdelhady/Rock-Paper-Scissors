console.log(`Let's Play Rock Paper Scissors!`);

function getComputerChoice() {
    // get random choice from “rock”, “paper” or “scissors”.
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

let computerChoice = getComputerChoice();

let humanChoice = prompt(`Enter your choice (Rock or Paper or Scissors)`);

console.log(computerChoice, humanChoice);