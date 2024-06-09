console.log(`Let's Play Rock Paper Scissors!`);

let choices = ['rock', 'paper', 'scissors'];
    
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // get random choice from “rock”, “paper” or “scissors”.
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice(round) {
    let finalChoice;
    // if human choice is not right repeat the question
    while(!choices.includes(finalChoice)) {
        if(finalChoice !== undefined) {
            alert(`Wrong choice: ${finalChoice}, Please enter right choice`);
        }
        let choice = prompt(`ROUND ${round} | Enter your choice (Rock or Paper or Scissors)`);
        finalChoice = choice.toLowerCase();
    }
    return finalChoice;
}

function doesFirstWin(firstChoice, SecondChoice) {
    // Rock beats scissors, scissors beat paper, and paper beats rock.
    return (('rock'===firstChoice && 'scissors'===SecondChoice) ||
            ('scissors'===firstChoice && 'paper'===SecondChoice) ||
            ('paper'===firstChoice && 'rock'===SecondChoice));
}

function playRound(round) {
    let humanChoice;
    let computerChoice;
    let resultMsg;

    // If tie repeat the round
    while(humanChoice === computerChoice) {
        if(humanChoice !== undefined) {
            alert(`It is TIE! Please repeat the round!`);
        }
        humanChoice = getHumanChoice(round);
        computerChoice = getComputerChoice();
    }

    if(doesFirstWin(humanChoice, computerChoice)) {
        humanScore++;
        resultMsg = `You Won! ${humanChoice} beats ${computerChoice}`;
    }

    if(doesFirstWin(computerChoice, humanChoice)) {
        computerScore++;
        resultMsg = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    alert(`
        ROUND ${round} | ${resultMsg}.
        Current Score: You: ${humanScore} | Computer: ${computerScore}.
    `)
}

function playGame(rounds) {
    let winnerScore = Math.floor(rounds/2) + 1;
    let round = 1;
    while(round<=rounds && winnerScore>humanScore && winnerScore>computerScore) {
        playRound(round);
        round++;
    }
    showFinalResult();
}

function showFinalResult() {
    let finalResultMsg;
    if(humanScore > computerScore) {
        finalResultMsg = `Congratulations! You Won!`;
    } else {
        finalResultMsg = `Sorry! You Lose!`;
    }
    alert(`
        Final Result | ${finalResultMsg}.
        Final Score: You: ${humanScore} | Computer: ${computerScore}
    `)
}

playGame(5);