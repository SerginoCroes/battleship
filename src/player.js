export class Player {
    constructor(type) {
        this.type = type;
        this.moves = [];
    }

    takeTurn(x = Math.floor(Math.random() * 10), y = Math.floor(Math.random() * 10)) {
        if (this.type === 'computer') {
            if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        } else if (this.type === 'human') {            
            if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                return console.log('invalid, already played');
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        }
    }
}