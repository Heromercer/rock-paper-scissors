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
