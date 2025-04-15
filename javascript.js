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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
    for (i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`You got ${humanScore} points and the computer got ${computerScore} points!`);
    if (humanScore == computerScore) {
        console.log("Tie game!");
    } else if (humanScore < computerScore) {
        console.log("Too bad, you lost the game!");
    } else {
        console.log("You won the game!")
    }
}
playGame();
