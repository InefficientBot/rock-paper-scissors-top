const choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0
let computerScore = 0

function computerPlay() {
    const random = choice[~~(Math.random() * choice.length)];
    return random;
}
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('Please enter rock, paper, or scissors.').toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) 
    {
        console.log("It's a tie game!");
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) 
    {
        console.log("Oh No! You've Lost! " + computerSelection + ' beats ' + playerSelection + '!');
        computerScore++
    }
    else 
    {
        console.log("Great Job! You've Won! " + playerSelection + ' beats ' + computerSelection + '!');
        playerScore++
    }
}

function game() {
    for (let i = 0; i < 5; i++) 
    {
        playRound();
    }
}