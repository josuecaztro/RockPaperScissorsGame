//For some reason, I had to include this 👇🏽 or else the button wouldn't work. I found this out on Stack Overflow, lol.
window.onload=function(){

//this function is just my whole page of code pretty much. Im throwing this all into that one button click. 
function startGame(){

//this function is executed right before the game starts, so we can store the computer's generated choice into a variable.
function getComputerChoice(){
    let gameChoices = ["rock", "paper", "scissors"];
    let randomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return randomChoice;
}


//this is just us declaring the game function, it contains the score for you and the computer too. but we are not calling it just yet. 
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
        let scoreBoard = ("Your Score: " + userScore + " Computer's Score: " + computerScore);


        if (playerSelection === "rock" && computerSelection === "rock"){
            userScore++;
            computerScore++;
            alert("It's a Tie!" + scoreBoard);


        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            userScore++;
            alert("You Win! Rock beats scissors." + scoreBoard);


        } else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            alert("You Lose! Paper beats rock." + scoreBoard);

        } else if (playerSelection === "paper" && computerSelection === "rock"){
            userScore++;
            alert("You Win! Paper beats rock." + scoreBoard);


        } else if (playerSelection === "paper" && computerSelection === "paper"){
            userScore++;
            computerScore++;
            alert("It's a Tie!" + scoreBoard);


        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            alert("You Lose! Scissors beats paper." + scoreBoard);

        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            alert("You Lose! Rock beats scissors." + scoreBoard);

        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            userScore++;
            alert("You Win! Scissors beats paper." + scoreBoard);


        } else if (playerSelection === "scissors" && computerSelection === "scissors"){
            userScore++;
            computerScore++;
            alert("It's a Tie!" + scoreBoard);


        }
    }

    alert("The game is OVER.");
        if (userScore > computerScore){
        alert("Your Score: " + userScore + " Computer Score: " + computerScore + "Congratulations, you won!");
        } else if (userScore === computerScore){
        alert("Your Score: " + userScore + " Computer Score: " + computerScore + "   Wow, it's a tie!");
        } else if (userScore < computerScore) {
        alert("Your Score: " + userScore + " Computer Score: " + computerScore + "   Sorry, you lost to the PC.");
        }
}

//this calls the true actual game to execute (which is the function 👆🏼 we coded above). 
game();

};


//this gives the button in your HTML document functionality to work on command. 
document.getElementById("the-game-button").addEventListener("click", startGame);

}



