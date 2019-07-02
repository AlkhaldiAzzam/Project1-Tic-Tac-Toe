let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

//false is X and true is O
let turn = false;
//state of the game
let ended = false;




let xIcon = window.localStorage.getItem('x'),
    oIcon = window.localStorage.getItem('o');


const hit = new Audio('sounds/LSwall01.mp3');



const block = document.querySelectorAll('.column');

let totalScore = 0;

window.localStorage.setItem('xScore', 0);

window.localStorage.setItem('oScore', 0);

let xScore = 0,
    oScore = 0;

let winner;
const checkWinner = function() {


    function xHasWon() {
        document.querySelector('#winner').innerText = 'Player X WON!';
        ended = true;
        xScore++;
        document.querySelector('#X').innerText = "Player X's Score: " + xScore;
        winner = 'x';
    }


    function oHasWon() {

        document.querySelector('#winner').innerText = 'Player O WON!';

        ended = true;

        oScore++;
        document.querySelector('#O').innerText = "Player O's Score: " + oScore;
        winner = 'o';
    }

    for (let i = 0; i < 3; i++) {

        (board[i][0] === board[i][1] && board[i][0] == board[i][2] && board[i][0] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

        (board[0][i] === board[1][i] && board[0][i] == board[2][i] && board[0][i] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

    }
    (board[0][0] === board[1][1] && board[0][0] == board[2][2] && board[0][0] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

    (board[0][2] === board[1][1] && board[0][2] == board[2][0] && board[0][2] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';


}


const tic = function() {
    let id = this.id;

    const idArr = id.split(',');

    const ind1 = parseInt(idArr[0], 10);

    const ind2 = parseInt(idArr[1], 10);


    if (turn == false) {
        this.innerHTML = `<img src= "${xIcon}" class="game">`;

        board[ind1][ind2] = 'X';

    } else {

        this.innerHTML = `<img src= "${oIcon}" class="game">`;

        board[ind1][ind2] = 'O';
    }
    hit.play();
    checkWinner();
    totalScore++;
    turn = !turn;
    this.removeEventListener('click', tic);

    if (totalScore == 9 && winner == '') {
        alert('its a draw');
        ended = true;

    }


    if (ended == true)
        block.forEach(element => {
            element.removeEventListener('click', tic);
        });
}












const makeBoard = function() {

    block.forEach(element => {
        element.innerHTML = '<h1></h1>'
    });


    block.forEach(element => {
        element.addEventListener('click', tic);


    });
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    ended = false;
    turn = false;
    totalScore = 0;
    winner = '';

    document.querySelector('#winner').innerText = '';
}

document.querySelector('#reset').addEventListener('click', makeBoard);

makeBoard();