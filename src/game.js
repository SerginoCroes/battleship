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

    if (player1.gameBoard.placeShip(...[x, y], horizontal, shipArr[i]) === 'ok') {
        drawShip([x, y], horizontal, shipArr[i], document.querySelector('.playerboard'));
        message(`place ${shipArr[i + 1]}`);

        if (i > 3) {
            addFunc(step);
            message(`game started`);
        }
    }

}

function step([x, y]) {
    let p2strike = 'miss';
    let p1strike = 'miss';

    let player1Turn = player1.takeTurn(x, y);
    if (typeof player1Turn !== 'object') return;
    p1strike = player2.gameBoard.receiveAttack(player1Turn);
    drawDot(player1Turn, p1strike, document.querySelector('.enemyboard'));

    if (player2.gameBoard.shipsLeft() === 0) {
        winner = true;
        message('You won');
        addFunc(() => 0);
    }

    if (p1strike === 'miss') {
        let player2Turn = player2.takeTurn();
        p2strike = player1.gameBoard.receiveAttack(player2Turn);
        drawDot(player2Turn, p2strike, document.querySelector('.playerboard'));

        while (p2strike === 'hit') {
            let horVer = Math.random() > 0.5;
            if (player2Turn[0] > 0 && player2Turn[0] < 9 && horVer) {
                player2Turn = player2.takeTurn(player2Turn[0] += Math.random() > 0.5 ? -1 : 1, player2Turn[1]);
            } else if (player2Turn[1] > 0 && player2Turn[1] < 9 && !horVer) {
                player2Turn = player2.takeTurn(player2Turn[0], player2Turn[1] += Math.random() > 0.5 ? -1 : 1);
            } else {
                player2Turn = player2.takeTurn();
            }
            p2strike = player1.gameBoard.receiveAttack(player2Turn);
            drawDot(player2Turn, p2strike, document.querySelector('.playerboard'));
        } 

        if (player1.gameBoard.shipsLeft() === 0) {
            winner = true;
            message('Enemy won');
            addFunc(() => 0);
        }
    }
}

