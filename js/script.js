console.log(`Let's Play Rock Paper Scissors!`);

let choices = ['rock', 'paper', 'scissors'];
    
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

let curRound = 0;
let noOfRounds;

const roundsChoices = document.querySelectorAll('.rounds > ul > li');
const roundsTitle = document.querySelector('.rounds > h2');
const message = document.querySelector('.message');
const scoreBox = document.querySelector('.score');
roundsChoices.forEach(function(item) {
    if(noOfRounds !== undefined) {
        return;
    }
    item.addEventListener('click', function(e) {
        noOfRounds = parseInt(e.target.textContent);
        const siblings = [...item.parentNode.children];
        roundsTitle.textContent = "Number of Rounds:";
        siblings.forEach((sibling) => {if(sibling !== item) sibling.style.display = 'none'});
        curRound = 1;
        let roundMsg = getRoundMsg();
        setMsg(roundMsg);
    })
})
const setMsg = (msg) => message.textContent = msg;
const setScore = (score) => scoreBox.textContent = score;

const choicesSelections = document.querySelectorAll('.choice img');
choicesSelections.forEach((choice) => {
    choice.addEventListener('click', function(e) {
        if(humanChoice !== undefined || noOfRounds === undefined) {
            return;
        }
        humanChoice = e.target.dataset.choice;
        computerChoice = getComputerChoice();
        calcRound();
    })
})

const getRoundMsg = function() {
    return `ROUND ${curRound} | Select your choice (Rock-Paper-Scissors?)`;
}

const getCurScoreMsg = function() {
    return `Current Score: You: ${humanScore} | Computer: ${computerScore}.`;
}

const calcRound = function() {
    let scoreMsg;
    if(humanChoice === computerChoice) {
        scoreMsg = `It is TIE! Please repeat the round!`;
    }
    else if(doesHumanWin()) {
        humanScore++;
        scoreMsg = `You Won Round ${curRound}! ${humanChoice} beats ${computerChoice}`;
        curRound++;
    }

    else {
        computerScore++;
        scoreMsg = `You Lose Round ${curRound}! ${computerChoice} beats ${humanChoice}`;
        curRound++;
    }
    scoreMsg += "\n "+getCurScoreMsg();

    setScore(scoreMsg);

    let roundMsg = getRoundMsg();
    setMsg(roundMsg);

    humanChoice = computerChoice = undefined;
}

const doesHumanWin = function() {
    // Rock beats scissors, scissors beat paper, and paper beats rock.
    return (('rock'===humanChoice && 'scissors'===computerChoice) ||
            ('scissors'===humanChoice && 'paper'===computerChoice) ||
            ('paper'===humanChoice && 'rock'===computerChoice));
}

function getComputerChoice() {
    // get random choice from “rock”, “paper” or “scissors”.
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}