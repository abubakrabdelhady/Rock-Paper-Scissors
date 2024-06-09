console.log(`Let's Play Rock Paper Scissors!`);

let choices = ['rock', 'paper', 'scissors'];
    
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

let curRound0;
let noOfRounds;
let winnerScore = 0;

const roundsChoices = document.querySelectorAll('.rounds > ul > li');
const roundsTitle = document.querySelector('.rounds > h2');
const message = document.querySelector('.message');
const scoreBox = document.querySelector('.score');
const roundScore = document.querySelector('.round-score');
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', function(e) {
    roundsTitle.textContent = "Please select number of rounds";
    roundsChoices.forEach((item) => item.style.display = 'inline');
    noOfRounds = undefined;
    setMsg('Please select number of rounds first!')
    setRoundScore('');
    setScore('');
    e.target.style.display = 'none';
})
roundsChoices.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if(noOfRounds !== undefined) {
            return;
        }
        noOfRounds = parseInt(e.target.textContent);
        winnerScore = Math.floor(noOfRounds/2) + 1;
        curRound = 1;

        const siblings = [...item.parentNode.children];
        roundsTitle.textContent = "Number of Rounds:";
        siblings.forEach((sibling) => {if(sibling !== item) sibling.style.display = 'none'});
        
        setMsg(getRoundMsg());
        setScore(getScoreMsg());
    })
})
const setMsg = (msg) => message.textContent = msg;
const setRoundScore = (score) => roundScore.textContent = score;
const setScore = (score) => scoreBox.textContent = score;

const choicesSelections = document.querySelectorAll('.choice img');
choicesSelections.forEach((choice) => {
    choice.addEventListener('click', function(e) {
        if(humanChoice !== undefined || curRound === undefined) {
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

const getScoreMsg = function() {
    return `Score: You: ${humanScore} | Computer: ${computerScore}.`;
}

const getFinalScoreMsg = function() {
    if(humanScore > computerScore) {
        return `Congratulations! You Won!`;
    } else {
        return `Sorry! You Lose!`;
    }
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

    setRoundScore(scoreMsg);
    setScore(getScoreMsg());
    
    humanChoice = computerChoice = undefined;
    
    if(curRound > noOfRounds || winnerScore <= humanScore || winnerScore <=computerScore) {
        setMsg(getFinalScoreMsg());
        curRound = undefined;
        humanScore = computerScore = 0;
        refresh.style.display = 'inline';
    } else {
        setMsg(getRoundMsg());
    }
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