
let cscore = 0;
let pscore = 0;
let i = 1;

let table = document.querySelector('table');
let buttons = document.querySelectorAll('button');

function makerow(){
    let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        td1.textContent = "col1";
        td2.textContent = "col1";
        td3.textContent = "col1";

        table.appendChild(row);

}

for (let button of buttons) {
    button.addEventListener('click', (/*don't put i in here! */) => {
        let computerPlay;
        let userPlay;
                
        if ( i < 6) {
            if (button.id === "idrock") {   /* NOT 'this.id' */
                userPlay = "ROCK";
            }
            else if (button.id === "idpaper") {
                userPlay = "PAPER";
            }
            else userPlay = "SCISSORS";

            computerPlay = getComputerChoice();
        
            /*game(userPlay, computerPlay);*/
                    
                console.log("GAME " + (i));
                console.log(playRound(userPlay, computerPlay));
                console.log(`SCORE: User - ${pscore},  Computer - ${cscore}`);
                i++;
        }
        
        let result;

        if (i === 6) {
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
    })
    
}

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
 
    return ("User plays: "+userPlay + ": Computer plays: " +computerPlay +" " + " --> " + gameResult);
}



//prompt user
//const userPlay = prompt().toUpperCase();

function game(userPlay, computerPlay) {
    
    console.log(playRound(userPlay, computerPlay));
}

   


/*game();*/
