/*  user vs cpu
    use Math.random() to generate 1-3
*/

//get computer choice
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

//check cpu choice and randomness
// console.log("computer choice: " + getComputerChoice());
// for (let i=0; i<20; i++) {
//     console.log(getComputerChoice());
// }

//get user input for choice
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

//check user input
// console.log("human choice: " + getHumanChoice());

//global variables
let humanScore = 0;
let computerScore = 0;

//play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice == "paper") {
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
        console.log("Rock beats Paper, you lose!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats paper, you win!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);