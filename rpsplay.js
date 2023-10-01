

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

console.log(playRound(userPlay, computerPlay) );