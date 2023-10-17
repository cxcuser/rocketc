
let cscore = 0;
let pscore = 0;
let i = 1;
let started = false;
let gameResult = "Choose a Button Below";



let table = document.querySelector('table');
let startButton = document.querySelector("#startbtn");
let showSelect = document.querySelector(".showselect");
let toplines;

let playButtons = document.querySelectorAll(".playbutton");
let divstart = document.querySelector(".divstart");
let btncontainer = document.querySelector(".btncontainer");

startButton.addEventListener('click', () => {
    
    divstart.classList.toggle("notshow");
    showSelect.classList.toggle("notshow");
    btncontainer.classList.toggle("notshow");
    
    toplines = showSelect.querySelectorAll('p');
    
   toplines[1].textContent = gameResult; 
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
       /* if (started === false) {
            return;
        } */
        
        
        if (button.id === "idrock") {   /* NOT 'this.id' */
            userPlay = "ROCK";
        }
        else if (button.id === "idpaper") {
            userPlay = "PAPER";
        }
        else userPlay = "SCISSORS";

        computerPlay = getComputerChoice();
    
        /*game(userPlay, computerPlay);*/

        makerow(userPlay, computerPlay, result);
                
        console.log("GAME " + (i));
        console.log(playRound(userPlay, computerPlay)[0]);
        
        toplines[0].textContent = `ROUND  ${i}`;
        toplines[1].textContent = gameResult;
       
        console.log(`SCORE: User - ${pscore},  Computer - ${cscore}`);
        i++;
        
        
        if (pscore === 5) {
            showSelect.childNodes[1].textContent = "MATCH COMPLETE - " + "USER WINS! " + pscore + " games to " + cscore +".";
            result = "USER WINS! " + pscore + " games to " + cscore +"."; 
            toplines[1].textContent = '';
            return alert('game over!');
        }
        else if (cscore === 5) {
            showSelect.childNodes[1].textContent = "MATCH COMPLETE - " + "COMPUTER WINS! " + cscore + " games to " + pscore +".";
            result = "COMPUTER WINS! " + cscore + " games to " + pscore +".";
            toplines[1].textContent = '';
            return;
        }


            console.log("   ");
            console.log("MATCH COMPLETE!");
            console.log(result);
    });

        
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
        else {gameResult = "DRAWN GAME";}
    }
 
    return (["User plays: "+userPlay + ": Computer plays: " +computerPlay +" " + " --> " + gameResult, gameResult]);
}

function makerow(userPlay, computerPlay, result){
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
        td4.textContent = result;

        if (i==1) {
            table.appendChild(row);
        }
        else {
            firstRow = table.rows[1];
            firstRow.parentNode.insertBefore(row,firstRow);
        }

}

//prompt user
//const userPlay = prompt().toUpperCase();

function game(userPlay, computerPlay) {
    
    console.log(playRound(userPlay, computerPlay));
}

   


/*game();*/
