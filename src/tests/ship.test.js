import {Ship} from '../ship';

test('ship is sunk when hits exceed length, but not earlier', () => {
    const ship = new Ship('submarine');
    ship.hit();
    expect(ship.isSunk()).not.toBe(true);
    expect(ship.isSunk()).toBe(false);
    for (let i = 0; i < 2; i++) {
        ship.hit();
    }
    expect(ship.isSunk()).not.toBe(false);
    expect(ship.isSunk()).toBe(true);

    const longShip = new Ship('carrier');
    longShip.hit();
    expect(longShip.isSunk()).not.toBe(true);
    expect(longShip.isSunk()).toBe(false);
    for (let i = 0; i < 3; i++) {
        longShip.hit();
    }
    expect(longShip.isSunk()).not.toBe(true);
    expect(longShip.isSunk()).toBe(false);
    longShip.hit();
    expect(longShip.isSunk()).not.toBe(false);
    expect(longShip.isSunk()).toBe(true);
});