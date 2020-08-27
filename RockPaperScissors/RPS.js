let computerSelection;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You Tie* ");
        } else if (computerSelection == 'paper') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You LOSE* ");
            computerWins++;
        } else {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You WIN* ");
            playerWins++;
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You WIN* ");
            playerWins++;
        } else if (computerSelection == 'paper') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You Tie* ");
        } else {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You LOSE* ");
            computerWins++;
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You LOSE* ");
            computerWins++;
        } else if (computerSelection == 'paper') {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You WIN* ");
            playerWins++;
        } else {
            alert("You: " + playerSelection + " Computer: " + computerSelection + " *You Tie* ");
        }
    }

}

document.getElementById('rock').addEventListener("click", function () {
    playRound('rock', computerPlay());;
    document.getElementById('results').innerHTML = ("Current Player wins: " + playerWins + " Current Computer wins: " + computerWins);
    if (playerWins==5){
        alert("you WIN!!");
        playerwins=0;
    }
    if (computerWins==5){
        alert("you lose");
        computerWins=0;
    }
});

document.getElementById('paper').addEventListener("click", function () {
    playRound('paper', computerPlay());;
    document.getElementById('results').innerHTML = ("Current Player wins: " + playerWins + " Current Computer wins: " + computerWins);
    if (playerWins==5){
        alert("you WIN!!");
        playerwins=0;
    }
    if (computerWins==5){
        alert("you lose");
        computerWins=0;
    }
});

document.getElementById('scissors').addEventListener("click", function () {
    playRound('scissors', computerPlay());;
    document.getElementById('results').innerHTML = ("Current Player wins: " + playerWins + " Current Computer wins: " + computerWins);
    if (playerWins==5){
        alert("you WIN!!");
        playerwins=0;
    }
    if (computerWins==5){
        alert("you lose");
        computerWins=0;
    }
});