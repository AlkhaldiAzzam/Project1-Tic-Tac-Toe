
let board = [ ['','',''],
              ['','',''],  
              ['','',''] ];

//false is X and true is O
let turn = false;
//state of the game
let ended = false;
const block = document.querySelectorAll('.column');

const winner = document.createElement('h2');


const checkWinner = function(){
function xHasWon(){  winner.innerText = "Player X has WON!";
document.body.appendChild(winner);
ended = true;
console.log('x');
}


function oHasWon(){  winner.innerText = "Player O has WON!";
document.body.appendChild(winner);
ended = true;

console.log('o')}

for (let i = 0; i<3; i++){
if (board[i][0] == board[i][1] == board[i][2] ){
    if(turn ==false)
    xHasWon();
    else
    oHasWon();}      

    if(board[0][i] == board[1][i] == board[2][i] ){
        if (turn == flase)
        xHasWon();
        else 
        oHasWon();

    }

    
    if(board[0][0] == board[1][1] == board[2][2]) {
        if (turn == false)
        xHasWon();
        else 
        oHasWon();
    }

if (board[0][2] == board[1][1] == board[2][0]){
    if (turn == false)
    xHasWon();
    else 
    oHasWon();

}

console.log(ended);

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

turn = !turn;
this.removeEventListener('click' , tic);

checkWinner();

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


}

makeBoard();