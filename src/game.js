import { GameBoard } from "./gameboard";
import { drawShip, drawDot, message, addFunc } from "./dom";
import { Player } from "./player";

export const player1 = new Player('human');
export const player2 = new Player('computer');

player1.gameBoard = new GameBoard();
player2.gameBoard = new GameBoard();

let winner = false;

/////////////////////

const tempShipArr = [[5, 6, 'patrol'], [1, 1, 'submarine'], [3, 3, 'destroyer'], [5, 1, 'battleship'], [8, 4, 'carrier']];

export function tempAddShips() {
    for (let i = 0; i < 5; i++) {
        player1.gameBoard.placeShip(...tempShipArr[i]);
        drawShip(...tempShipArr[i], document.querySelector('.playerboard'));
        player2.gameBoard.placeShip(...tempShipArr[i]);
        //drawShip(...tempShipArr[i], document.querySelector('.enemyboard'));
    }
}

/////////////////////

export function game() {
    addFunc(step);
}

/////////////////////
 
function step([x, y]) {
    let p2strike = 'miss';
    let p1strike = 'miss';

    let player1Turn = player1.takeTurn(x, y);
    if (typeof player1Turn !== 'object') return;
    p1strike = player2.gameBoard.receiveAttack(player1Turn);            
    drawDot(player1Turn, p1strike, document.querySelector('.enemyboard'));
    
    if (player2.gameBoard.shipsLeft() === 0){
        winner = true;
        message('You won');
        addFunc(() => 0);
    }

    if (p1strike === 'miss') {
        do {
            let player2Turn = player2.takeTurn();
            p2strike = player1.gameBoard.receiveAttack(player2Turn);
            drawDot(player2Turn, p2strike, document.querySelector('.playerboard')); 
        } while(p2strike === 'hit');
        
        if (player1.gameBoard.shipsLeft() === 0) {
            winner = true;
            message('Enemy won');
        }
    }
}

