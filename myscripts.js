const choice = ["Rock", "Paper", "Scissor"];
let playerScore = 0
let computerScore = 0

function computerPlay() {
    const random = choice[~~(Math.random() * choice.length)];
    return random;
}
function playRound (playerSelection, computerSelection) {
    playerSelection = 'rock';
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("It's a tie game!");
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) 
    {
        console.log("Oh No! You've Lost!");
        computerScore++
    }
    else {
        console.log("Great Job! You've Won!")
        playerScore++
    }
}