window.onload=function(){


function startGame(){
//this is the solution for step 3
function getComputerChoice(){
    let gameChoices = ["rock", "paper", "scissors"];
    let randomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return randomChoice;
}



//this is the solution for step 4
function game (){
    let tries = 0;
    let userScore = 0;
    let computerScore = 0;

    while (tries < 5){
        let playerPreSelection = prompt("Welcome to a game of Rock, Paper, Scissors! To start, please type in either rock, paper, or scissors to play.");
        let playerSelection = (playerPreSelection).toLowerCase().trim();
        let computerSelection = getComputerChoice();
        playARound(playerSelection, computerSelection);
        tries++;
    }

    function playARound (playerSelection, computerSelection){
        if (playerSelection === "rock" && computerSelection === "rock"){
            alert("It's a Tie!");
            userScore++;
            computerScore++;
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            alert("You Win! Rock beats scissors.");
            userScore++;

        } else if (playerSelection === "rock" && computerSelection === "paper"){
            alert("You Lose! Paper beats rock.");
            computerScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            alert("You Win! Paper beats rock.");
            userScore++;

        } else if (playerSelection === "paper" && computerSelection === "paper"){
            alert("It's a Tie!");
            userScore++;
            computerScore++;

        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert("You Lose! Scissors beats paper.");
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert("You Lose! Rock beats scissors.");
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            alert("You Win! Scissors beats paper.");
            userScore++;

        } else if (playerSelection === "scissors" && computerSelection === "scissors"){
            alert("It's a Tie!");
            userScore++;
            computerScore++;

        }
    }

    alert("The game is OVER.");
    if (userScore > computerScore){
    alert("Your Score: " + userScore + " Computer Score: " + computerScore + "Congratulations, you won!");
    } else {
        alert("Your Score: " + userScore + " Computer Score: " + computerScore + "   Sorry, you lost to the PC.");
    }
}

game();

};



document.getElementById("the-game-button").addEventListener("click", startGame);

}



