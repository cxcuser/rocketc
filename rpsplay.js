

function getComputerChoice() {

    //create an array for choices of play
    const playSelect = ["ROCK", "PAPER", "SCISSORS"];
    

    //generate a randon number between 1 and 3, inclusive.
    const num = Math.floor(Math.random() * 100)%3;

    //prompt user
    userPlay = prompt();
    computerPlay = playSelect[num];

    return [computerPlay, num, userPlay ];

}

const output = getComputerChoice();

console.log(output);