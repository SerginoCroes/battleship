import { buildBoard, enemyBoard, playerBoard } from "./dom";
import { player1, player2, addShips } from "./game";

buildBoard(playerBoard);
buildBoard(enemyBoard);
addShips();

window.player = player1;
window.enemy = player2;

console.log('test', player, enemy);
