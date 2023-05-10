import { GameBoard } from "./gameboard";
import { drawShip, drawDot, message, addFunc } from "./dom";
import { Player } from "./player";

export const player1 = new Player('human');
export const player2 = new Player('computer');

player1.gameBoard = new GameBoard();
player2.gameBoard = new GameBoard();

let winner = false;

const shipArr = ['patrol', 'submarine', 'destroyer', 'battleship', 'carrier'];

export function computerAddShips() {
    for (let i = 0; i < 5; i++) {
        let x;
        let y;
        let placement;
        let horizontal = Math.random() >= 0.5;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            placement = player2.gameBoard.placeShip(x, y, horizontal ,shipArr[i]);

        } while (placement !== 'ok');
        //drawShip([x, y], horizontal, shipArr[i], document.querySelector('.enemyboard'));
    }
}

export function game() {
    addFunc(addShip);
    message(`place ${shipArr[0]}, click left for vertical, click right for horizontal`);
}

function addShip([x, y], horizontal) {    
    let i = player1.gameBoard.shipsLeft();
    message(`place ${shipArr[i + 1]}`);

    if (player1.gameBoard.placeShip(...[x, y], horizontal, shipArr[i]) === 'ok') {
        drawShip([x, y], horizontal, shipArr[i], document.querySelector('.playerboard'));
    }

    if (i > 3) {
        addFunc(step);
        message(`game started`);
    }
}

function step([x, y]) {
    let p2strike = 'miss';
    let p1strike = 'miss';

    let player1Turn = player1.takeTurn(x, y);
    if (typeof player1Turn === 'string') return;
    p1strike = player2.gameBoard.receiveAttack(player1Turn);
    drawDot(player1Turn, p1strike, document.querySelector('.enemyboard'));

    if (player2.gameBoard.shipsLeft() === 0) {
        winner = true;
        message('You won');
        addFunc(() => 0);
    }

    if (p1strike === 'miss') {
        do {
            let player2Turn = player2.takeTurn();
            p2strike = player1.gameBoard.receiveAttack(player2Turn);
            drawDot(player2Turn, p2strike, document.querySelector('.playerboard'));
        } while (p2strike === 'hit');

        if (player1.gameBoard.shipsLeft() === 0) {
            winner = true;
            message('Enemy won');
            addFunc(() => 0);
        }
    }
}

