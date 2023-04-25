export const playerBoard = document.querySelector('.playerboard');
export const enemyBoard = document.querySelector('.enemyboard');

export function buildBoard(board) {
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('div');
        box.classList.add(`box`);
        box.classList.add(`box${i}`);
        board.appendChild(box);
    }
}
