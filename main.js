const btnR = document.getElementById("btnR");
const btnP = document.getElementById("btnP");
const btnS = document.getElementById("btnS");
const result = document.querySelector(".result");
const score = document.querySelector(".score");


btnR.addEventListener("click", ()=>{
const computerChoice=getComputerChoice();
playRound("rock",computerChoice)

})

btnP.addEventListener("click", ()=> {
const computerChoice=getComputerChoice();
playRound ("paper", computerChoice) 
})

btnS.addEventListener("click", ()=> {
const computerChoice=getComputerChoice();
playRound ("scissors", computerChoice) 
})


// create a function that takes the player input
// function getHumanChoice() {
//     let Choice = prompt("Choose Rock, Paper or Scissors!");
//     Choice = Choice.toLowerCase();
//     if (Choice === "rock" || Choice === "paper" || Choice === "scissors") {
//         return Choice;
//     }
//     else  {
//         alert ("Please enter a valid choice!")
//         return null
//     }
// }
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
        result.textContent= "It's a tie!"
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors" ) ||
        ( humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        )
// after each round the computer returns either: you win! or you lose! 
// console returns the reason why you have won or lost like: Paper beats Rock
{ result.textContent="You win this round! " + humanChoice + " beats " + computerChoice;
    humanScore++;}
    
    else {
    result.textContent= "Computer wins this round! "+ computerChoice + " beats " + humanChoice;
    computerScore++;
}
score.textContent=`Human Score=${humanScore} Computer Score=${computerScore}`;
roundNumber= humanScore + computerScore
if (roundNumber === 5){
            score.textContent="Game over!";
             score.textContent="Final scores = Human:" , humanScore , "Computer:", computerScore;
        if (humanScore>computerScore) {
           score.textContent="You have won the game!";
        }else if (computerScore>humanScore) {
             score.textContent="Computer wins the game!";
            
        } else { score.textContent="It's a tie overall!";}
        
        setTimeout(() => {
            humanScore = 0
            computerScore = 0
        }, 100);
    }
}


// the game will consist of 5 rounds after it ends the console will declare the winner
// function playGame(roundNumber = 1) {
//     if (roundNumber > 5){
//         score.textContent="Game over!";
//          score.textContent="Final scores = Human:" , humanScore , "Computer:", computerScore;
//     if (humanScore>computerScore) {
//        score.textContent="You win this game!";
//     }else if (computerScore>humanScore) {
//          score.textContent="Computer win this game!";
        
//     } else { score.textContent="It's a tie overall!";
//     }
//     return;
// }
// // const humanChoice = getHumanChoice();
// if (!humanChoice) {
//     playGame(roundNumber);
//     return;
// }
// const computerChoice = getComputerChoice();
// console.log("Human:",humanChoice);
// console.log("Computer:",computerChoice);

// playRound (humanChoice, computerChoice);
 
// playGame(roundNumber + 1)

// }
// playGame();

