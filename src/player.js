//import { GameBoard } from "./gameboard";

export class Player {
    constructor(type) {
        this.type = type;
        this.moves = [];
    }

    takeTurn() {
        if (this.type === 'computer') {
            const x = Math.floor(Math.random() * 10 + 1);
            const y = Math.floor(Math.random() * 10 + 1);

            if (this.moves.length >= 100) {
                return '100 moves made';
            }
            else if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return [x, y];
            }
        } else if (this.type === 'human') {
            const x = prompt('enter x coordinate', 'x');
            const y = prompt('enter y coordinate', 'y');

            if (this.moves.length >= 100) {
                alert('100 moves made');
                return '100 moves made';
            } else if (x < 1 || x > 10 || y < 1 || y > 10) {
                alert('enter values between 1 and 10');
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return [x, y];
            }
        }
    }
}