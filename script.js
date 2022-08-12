let playerScore = 0;
let computerScore = 0;
let gameOngoing = false;

const pscore = document.querySelector('#pscore');
const cscore = document.querySelector('#cscore');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const response = document.querySelector('#response');
const start = document.querySelector('#start');

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            console.log("invalid number");
            return;
    }
}

function playRound(e) {
    if (!gameOngoing) {
        return;
    }
    a = e.currentTarget.id.toUpperCase();
    b = getComputerChoice().toUpperCase();
    switch(a) {
        case "ROCK":
            if (b === "SCISSORS") {
                playerScore += 1;
                response.textContent = "You win! Rock beats Scissors!";
            } else if (b === "PAPER") {
                computerScore += 1;
                response.textContent = "You lose! Paper beats Rock!";
            } else {
                response.textContent = "It's a tie! Rock against Rock!";
            }
            break;
        case "PAPER":
            if (b === "ROCK") {
                playerScore += 1;
                response.textContent = "You win! Paper beats Rock!";
            } else if (b === "SCISSORS") {
                computerScore += 1;
                response.textContent = "You lose! Scissors beats Paper!";
            } else {
                response.textContent = "It's a tie! Paper against Paper!";
            }
            break;
        case "SCISSORS":
            if (b === "PAPER") {
                playerScore += 1;
                response.textContent = "You win! Scissors beats Paper!";
            } else if (b === "ROCK") {
                computerScore += 1;
                response.textContent = "You lose! Rock beats Scissors!";
            } else {
                response.textContent = "It's a tie! Scissors against Scissors!";
            }
            break;
        default:
            response.textContent = "invalid input";
    }
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
    if (playerScore == 5) {
        response.textContent = "Congratulations! You won!";
        gameOngoing = false;
        start.style.display = 'inline-block';
    } else if (computerScore == 5) {
        response.textContent = "Game over! You lose!";
        gameOngoing = false;
        start.style.display = 'inline-block';
    }
    return;
}

function startGame(e) {
    gameOngoing = true;
    e.currentTarget.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
    response.textContent = "Choose your weapon";
    return;
}

start.addEventListener('click', startGame);
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);