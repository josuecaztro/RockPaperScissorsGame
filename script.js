//beginning variables
let startButton = document.querySelector("#the-game-button");
let appearGame = document.querySelector("#launch-start");

//This makes the game launch at the Start button.
//Once pressed, the Start Button disappears.
startButton.addEventListener("click", () => {
    if (appearGame.style.display === "none"){
        appearGame.style.display = "block";
        startButton.style.display = "none";
        document.querySelector("#my-name").style.display = "none";
        game();
    } else {
        appearGame.style.display = "none";
    }
});

//When declared, this function returns a computer randomized choice. 
function getComputerChoice(){
    let gameChoices = ["rock", "paper", "scissors"];
    let randomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return randomChoice;
}

//just DOM elements being built
let displayMessage = document.querySelector("#main-words");
let scoreBoard = document.querySelector("#score-board");
let roundsBoard = document.querySelector("#round-counter");
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
let againButton = document.querySelector("#play-again");
let endText = document.querySelector("#for-the-end");

let playerSelection = null;






//the WHOLE game in one function
function game (){

    let rounds = 0;
    let userScore = 0;
    let computerScore = 0;
    scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;


    //the primary function that plays a round of the game
    function playRound (){
    let computerSelection = getComputerChoice();
    rounds++;

    roundsBoard.textContent = "Round #" + rounds;


     //all the possible combinations with the correct display message
        if (playerSelection === computerSelection){
            displayMessage.textContent = "It's a Tie!";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            displayMessage.textContent = "You Lose! Paper beats rock.";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            userScore++;
            displayMessage.textContent = "You win! Rock beats scissors.";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        } else if (playerSelection === "paper" && computerSelection === "rock"){
            userScore++;
            displayMessage.textContent = "You win! Paper beats rock.";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            displayMessage.textContent = "You lose! Scissors beats paper.";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            displayMessage.textContent = "You lose! Rock beats scissors.";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            userScore++;
            displayMessage.textContent = "You win! Scissors beats paper!";
            scoreBoard.textContent = "Your Score: " + userScore + " Computer's Score: " + computerScore;

        }

        if (rounds === 5){
        againButton.style.display = "block";
    
        if (userScore > computerScore){
            rockButton.style.display = "none";
            paperButton.style.display = "none";
            scissorsButton.style.display = "none";
            roundsBoard.textContent = "The computer chose " + computerSelection + "!";
            displayMessage.textContent = "🎉 You won the game!";
            endText.textContent = "Round #5";
        } else if (userScore === computerScore){
            rockButton.style.display = "none";
            paperButton.style.display = "none";
            scissorsButton.style.display = "none";
            roundsBoard.textContent = "The computer chose " + computerSelection + "!";
            displayMessage.textContent = "Wow, the game's tied.";
            endText.textContent = "Round #5";

        } else if (userScore < computerScore){
            rockButton.style.display = "none";
            paperButton.style.display = "none";
            scissorsButton.style.display = "none";
            roundsBoard.textContent = "The computer chose " + computerSelection + "!";
            displayMessage.textContent = "Sorry, you lost the game.";
            endText.textContent = "Round #5";

        }}

       

        




        }

        rockButton.addEventListener("click", () => {
            playerSelection = "rock";
            playRound();
        });
        paperButton.addEventListener("click", () => {
            playerSelection = "paper";
            playRound();
        });
        scissorsButton.addEventListener("click", () => {
            playerSelection = "scissors";
            playRound();
        });


        againButton.addEventListener("click", () => {
        location.reload();
        })
}

game();



