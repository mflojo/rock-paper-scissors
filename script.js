let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3 + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input =  prompt("Enter rock, paper or scissors below: ");
    input = input.toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else {
        alert("Invalid input. Only Enter rock, paper or scissors");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Paper beats Rock, you lose!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats Scissors, you win!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats Rock, you win!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Scissors beats Paper, you lose!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Rock beats Scissors, you lose!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats Paper, you win!");
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});