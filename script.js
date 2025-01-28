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

function playRound(humanChoice, computerChoice) {
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `Its a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    const results = document.querySelector("#results");

    results.innerHTML = `
        <p>${resultMessage}</p>
        <p>Human Score: ${humanScore}.  Computer Score: ${computerScore}.</p>
    `;

    if (humanScore === 5 || computerScore === 5) {
        const winner = document.createElement("p");
        if (humanScore === 5) {
            winner.textContent = "Congrats, you win the game!";
        } else {
            winner.textContent = "The computer wins, try again!";
        }

        results.appendChild(winner);

        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
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