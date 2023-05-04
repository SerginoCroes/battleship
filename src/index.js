import { buildBoard, enemyBoard, playerBoard } from "./dom";
import { player1, player2, tempAddShips, game } from "./game";

buildBoard(playerBoard);
buildBoard(enemyBoard);
tempAddShips();

window.player = player1;
window.enemy = player2;


game();

console.log('test', player, enemy);
