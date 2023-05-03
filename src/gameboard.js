import {Ship} from './ship';

export class GameBoard {
    constructor() {
        this.ships = 0;
    }

    placeShip(x, y, type) {
        const ship = new Ship(type);
        for (let i = 0; i < ship.length; i++) {
            this[`${x}, ${y + i}`] = ship;
        }
        this.ships ++;
    }

    receiveAttack([x, y]) {
        if (typeof this[`${x}, ${y}`] === 'object') {
            this[`${x}, ${y}`].hit();
            if (this[`${x}, ${y}`].isSunk()) this.ships --;
            this[`${x}, ${y}`] = 'hit';
            return 'hit';
        } else return this[`${x}, ${y}`] = 'miss';    
    }

    shipsLeft() {
        return this.ships;
    }
}