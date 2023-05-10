import { Ship } from './ship';

export class GameBoard {
    constructor() {
        this.ships = 0;
    }

    placeShip(x, y, horizontal, type) {
        const ship = new Ship(type);
        if (!horizontal) {
            for (let i = 0; i < ship.length; i++) {
                if ((this[`${x}, ${y + i}`] === undefined) && (y + i <= 9)) this[`${x}, ${y + i}`] = ship;
                else {
                    for (let j = 0; j < i; j++) {
                        this[`${x}, ${y + j}`] = undefined;
                    }
                    return 'ships overlap or overflow';
                }
            }            
        } else {
            for (let i = 0; i < ship.length; i++) {
                if ((this[`${x + i}, ${y}`] === undefined) && (x + i <= 9)) this[`${x + i}, ${y}`] = ship;
                else {
                    for (let j = 0; j < i; j++) {
                        this[`${x + j}, ${y}`] = undefined;
                    }
                    return 'ships overlap or overflow';
                }
            }
        }
        this.ships++;
        return 'ok';
    }

    receiveAttack([x, y]) {                 
        if (typeof this[`${x}, ${y}`] === 'object') {
            this[`${x}, ${y}`].hit();
            if (this[`${x}, ${y}`].isSunk()) this.ships--;
            this[`${x}, ${y}`] = 'hit';
            return 'hit';
        } else return this[`${x}, ${y}`] = 'miss';
    }

    shipsLeft() {
        return this.ships;
    }
}