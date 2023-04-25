export const playerBoard = document.querySelector('.playerboard');
export const enemyBoard = document.querySelector('.enemyboard');

export function buildBoard(board) {
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('div');
        box.classList.add(`box`);
        box.classList.add(`box${i}`);
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
        ytext.textContent = String.fromCharCode(64+i);
        ycoord.appendChild(ytext);
        ycoords.appendChild(ycoord);
    } 
}

export function addShip(x, y, length) {
    
}