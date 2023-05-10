/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFunc\": () => (/* binding */ addFunc),\n/* harmony export */   \"buildBoards\": () => (/* binding */ buildBoards),\n/* harmony export */   \"drawDot\": () => (/* binding */ drawDot),\n/* harmony export */   \"drawShip\": () => (/* binding */ drawShip),\n/* harmony export */   \"message\": () => (/* binding */ message)\n/* harmony export */ });\nconst playerBoard = document.querySelector('.playerboard');\nconst enemyBoard = document.querySelector('.enemyboard');\nconst textField = document.querySelector('.textfield');\n\nlet funct;\n\nfunction buildBoards() {\n    buildBoard(playerBoard);\n    buildBoard(enemyBoard);\n}\n\nfunction addFunc(func) {\n    funct = func;\n}\n\nfunction buildBoard(board) {\n    for (let i = 0; i < 100; i++) {\n        const box = document.createElement('div');\n        const coords = [i % 10, Math.floor(i / 10)];\n        box.classList.add(`box`);\n        box.classList.add(`box${i % 10}${Math.floor(i / 10)}`);\n        box.addEventListener('click', () => {\n            funct(coords, false);\n        });\n        box.addEventListener('contextmenu', (e) => {\n            e.preventDefault();\n            funct(coords, true);\n        });\n        board.appendChild(box);\n    }\n    buildLegend(board);\n}\n\nfunction buildLegend(board) {\n    const xcoords = board.querySelector('.xcoords');\n    const ycoords = board.querySelector('.ycoords');\n\n    for (let i = 1; i <= 10; i++) {\n        const xcoord = document.createElement('div');\n        xcoord.classList.add('coord');\n        const xtext = document.createElement('p');\n        xtext.textContent = `${i}`;\n        xcoord.appendChild(xtext);\n        xcoords.appendChild(xcoord);\n\n        const ycoord = document.createElement('div');\n        ycoord.classList.add('coord');\n        const ytext = document.createElement('p');\n        ytext.textContent = String.fromCharCode(64 + i);\n        ycoord.appendChild(ytext);\n        ycoords.appendChild(ycoord);\n    }\n}\n\nfunction drawShip([x, y], horizontal, type, board) {\n    const ship = document.createElement('div');\n    const box = board.querySelector(`.box${x}${y}`);\n    ship.classList.add('ship');\n    ship.classList.add(type);\n    if (horizontal) ship.classList.add('horizontal');\n    box.appendChild(ship);\n}\n\nfunction drawDot([x, y], hitMiss, board) {\n    const dot = document.createElement('div');\n    const box = board.querySelector(`.box${x}${y}`);\n    dot.classList.add(hitMiss);\n    box.insertBefore(dot, box.children[0]);\n}\n\nfunction message(message) {\n    textField.innerText = message;\n}\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerAddShips\": () => (/* binding */ computerAddShips),\n/* harmony export */   \"game\": () => (/* binding */ game),\n/* harmony export */   \"player1\": () => (/* binding */ player1),\n/* harmony export */   \"player2\": () => (/* binding */ player2)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nconst player1 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player('human');\nconst player2 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player('computer');\n\nplayer1.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\nplayer2.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n\nlet winner = false;\n\nconst shipArr = ['patrol', 'submarine', 'destroyer', 'battleship', 'carrier'];\n\nfunction computerAddShips() {\n    for (let i = 0; i < 5; i++) {\n        let x;\n        let y;\n        let placement;\n        let horizontal = Math.random() >= 0.5;\n        do {\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n            placement = player2.gameBoard.placeShip(x, y, horizontal ,shipArr[i]);\n\n        } while (placement !== 'ok');\n        //drawShip([x, y], horizontal, shipArr[i], document.querySelector('.enemyboard'));\n    }\n}\n\nfunction game() {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addFunc)(addShip);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.message)(`place ${shipArr[0]}, click left for vertical, click right for horizontal`);\n}\n\nfunction addShip([x, y], horizontal) {    \n    let i = player1.gameBoard.shipsLeft();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.message)(`place ${shipArr[i + 1]}`);\n\n    if (player1.gameBoard.placeShip(...[x, y], horizontal, shipArr[i]) === 'ok') {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.drawShip)([x, y], horizontal, shipArr[i], document.querySelector('.playerboard'));\n    }\n\n    if (i > 3) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addFunc)(step);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.message)(`game started`);\n    }\n}\n\nfunction step([x, y]) {\n    let p2strike = 'miss';\n    let p1strike = 'miss';\n\n    let player1Turn = player1.takeTurn(x, y);\n    if (typeof player1Turn === 'string') return;\n    p1strike = player2.gameBoard.receiveAttack(player1Turn);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.drawDot)(player1Turn, p1strike, document.querySelector('.enemyboard'));\n\n    if (player2.gameBoard.shipsLeft() === 0) {\n        winner = true;\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.message)('You won');\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addFunc)(() => 0);\n    }\n\n    if (p1strike === 'miss') {\n        do {\n            let player2Turn = player2.takeTurn();\n            p2strike = player1.gameBoard.receiveAttack(player2Turn);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.drawDot)(player2Turn, p2strike, document.querySelector('.playerboard'));\n        } while (p2strike === 'hit');\n\n        if (player1.gameBoard.shipsLeft() === 0) {\n            winner = true;\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.message)('Enemy won');\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addFunc)(() => 0);\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n    constructor() {\n        this.ships = 0;\n    }\n\n    placeShip(x, y, horizontal, type) {\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(type);\n        if (!horizontal) {\n            for (let i = 0; i < ship.length; i++) {\n                if ((this[`${x}, ${y + i}`] === undefined) && (y + i <= 9)) this[`${x}, ${y + i}`] = ship;\n                else {\n                    for (let j = 0; j < i; j++) {\n                        this[`${x}, ${y + j}`] = undefined;\n                    }\n                    return 'ships overlap or overflow';\n                }\n            }            \n        } else {\n            for (let i = 0; i < ship.length; i++) {\n                if ((this[`${x + i}, ${y}`] === undefined) && (x + i <= 9)) this[`${x + i}, ${y}`] = ship;\n                else {\n                    for (let j = 0; j < i; j++) {\n                        this[`${x + j}, ${y}`] = undefined;\n                    }\n                    return 'ships overlap or overflow';\n                }\n            }\n        }\n        this.ships++;\n        return 'ok';\n    }\n\n    receiveAttack([x, y]) {                 \n        if (typeof this[`${x}, ${y}`] === 'object') {\n            this[`${x}, ${y}`].hit();\n            if (this[`${x}, ${y}`].isSunk()) this.ships--;\n            this[`${x}, ${y}`] = 'hit';\n            return 'hit';\n        } else return this[`${x}, ${y}`] = 'miss';\n    }\n\n    shipsLeft() {\n        return this.ships;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.buildBoards)();\n(0,_game__WEBPACK_IMPORTED_MODULE_1__.computerAddShips)();\n(0,_game__WEBPACK_IMPORTED_MODULE_1__.game)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n    constructor(type) {\n        this.type = type;\n        this.moves = [];\n    }\n\n    takeTurn(x = Math.floor(Math.random() * 10), y = Math.floor(Math.random() * 10)) {\n        if (this.type === 'computer') {\n            if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {\n                return this.takeTurn();\n            } else {\n                this.moves.push([x, y]);\n                return ([x, y]);\n            }\n        } else if (this.type === 'human') {            \n            if (this.moves.reduce((val, arr) => (arr[0] === x && arr[1] === y) || val, false)) {\n                return 'invalid, already played';\n            } else {\n                this.moves.push([x, y]);\n                return ([x, y]);\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst ships = { patrol: 2, submarine: 3, destroyer: 3, battleship: 4, carrier: 5 };\n\nclass Ship {\n    constructor(type) {\n        this.type = type;\n        this.length = ships[type];\n        this.hits = 0;\n        this.hasSunk = false;\n    }\n\n    hit() {\n        this.hits++;\n    }\n\n    isSunk() {\n        return this.hits >= this.length ? true : false;\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;