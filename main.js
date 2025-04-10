// create a function that takes the player input
function getHumanChoice() {
    let Choice = prompt("Choose Rock, Paper or Scissors!");
    Choice = Choice.toLowerCase();
    if (Choice === "rock" || Choice === "paper" || Choice === "scissors") {
        return Choice;
    }
    else  {
        alert ("Please enter a valid choice!")
        return null
    }
}
// the computer will take the player choice and store it in a variable 

// create a function that randomly returns one of the (rock, paper or scissors) strings
function getComputerChoice() {
    let randomNum= Math.floor (Math.random() * 3)
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1 ) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


// the computer will return a human score and computer score after every round
let humanScore = 0
let computerScore = 0



// compare the human choice to the computer choice
function playRound(humanChoice , computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice ===  computerChoice) {
        alert ("It's a tie!")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors" ) ||
        ( humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        )
// after each round the computer returns either: you win! or you lose! 
// console returns the reason why you have won or lost like: Paper beats Rock
{alert ("You win this round! " + humanChoice + " beats " + computerChoice);
    humanScore++;}
    
    else {
    alert("Computer wins this round! "+ computerChoice + " beats " + humanChoice);
    computerScore++;
}
}


// the game will consist of 5 rounds after it ends the console will declare the winner
function playGame(roundNumber = 1) {
    if (roundNumber > 5){
        console.log("Game over!");
        console.log("Final scores = Human:" , humanScore , "Computer:", computerScore);
    if (humanScore>computerScore) {
        alert ("You win this game!");
    }else if (computerScore>humanScore) {
        alert ("Computer win this game!");
        
    } else { alert ("It's a tie overall!");
    }
    return;
}
const humanChoice = getHumanChoice();
if (!humanChoice) {
    playGame(roundNumber);
    return;
}
const computerChoice = getComputerChoice();
console.log("Human:",humanChoice);
console.log("Computer:",computerChoice);

playRound (humanChoice, computerChoice);
console.log("Human Score=",humanScore,"Computer Score=",computerScore);

playGame(roundNumber + 1)

}
playGame();
