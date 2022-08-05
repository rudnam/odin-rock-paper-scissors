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
            console.log("invalid number")
            return;
    }
}

function playRound(playerSelection, computerSelection) {
    a = playerSelection.toUpperCase();
    b = computerSelection.toUpperCase();
    switch(a) {
        case "ROCK":
            if (b === "SCISSORS") {
                return "You win! Rock beats Scissors!"
            }
            if (b === "PAPER") {
                return "You lose! Paper beats Rock!"
            }
            return "It's a tie! Rock against Rock!"
            break;
        case "PAPER":
            if (b === "ROCK") {
                return "You win! Paper beats Rock!"
            }
            if (b === "SCISSORS") {
                return "You lose! Scissors beats Paper!"
            }
            return "It's a tie! Paper against Paper!"
            break;
        case "SCISSORS":
            if (b === "PAPER") {
                return "You win! Scissors beats Paper!"
            }
            if (b === "ROCK") {
                return "You lose! Rock beats Scissors!"
            }
            return "It's a tie! Scissors against Scissors!"
            break;
        default:
            return "invalid input"
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5; i++) {
        userInput = prompt("Rock, Paper, or Scissors?");
        roundResult = playRound(userInput, getComputerChoice());
        roundResult.includes("win")? userScore += 1 : roundResult.includes("lose")? computerScore += 1 : null;
        console.log(roundResult);
    }
    if (userScore > computerScore) {
        gameResult = `You win! The scores are:
        User: ${userScore}
        Computer: ${computerScore}`;
    } else if (computerScore > userScore) {
        gameResult = `You lose! The scores are:
        User: ${userScore}
        Computer: ${computerScore}`;
    } else {
        gameResult = `It's a tie! The scores are:
        User: ${userScore}
        Computer: ${computerScore}`;
    }
    console.log(gameResult);
    return;
}