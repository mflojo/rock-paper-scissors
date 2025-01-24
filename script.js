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
console.log(getComputerChoice());

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
console.log(getHumanChoice());      //checking input, comment out later

//global variables