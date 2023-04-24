import {Player} from '../player';

test('computer player does not return values greater than 10', () => {
    const player = new Player('computer');
    for (let i = 0; i < 100; i++) {
        let arr = player.takeTurn();
        expect(arr[0]).toBeGreaterThan(0);
        expect(arr[0]).toBeLessThanOrEqual(10);
        expect(arr[1]).toBeGreaterThan(0);
        expect(arr[1]).toBeLessThanOrEqual(10);
    }
    expect(player.takeTurn()).toBe('100 moves made');
});

test("player can't enter values greater than 10", () => {
    const player2 = new Player('human');
    for (let i = 0; i < 100; i++) {
        let arr = player2.takeTurn();
        expect(arr[0]).toBeGreaterThan(0);
        expect(arr[0]).toBeLessThanOrEqual(10);
        expect(arr[1]).toBeGreaterThan(0);
        expect(arr[1]).toBeLessThanOrEqual(10);
    }
    expect(player2.takeTurn()).toBe('100 moves made');
});