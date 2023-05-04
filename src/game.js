import { GameBoard } from "./gameboard";
import { Player } from "./player";
import { addShip, drawDot, message } from "./dom";

export const player1 = new Player('human');
export const player2 = new Player('computer');

player1.gameBoard = new GameBoard();
player2.gameBoard = new GameBoard();

/////////////////////

const tempShipArr = [[5, 6, 'patrol'], [1, 1, 'submarine'], [3, 3, 'destroyer'], [5, 1, 'battleship'], [8, 4, 'carrier']];

export function tempAddShips() {
    for (let i = 0; i < 5; i++) {
        player1.gameBoard.placeShip(...tempShipArr[i]);
        addShip(...tempShipArr[i], document.querySelector('.playerboard'));
        player2.gameBoard.placeShip(...tempShipArr[i]);
        //addShip(...tempShipArr[i], document.querySelector('.enemyboard'));
    }
}

/////////////////////

export function game() {
    while (player1.gameBoard.shipsLeft() !== 0 && player2.gameBoard.shipsLeft() !== 0) {
        let player2Turn = player2.takeTurn();
        let player1Turn = player1.takeTurn();

        drawDot(player2Turn, player1.gameBoard.receiveAttack(player2Turn), document.querySelector('.playerboard'));
        drawDot(player1Turn, player2.gameBoard.receiveAttack(player1Turn), document.querySelector('.enemyboard'));
    }
    if (player1.gameBoard.shipsLeft() === 0) {
        message('Enemy won');
    } else {
        message('You won');
    }
}