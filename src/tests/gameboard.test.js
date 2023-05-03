import {GameBoard} from '../gameboard';

//tempoary test
test('board can place a ship and return true when hit', () => {
    const board = new GameBoard();
    expect(board.shipsLeft()).toBe(0);

    board.placeShip(2, 3, 'submarine');
    expect(board.shipsLeft()).toBe(1);

    expect(board.receiveAttack([2, 1])).toBe('miss');
    expect(board.receiveAttack([2, 2])).toBe('miss');

    expect(board.receiveAttack([2, 3])).toBe('hit');
    expect(board.receiveAttack([2, 4])).toBe('hit');
    expect(board.receiveAttack([2, 5])).toBe('hit');

    expect(board.receiveAttack([3, 3])).toBe('miss');
    expect(board.receiveAttack([3, 4])).toBe('miss');
    expect(board.receiveAttack([3, 5])).toBe('miss');

    expect(board.shipsLeft()).toBe(0);
});
