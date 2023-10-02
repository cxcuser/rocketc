

function getComputerChoice() {

    //create an array for choices of play
    let playSelect = ["ROCK", "PAPER", "SCISSORS"];
    

    //generate a randon number between 1 and 3, inclusive.
    const num = Math.floor(Math.random() * 100)%3;

    
    let computerPlay = playSelect[num];
    

    return computerPlay;

}

function playRound(userPlay, computerPlay) {
   return [userPlay, computerPlay]
}

const computerPlay = getComputerChoice();
//prompt user
const userPlay = prompt().toUpperCase();
let gameResult = "DRAW!";

if (userPlay === "ROCK") {
    if (computerPlay === "SCISSORS")
        gameResult = "User WINS!";
    else if (computerPlay === "PAPER") 
        gameResult = "Computer WINS!";
}
if (userPlay === "PAPER") {
    if (computerPlay === "SCISSORS")
        gameResult = "Computer WINS!";
    else if (computerPlay === "ROCK") 
        gameResult = "User WINS!";
}
if (userPlay === "SCISSORS") {
    if (computerPlay === "ROCK")
        gameResult = "Computer WINS!";
    else if (computerPlay === "PAPER") 
        gameResult = "User WINS!";
}

console.log([...playRound(userPlay, computerPlay), gameResult]);