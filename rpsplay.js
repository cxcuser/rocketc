

/*ADD A RESET BUTTON TO TAKE THE GAME BACK TO THE CONDITION BEFORE PRESSING
THE START BUTTON. */
let cscore = 0;
let pscore = 0;
let i = 1;
let started = false;    /* THIS IS NOT ACTUALLY USED TO CONTROL PROGRAM FLOW,*/
let gameResult = '';    /* BECAUSE IT TURNED OUT TO BE UNNECESSARY.*/


let table = document.querySelector('table');
let startButton = document.querySelector("#startbtn");
let restart = document.querySelector('#restart');
let showSelect = document.querySelector(".showselect");
let reset = document.querySelector('.reset');
let toplines;

let playButtons = document.querySelectorAll(".playbutton");
let divstart = document.querySelector(".divstart");
let btncontainer = document.querySelector(".btncontainer");

startButton.addEventListener('click', () => {
    
    divstart.classList.toggle("notshow");
    showSelect.classList.toggle("notshow");
    btncontainer.classList.toggle("notshow");
    reset.classList.toggle("notshow");
    
    toplines = showSelect.querySelectorAll('p');
    
   toplines[1].textContent = "Choose a Button Below";
    toplines[0].textContent = `ROUND  ${i}`;
    /*toplines[0].textContent = toplines[1].textContent;*/
   
    started = true;
})

for (let button of playButtons) {
    button.addEventListener('click', (/*don't put i in here! */) => {
        let computerPlay;
        let userPlay;
        let result;
                
        if ( (cscore === 5) || (pscore === 5) ) {
            toplines[1].textContent = '';
            
            return;
        }
              
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
        console.log(playRound(userPlay, computerPlay)[0]);

        makerow(userPlay, computerPlay, gameResult);        
        toplines[0].textContent = `ROUND  ${i}`;
        toplines[1].textContent = gameResult;
       
        console.log(`SCORE: User - ${pscore},  Computer - ${cscore}`);
        i++;
                
        if (pscore === 5) {
            showSelect.childNodes[1].textContent = "MATCH COMPLETE - " + "USER WINS " + pscore + " games to " + cscore +"."; 
            result = "USER WINS " + pscore + " games to " + cscore +"."; 
            toplines[1].textContent = '';
            restart.classList.toggle('notshow');
            
            return;
        }
        else if (cscore === 5) {
            showSelect.childNodes[1].textContent = "MATCH COMPLETE - " + "COMPUTER WINS " + cscore + " games to " + pscore +"."; 
            result = "COMPUTER WINS " + cscore + " games to " + pscore +".";
            toplines[1].textContent = '';
            restart.classList.toggle('notshow');
            
            return;
        }
        /* Above, childNodes[1] is apparently the same as toplines[0]; unexpected */

            console.log("   ");
            console.log("MATCH COMPLETE!");
            console.log(result);
    });
        
}  

function getComputerChoice() {

    //create an array for choices of play
    let playSelect = ["ROCK", "PAPER", "SCISSORS"];
    
    //generate a randon number between 1 and 3, inclusive.
    const num = Math.floor(Math.random() * 3);
    
    let computerPlay = playSelect[num];
    return computerPlay;
}

function playRound(userPlay, computerPlay) {
    
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
            gameResult = "Computer WINS";
            cscore++;
        }
        else if (inp === seq[2]) {
            gameResult = "User WINS";
            pscore++;
        }
        else {gameResult = "DRAWN GAME";}
    }
 
    return (["User plays: "+userPlay + ": Computer plays: " +computerPlay +" " + " --> " + gameResult, gameResult]);
}

function makerow(userPlay, computerPlay, gameResult){
       
        let firstRow;
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
       
        td1.textContent = "Round " + i;
        td2.textContent = userPlay;
        td3.textContent = computerPlay;
        td4.textContent = gameResult;

        if (i==1) {
            table.appendChild(row);
        }
        else {
            firstRow = table.rows[1];
            firstRow.parentNode.insertBefore(row,firstRow);
        }

}


restart.addEventListener('click', () => {
    
   /* divstart.classList.toggle("notshow");
    showSelect.classList.toggle("notshow");
    btncontainer.classList.toggle("notshow"); */
    restart.classList.toggle("notshow"); 
    
    let j =i-1;
    while ( j > 0 ) {
        table.removeChild(table.children[1]);
        j--;
    }

    i = 1;      /* re-set variables to keep track of game progress */
    cscore = 0;
    pscore = 0;
    
    toplines = showSelect.querySelectorAll('p');
    
    toplines[1].textContent = "Choose a Button Below";  /* re-set instructions */
    toplines[0].textContent = `ROUND  ${i}`;
})

reset.addEventListener('click', () => {     /* RESET is not needed for game functionality */
                                            /* but it feels more complete to include it */
    let j =i-1;
    while ( j > 0 ) {
        table.removeChild(table.children[1]);
        j--;
    }
    i = 1;
    cscore = 0;
    pscore = 0;
    
    if (!restart.classList.contains("notshow")) {
        restart.classList.add("notshow");
    } /* toggle is not appropriate, as the 'Play Again' (restart) button
        may or may not be visible when RESET is pressed */
    
    divstart.classList.toggle("notshow");   /* show start button */
    showSelect.classList.toggle("notshow"); /* hide instruction lines/last result lines */
    btncontainer.classList.toggle("notshow");   /* hide game-play buttons */
    
    reset.classList.toggle("notshow");  /* hide reset button */

    toplines[1].textContent = "";
    toplines[0].textContent = ``;
   
})


function game(userPlay, computerPlay) {
    
    console.log(playRound(userPlay, computerPlay));
}

   


/*game();*/
