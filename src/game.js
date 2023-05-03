import { GameBoard } from "./gameboard";
import { Player } from "./player";
import { addShip } from "./dom";

export const tempShipArr = [[1, 1, 'patrol'], [3, 1, 'submarine'], [5, 1, 'destroyer'], [7, 1, 'battleship'], [9, 1, 'carrier']];

export const player1 = new Player('human');
export const player2 = new Player('computer');

player1.gameBoard = new GameBoard();
player2.gameBoard = new GameBoard();

export function addShips() {
    for (let i = 0; i < 5; i++) {
        player1.gameBoard.placeShip(...tempShipArr[i]);
        addShip(tempShipArr[i][0], tempShipArr[i][1], tempShipArr[i][2], document.querySelector('.playerboard'));
        player2.gameBoard.placeShip(...tempShipArr[i]);
    }
}
