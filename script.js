console.log(`Let's Play Rock Paper Scissors!`);

let choices = ['rock', 'paper', 'scissors'];
    
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // get random choice from “rock”, “paper” or “scissors”.
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice() {
    let finalChoice;
    while(!choices.includes(finalChoice)) {
        let choice = prompt(`Enter your choice (Rock or Paper or Scissors)`);
        finalChoice = choice.toLowerCase();
    }
    return finalChoice;
}

function doesFirstWin(firstChoice, SecondChoice) {
    return (('rock'===firstChoice && 'scissors'===SecondChoice) ||
            ('scissors'===firstChoice && 'paper'===SecondChoice) ||
            ('paper'===firstChoice && 'rock'===SecondChoice));
}

function playRound(humanChoice, computerChoice) {
    // Rock beats scissors, scissors beat paper, and paper beats rock.
    if(humanChoice === computerChoice) {
        console.log(`No winner! Tie!`);
    }

    if(doesFirstWin(humanChoice, computerChoice)) {
        humanScore++;
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    }

    if(doesFirstWin(computerChoice, humanChoice)) {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(humanScore, computerScore);
}

playRound(getHumanChoice(), getComputerChoice());