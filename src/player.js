//import { GameBoard } from "./gameboard";

class Player {
    constructor(kind) {
        this.kind = kind;
    }

    takeTurn(board) {
        if (this.kind === 'computer') {

            
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);



        } else if (this.kind === 'human') {

        }
    }
}