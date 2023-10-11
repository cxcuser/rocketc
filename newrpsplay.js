
let cscore = 0;
let pscore = 0;

function getComputerChoice() {

    //create an array for choices of play
    let playSelect = ["ROCK", "PAPER", "SCISSORS"];
    
    //generate a randon number between 1 and 3, inclusive.
    const num = Math.floor(Math.random() * 100)%3;
    
    let computerPlay = playSelect[num];
    
    return computerPlay;
}

function playRound(userPlay, computerPlay) {
    
    let gameResult = "DRAWN GAME!";

    let rSeq = ['PAPER', 'ROCK', 'SCISSORS'];
    let pSeq = ['SCISSORS', 'PAPER', 'ROCK'];
    let sSeq = ['ROCK', 'SCISSORS', 'PAPER'];

    if (userPlay === 'ROCK') {
        inptest(rSeq, computerPlay);
    }
    else if (userPlay === 'PAPER') {
        inptest(pSeq, computerPlay);
    }
    else  {
        inptest(sSeq, computerPlay);
    }

    function inptest(seq, inp) {
        if (inp === seq[0]) {
            gameResult = "Computer WINS!";
            pscore++;
        }
        else if (inp === seq[2]) {
            gameResult = "User WINS!";
            cscore++;
        }
        else {}
    }

/*
    if (userPlay === "ROCK") {
        if (computerPlay === "SCISSORS") {
            gameResult = "User WINS!";
            pscore++;
        }
        else if (computerPlay === "PAPER") {
            gameResult = "Computer WINS!";
            cscore++;
        }
    }

    if (userPlay === "PAPER") {
        if (computerPlay === "SCISSORS") {
            gameResult = "Computer WINS!";
            cscore++;
        }
        else if (computerPlay === "ROCK") {
            gameResult = "User WINS!";
            pscore++;
        }
    }
    if (userPlay === "SCISSORS") {
        if (computerPlay === "ROCK") {
            gameResult = "Computer WINS!";
            cscore++;
        }
        else if (computerPlay === "PAPER") {
            gameResult = "User WINS!";
            pscore++;
        }
    }
*/
    
    return ("User plays: "+userPlay + ": Computer plays: " +computerPlay +" " + " --> " + gameResult);
}



//prompt user
//const userPlay = prompt().toUpperCase();

function game() {
    let computerPlay;
    let userPlay; 
    let i = 0;

    while (i <5) {
    
    computerPlay = getComputerChoice();
    userPlay = prompt().toUpperCase();

    console.log("GAME " + (i+1));
    console.log(playRound(userPlay, computerPlay));
    console.log(`SCORE: User - ${pscore},  Computer - ${cscore}`);
    i++;
    }

    let result;
    if (pscore >  cscore)
        result = "USER WINS! " + pscore + " games to " + cscore +"."; 
    else if (cscore > pscore) 
        result = "COMPUTER WINS! " + cscore + " games to " + pscore +".";

    else if (pscore ===1) 
        result = "MATCH IS DRAWN! " + pscore + " GAME EACH.";
    else
        result = "MATCH IS DRAWN! " + pscore + " GAMES EACH.";
 

    console.log("   ");
    console.log("MATCH COMPLETE!");
    console.log(result);
    
    }


game();

