const playerBoard = document.querySelector('.playerboard');
const enemyBoard = document.querySelector('.enemyboard');
const textField = document.querySelector('.textfield');

let funct;

export function buildBoards() {
    buildBoard(playerBoard);
    buildBoard(enemyBoard);
}

export function addFunc(func) {
    funct = func;
}

function buildBoard(board) {
    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.classList.add(`box`);
        box.classList.add(`box${i % 10}${Math.floor(i / 10)}`);
        box.addEventListener('click', () => {
            const coords = [i % 10, Math.floor(i / 10)];
            console.log('clicked', `${coords[0] + 1}${String.fromCharCode(65 + coords[1])}`);
            funct(coords);
        });
        board.appendChild(box);
    }
    buildLegend(board);
}

function buildLegend(board) {
    const xcoords = board.querySelector('.xcoords');
    const ycoords = board.querySelector('.ycoords');

    for (let i = 1; i <= 10; i++) {
        const xcoord = document.createElement('div');
        xcoord.classList.add('coord');
        const xtext = document.createElement('p');
        xtext.textContent = `${i}`;
        xcoord.appendChild(xtext);
        xcoords.appendChild(xcoord);

        const ycoord = document.createElement('div');
        ycoord.classList.add('coord');
        const ytext = document.createElement('p');
        ytext.textContent = String.fromCharCode(64 + i);
        ycoord.appendChild(ytext);
        ycoords.appendChild(ycoord);
    }
}

export function drawShip(x, y, type, board) {
    const ship = document.createElement('div');
    const box = board.querySelector(`.box${x}${y}`);
    ship.classList.add('ship');
    ship.classList.add(type);
    box.appendChild(ship);
}

export function drawDot([x, y], hitMiss, board) {
    const dot = document.createElement('div');
    const box = board.querySelector(`.box${x}${y}`);
    dot.classList.add(hitMiss);
    box.insertBefore(dot, box.children[0]);
}

export function message(message) {
    textField.innerText = message;
}