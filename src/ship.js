const ships = {patrol: 2, submarine: 3, destroyer: 3, battleship: 4, carrier: 5};

export class Ship {
    constructor(type) {
        this.type = type;
        this.length = ships[type];
        this.hits = 0;
        this.hasSunk = 0;
    }

    hit() {
        this.hits ++;
    }

    isSunk () {
        return this.hits >= this.length ? true : false;
    }
}

