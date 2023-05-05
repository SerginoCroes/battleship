export class Player {
    constructor(type) {
        this.type = type;
        this.moves = [];
    }

    takeTurn() {
        if (this.type === 'computer') {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);

            if (this.moves.length >= 100) {
                return '100 moves made';
            } else if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        } else if (this.type === 'human') {
            //const [x, y] = 

            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);

            if (this.moves.length >= 100) {
                alert('100 moves made');
                return '100 moves made';
            } else if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {
                //alert('already fired this position');
                return this.takeTurn();
            } else if (x < 0 || x > 9 || y < 0 || y > 9) {
                alert('enter values between 0 and 9');
                return this.takeTurn();
            } else {
                this.moves.push([x, y]);
                return ([x, y]);
            }
        }
    }
}