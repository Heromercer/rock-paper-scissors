let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(2);
    const ranNum =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 1) {
        return "paper";
    } else if (ranNum == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Pick rock, paper, or scissors");
    if (userInput.toLowerCase() == "rock") {
        return "rock";
    } else if (userInput.toLowerCase() == "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log(`Computer also threw ${computerChoice}, tie game!`)
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return console.log("Rock beats Scissors, you win!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return console.log("Paper beats Rock, you win!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return console.log("Scissors beats Paper, you win!");
    } else {
        computerScore += 1;
        return console.log(`Computer threw ${computerChoice}, you lose!`)
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id == 'rock') {
            playRound('rock', getComputerChoice());
        } else if (e.target.id == 'paper') {
            playRound('paper', getComputerChoice());
        } else if (e.target.id == 'scissors') {
            playRound('scissors', getComputerChoice());
        }
    });
});
