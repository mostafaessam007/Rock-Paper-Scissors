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
console.log(getComputerChoice());

// create a function that takes the player input
function getHumanChoice() {
    let Choice = prompt("Choose Rock, Paper or Scissors!");
    Choice = Choice.toLowerCase();
    if (Choice === "rock" || Choice === "paper" || Choice === "scissors") {
        alert ("Right choice!")
    }
    else  {
        alert ("Please enter a valid choice!")
    }
}
console.log(getHumanChoice());

// the computer will return a human score and computer score after every round
let humanScore = (0)
let computerScore = (0)
console.log("humanScore=",humanScore,"computerScore=",computerScore);


// compare the human choice to the computer choice






// prompt pop up and player enters: rock or paper or scissors
// the computer will take the player choice and store it in a variable 
// the computer will choose randomly between rock , paper or scissors

// after each round the computer returns either: you win! or you lose! 
// console returns the reason why you have won or lost like: Paper beats Rock
// the game will consist of 5 rounds after it ends the console will declare the winner