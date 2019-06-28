
let board = [ ['','',''],
              ['','',''],  
              ['','',''] ];

            
//false is X and true is O
let turn = false;
//state of the game
let ended = false;
const block = document.querySelectorAll('.column');

let totalScore = 0;

let xScore = 0 , oScore = 0;

const checkWinner = function(){


function xHasWon(){  alert('Player X has WON!');
ended = true;
xScore++;
document.querySelector('#X').innerText = "Player X's Score: " + xScore;
}


function oHasWon(){ alert("Player O has WON!");
ended = true;

oScore++;
document.querySelector('#O').innerText = "Player O's Score: " + oScore;

}

for (let i = 0; i<3; i++){

(board[i][0] === board[i][1] && board[i][0] == board[i][2] && board[i][0] != '' )? (turn ==false ? xHasWon() : oHasWon()) : '';
    
(board[0][i] === board[1][i] && board[0][i] == board[2][i] && board[0][i] != '' ) ? (turn ==false ? xHasWon() : oHasWon()) : '';

}
(board[0][0] === board[1][1] && board[0][0] == board[2][2] && board[0][0] != '' )? (turn == false ? xHasWon() : oHasWon()) : '';

(board[0][2] === board[1][1] && board[0][2] == board[2][0] && board[0][2] != '' )? (turn == false ? xHasWon() : oHasWon() ): '';
console.log(ended);

console.log(xScore);

console.log(oScore);

}


const tic = function(){
let id = this.id;

    const idArr = id.split(',');
    console.log(idArr);

    const ind1 = parseInt(idArr[0] , 10);

    const ind2 = parseInt(idArr[1] , 10);


    if (turn == false){ 
        this.innerHTML = '<h1>X</h1>';

        board[ind1][ind2] = 'X';

    }
    else{

        this.innerHTML = '<h1>O</h1>';

        board[ind1][ind2] = 'O';
    }
    checkWinner();
    totalScore++;
turn = !turn;
this.removeEventListener('click' , tic);

if (totalScore == 9){
alert('its a draw');
ended = true;

}


if (ended == true)
    block.forEach(element => {
        element.removeEventListener('click' , tic);
    });
}












const makeBoard = function(){

block.forEach(element => {
    element.innerHTML = '<h1>#</h1>'
});


block.forEach(element => {
    element.addEventListener('click' , tic);


});
board = [ ['','',''],
              ['','',''],  
              ['','',''] ];
ended = false;
turn = false;
totalScore = 0;
}

document.querySelector('#reset').addEventListener('click' , makeBoard);

makeBoard();