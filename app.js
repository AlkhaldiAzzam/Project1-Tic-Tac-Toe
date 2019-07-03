let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

//false is X and true is O
let turn = false;
//state of the game
let ended = false;

let ai = false;

//storing the icon chosed in the local storage
let xIcon = window.localStorage.getItem('x'),
    oIcon = window.localStorage.getItem('o');


const hit = new Audio('sounds/LSwall01.mp3');


//gathering all the boxes in an array
const block = document.querySelectorAll('.column');

let totalScore = 0;

// window.localStorage.setItem('xScore', 0);

// window.localStorage.setItem('oScore', 0);

let xScore = 0,
    oScore = 0;

let winner;
//this function is for checking the winning conditions
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

    //these are the winning conditions..
    for (let i = 0; i < 3; i++) {
        // it will check each row and column through the loop
        (board[i][0] === board[i][1] && board[i][0] == board[i][2] && board[i][0] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

        (board[0][i] === board[1][i] && board[0][i] == board[2][i] && board[0][i] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

    }
    // then the diagonal conditions manually
    (board[0][0] === board[1][1] && board[0][0] == board[2][2] && board[0][0] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';

    (board[0][2] === board[1][1] && board[0][2] == board[2][0] && board[0][2] != '') ? (turn == false ? xHasWon() : oHasWon()) : '';


}


const tic = function() {
    //aquiring the id of the box then converting it to integers to be used with the 2d array
    let id = this.id;

    const idArr = id.split('-');

    const ind1 = parseInt(idArr[1], 10);

    const ind2 = parseInt(idArr[2], 10);


    if (turn == false) {
        this.innerHTML = `<img src= "${xIcon}" class="game">`;

        board[ind1][ind2] = 'X';


    } else {
        this.innerHTML = `<img src= "${oIcon}" class="game">`;

        board[ind1][ind2] = 'O';
    }
    //audio for the tics
    hit.play();

    //this is an overly complicated way to display whos player's turn is it
    if (turn == true && ai == false)
        document.querySelector('#winner').innerText = "it's X's Turn";
    else if (!turn && ai == false)
        document.querySelector('#winner').innerText = "it's O's Turn";

    else
        document.querySelector('#winner').innerText = "You Are Playing Against the AI";

    // it will first check if the current player has won or not, then switch the players
    checkWinner();
    turn = !turn;
    totalScore++;
    //remove the event listiner to disable the box from re-ticking it 
    this.removeEventListener('click', tic);




    // check if it ended in a draw
    if (totalScore == 9 && winner == '') {
        document.querySelector('#winner').innerText = 'Its a DRAW!';
        ended = true;

    }

    // when the game ends, removes all eventListiners..
    if (ended == true)
        block.forEach(element => {
            element.removeEventListener('click', tic);
        });


    //  this is the dumb AI condition, to check weather its on or off..
    if (ai == true) {
        scan();
        randomTic();

    }
}












// this the main function to reset and initialize the board..
//it will also reset all the important variables..
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

    //it will be initially X's turn, soo..why not?
    document.querySelector('#winner').innerText = "it's X's Turn";
}

document.querySelector('#reset').addEventListener('click', makeBoard);

//initialize the board at refresh..
makeBoard();



//smart ai algorythm, will go back to it later...i think


// const yourTurn = function() {

//     let thePlace;
//     let counter;
//     let found = false;
//     // console.log('the place is', thePlace);

//     for (let j = 0; j < 3; j++) {
//         counter = 0;
//         thePlace = undefined;
//         for (let i = 0; i < 3; i++) {

//             if (board[j][i] == '') {

//                 thePlace = document.querySelector(`#a-${j}-${i}`)
//             } else if (board[j][i] == 'x') {
//                 counter++;
//             }



//             console.log('the place is', thePlace);
//             console.log('counter', counter);
//             console.log(board[j][i]);


//             if (counter == 2 && thePlace != undefined) {
//                 thePlace.innerHTML = `<img src= "${oIcon}" class="game">`;
//                 console.log('the place is', thePlace.innerHTML);
//                 board[j][i] = 'O';

//                 checkWinner();
//                 turn = false;
//                 found = true;



//             }


//         }



//         if (found == true) {
//             return;
//         }
//     }

//     // for (let j = 0; j < 3; j++) {
//     //     counter = 0;
//     //     thePlace;
//     //     for (let i = 0; i < 3; i++) {
//     //         board[i][j] == '' ? thePlace = board[i][j] : (board[i][j] == 'x' ? counter++ : 'hi');

//     //         if (counter == 2 && thePlace != undefined) {
//     //             thePlace.innerHTML = `<img src= "${oIcon}" class="game">`;

//     //             board[i][j] = 'O';

//     //             turn = false;
//     //             found = true;



//     //         }

//     //     }

//     //     if (found == true) {
//     //         return;
//     //     }
//     // }




//     scan();
//     randomTic();





// }


//initialized here just in case...
let scannedBoard = [];

const randomTic = function() {

    //shuffle the array for a sense of randomness
    scannedBoard.sort((a, b) => {
        return Math.random() - 0.5;
    })

    document.querySelector(`#a-${scannedBoard[0]}`).innerHTML = `<img src= "${oIcon}" class="game">`;

    const idArr = scannedBoard[0].split('-');

    const ind1 = parseInt(idArr[0], 10);

    const ind2 = parseInt(idArr[1], 10);

    board[ind1][ind2] = 'O';

    document.querySelector(`#a-${scannedBoard[0]}`).removeEventListener('click', tic);
    //checks if it hasnt already ended to see if it won..
    if (!ended)
        checkWinner();

    turn = false;

    if (ended == true)
        block.forEach(element => {
            element.removeEventListener('click', tic);
        });


}

let index = 0;
//the function that scans the "board" array..
const scan = function() {
    scannedBoard = [];
    for (let i = 0; i < 3; i++) {


        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                scannedBoard[index] = `${i}-${j}`;
                index++;
            }
        }

    }

    return scannedBoard;
}

//a function to highlight the 'Activate AI' button..
const highlight = function() {

    ai = !ai;

    if (ai == true)

        this.className += ' AI-activated';

    else

        this.className = 'buttons';

}


document.querySelector("#AI").addEventListener('click', highlight);