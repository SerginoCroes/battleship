import { buildBoards } from "./dom";
import { player1, player2, tempAddShips, game } from "./game";

buildBoards();
tempAddShips();

game();

console.log('test', player1, player2);
