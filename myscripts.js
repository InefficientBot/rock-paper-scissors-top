const choice = ["Rock", "Paper", "Scissor"];

function computerPlay() {
    const random = choice[~~(Math.random() * choice.length)];
    return random;
}