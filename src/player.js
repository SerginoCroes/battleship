export class Player {
    constructor(type) {
        this.type = type;
        this.moves = [];
    }

    takeTurn(x = Math.floor(Math.random() * 10), y = Math.floor(Math.random() * 10)) {
        if (this.type === 'computer') {

            /* x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10); */

            if (this.moves.length >= 100) {
                return '100 moves made';
            } else if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        } else if (this.type === 'human') {
            
            if (this.moves.length >= 100) {
                alert('100 moves made');
                return '100 moves made';
            } else if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                //alert('already fired this position');
                return 'invalid, already played';
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        }
    }
}