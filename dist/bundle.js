/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./src/field.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/common.js");



class Board {
  constructor() {
    this.horizontalLines = ["a", "b", "c", "d", "e", "f", "g", "h"];
    this.verticalLines = [8, 7, 6, 5, 4, 3, 2, 1];
    this.fields = [];
    this.element = null;
    this.createHtmlBoard();
    this.createBoardHelpers();
    this.createBoardFields();
    console.log("board initialized 456", this);
  }

  createHtmlBoard() {
    let app = document.getElementById("app");
    if (!app) {
      app = document.createElement("div");
      app.id = "app";
      document.body.appendChild(app);
    }
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(app, {
      position: "relative",
    })
    this.element = document.createElement("ul");
    this.element.id = "board";
    app.appendChild(this.element);
    this.createBoardStyles();
  }

  createBoardFields() {
    for (let i = 0; i < this.verticalLines.length; i++) {
      for (let j = 0; j < this.horizontalLines.length; j++) {
        const field = new _field__WEBPACK_IMPORTED_MODULE_0__["default"](this.verticalLines[i], this.horizontalLines[j], this.element);
        if (i % 2 === 0 && j % 2 === 1 || i % 2 === 1 && j % 2 === 0) {
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(field.element, {
            backgroundColor: "#c7c7c7"
          })
        }
        this.fields.push(field);
      }
    }
  }

  createBoardStyles() {
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(this.element, {
      width: "644px",
      height: "644px",
      border: "2px solid black",
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      listStyle: "none",
    })
  }

  createBoardHelpers() {
    const horizontalHelpers = document.createElement("ul");
    const verticalHelpers = document.createElement("ul");
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(horizontalHelpers, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      padding: "0",
      listStyle: "none",
      position: "absolute",
      bottom: "-24px",
      left: 0,
    })
    ;(0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(verticalHelpers, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "0",
      padding: "0",
      listStyle: "none",
      position: "absolute",
      top: 0,
      left: "-24px",
    })
    this.horizontalLines.forEach(letter => {
      const helper = document.createElement("li");
      helper.innerText = letter;
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(helper, {
        width: "80px",
        height: "24px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      })
      horizontalHelpers.appendChild(helper);
    })
    this.verticalLines.forEach(number => {
      const helper = document.createElement("li");
      helper.innerText = number;
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(helper, {
        height: "80px",
        width: "24px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      })
      verticalHelpers.appendChild(helper);
    });
    this.element.prepend(horizontalHelpers);
    this.element.prepend(verticalHelpers);
  }

  render() {
    this.fields.forEach(field => field.renderFigure())
  }

}


/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setElementStyles": () => (/* binding */ setElementStyles)
/* harmony export */ });

const setElementStyles = (element, styles) => {
  for (let property in styles) {
    element.style[property] = styles[property];
  }
}


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHESS_FIGURES_IMG": () => (/* binding */ CHESS_FIGURES_IMG),
/* harmony export */   "PLAYER_TYPE": () => (/* binding */ PLAYER_TYPE),
/* harmony export */   "TEAM_COLOR": () => (/* binding */ TEAM_COLOR),
/* harmony export */   "TEAM_DIRECTION": () => (/* binding */ TEAM_DIRECTION)
/* harmony export */ });
const PLAYER_TYPE = {
  player: "player",
  pc: "pc"
}

const TEAM_DIRECTION = {
  top: "top",
  bottom: "bottom"
}

const TEAM_COLOR = {
  white: "white",
  black: "black"
}

const CHESS_FIGURES_IMG = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Chess_Pieces_Sprite.svg";


/***/ }),

/***/ "./src/field.js":
/*!**********************!*\
  !*** ./src/field.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Field {
  constructor(verticalPosition, horizontalPosition, board) {
    this.hPos = horizontalPosition;
    this.vPos = verticalPosition;
    this.element = document.createElement("li");
    this.figure = null;
    // this.element.innerText = this.hPos + " " + this.vPos;
    this.createStyles();
    board.appendChild(this.element);
  }

  createStyles() {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.setElementStyles)(this.element, {
      width: "80px",
      height: "80px",
      flex: "0 0 80px",
      margin: "0",
      padding: "0",
      border: "1px solid #434343",
      boxSizing: "border-box",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    })
  }

  renderFigure() {
    if (this.figure) {
      (0,_common__WEBPACK_IMPORTED_MODULE_0__.setElementStyles)(this.element, {
        backgroundImage: `url(${_constants__WEBPACK_IMPORTED_MODULE_1__.CHESS_FIGURES_IMG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "550%",
        backgroundPosition: this.figure.backgroundPosition,
      })
    }
  }

}


/***/ }),

/***/ "./src/figures/Bishop.js":
/*!*******************************!*\
  !*** ./src/figures/Bishop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bishop)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class Bishop extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "39.5% -1%" : "39.5% 110%";
  }

}


/***/ }),

/***/ "./src/figures/Figure.js":
/*!*******************************!*\
  !*** ./src/figures/Figure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Figure)
/* harmony export */ });
class Figure {

  constructor(startPosition, player) {
    this.position = startPosition;
    this.startPosition = startPosition;
    this.player = player;
  }

  move(position) {
    this.position = position;
  }

}


/***/ }),

/***/ "./src/figures/King.js":
/*!*****************************!*\
  !*** ./src/figures/King.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ King)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class King extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "-1% -1%" : "-1% 110%";
  }

}


/***/ }),

/***/ "./src/figures/Knight.js":
/*!*******************************!*\
  !*** ./src/figures/Knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knight)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class Knight extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "knight";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "60% 0%" : "60% 111%";
  }

  checkForAvailableMovePositions() {
    let availableMoves = [];
    if (this.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_DIRECTION.top) {
      // if () {
      //
      // }
      if (this.position.h === this.startPosition.h && this.startPosition.v === this.startPosition.v) {

      }
      return []
    }
  }

}


/***/ }),

/***/ "./src/figures/Pawn.js":
/*!*****************************!*\
  !*** ./src/figures/Pawn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pawn)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class Pawn extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "pawn";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "100.25% 2%" : "100.25% 112%";
  }

  checkForAvailableMovePositions() {
    let availableMoves = [];
    if (this.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_DIRECTION.top) {
      // if () {
      //
      // }
      if (this.position.h === this.startPosition.h && this.startPosition.v === this.startPosition.v) {

      }
      return []
    }
  }

}


/***/ }),

/***/ "./src/figures/Queen.js":
/*!******************************!*\
  !*** ./src/figures/Queen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queen)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class Queen extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "queen";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "19% -1%" : "19% 110%";
  }

}


/***/ }),

/***/ "./src/figures/Rook.js":
/*!*****************************!*\
  !*** ./src/figures/Rook.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rook)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ "./src/figures/Figure.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class Rook extends _Figure__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? "80% 0%" : "80% 111%";
  }

}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/common.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _startFigures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startFigures */ "./src/startFigures.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");






class Game {

  constructor() {
    this.applyBaseStyles();
    this.start();
  }

  start() {
    this.players = [
      new _player__WEBPACK_IMPORTED_MODULE_4__["default"](_constants__WEBPACK_IMPORTED_MODULE_2__.PLAYER_TYPE.player, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_DIRECTION.top, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLOR.white),
      new _player__WEBPACK_IMPORTED_MODULE_4__["default"](_constants__WEBPACK_IMPORTED_MODULE_2__.PLAYER_TYPE.pc, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_DIRECTION.bottom, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLOR.black)
    ];
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    (0,_startFigures__WEBPACK_IMPORTED_MODULE_3__["default"])(this.board, this.players);
    this.board.render();
  }

  applyBaseStyles() {
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(document.documentElement, {
      width: "100%",
      height: "100%",
    })
    ;(0,_common__WEBPACK_IMPORTED_MODULE_1__.setElementStyles)(document.body, {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
    })
  }

}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {

  constructor(playerType, teamDirection, teamColor) {
    this.playerType = playerType;
    this.teamDirection = teamDirection;
    this.teamColor = teamColor;
  }

}


/***/ }),

/***/ "./src/startFigures.js":
/*!*****************************!*\
  !*** ./src/startFigures.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _figures_Pawn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figures/Pawn */ "./src/figures/Pawn.js");
/* harmony import */ var _figures_Rook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figures/Rook */ "./src/figures/Rook.js");
/* harmony import */ var _figures_Knight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figures/Knight */ "./src/figures/Knight.js");
/* harmony import */ var _figures_Bishop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./figures/Bishop */ "./src/figures/Bishop.js");
/* harmony import */ var _figures_Queen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./figures/Queen */ "./src/figures/Queen.js");
/* harmony import */ var _figures_King__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./figures/King */ "./src/figures/King.js");








const setStartFigures = (board, players) => {
  players.forEach(player => {
    const pawnVerticalLine = (player.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_DIRECTION.top) ? 2 : 7;
    const mainVerticalLine = (player.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_DIRECTION.top) ? 1 : 8;
    board.horizontalLines.forEach(letter => {
      /** PAWNS **/
      const pawnField = board.fields.find(field => field.hPos === letter && field.vPos === pawnVerticalLine);
      const startPawnPosition = {hPos: letter, vPos: pawnVerticalLine};
      pawnField.figure = new _figures_Pawn__WEBPACK_IMPORTED_MODULE_1__["default"](startPawnPosition, player);
      /** OTHER **/
      const field = board.fields.find(field => field.hPos === letter && field.vPos === mainVerticalLine);
      const startPosition = {hPos: letter, vPos: mainVerticalLine};
      switch (letter) {
        case "a":
        case "h":
          field.figure = new _figures_Rook__WEBPACK_IMPORTED_MODULE_2__["default"](startPosition, player);
          break;
        case "b":
        case "g":
          field.figure = new _figures_Knight__WEBPACK_IMPORTED_MODULE_3__["default"](startPosition, player);
          break;
        case "c":
        case "f":
          field.figure = new _figures_Bishop__WEBPACK_IMPORTED_MODULE_4__["default"](startPosition, player);
          break;
        case "d":
          field.figure = new _figures_Queen__WEBPACK_IMPORTED_MODULE_5__["default"](startPosition, player);
          break;
        case "e":
          field.figure = new _figures_King__WEBPACK_IMPORTED_MODULE_6__["default"](startPosition, player);
          break;
        default:
          break;
      }
    })
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStartFigures);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/chess.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELHNCQUFzQixpQ0FBaUM7QUFDdkQsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0EsVUFBVSx5REFBZ0I7QUFDMUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDBEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDSTtBQUM5QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBZ0I7QUFDdEIsZ0NBQWdDLHlEQUFpQixDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzhCO0FBQ1U7QUFDeEM7QUFDZSxxQkFBcUIsK0NBQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0RBQWdCO0FBQ25FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjhCO0FBQ1U7QUFDeEM7QUFDZSxtQkFBbUIsK0NBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0RBQWdCO0FBQ25FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEI7QUFDMEI7QUFDeEQ7QUFDZSxxQkFBcUIsK0NBQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0RBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBEQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCOEI7QUFDMEI7QUFDeEQ7QUFDZSxtQkFBbUIsK0NBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0RBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBEQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCOEI7QUFDVTtBQUN4QztBQUNlLG9CQUFvQiwrQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3REFBZ0I7QUFDbkU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1g4QjtBQUNVO0FBQ3hDO0FBQ2UsbUJBQW1CLCtDQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdEQUFnQjtBQUNuRTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRCO0FBQ2M7QUFDMEI7QUFDdkI7QUFDZjtBQUM5QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQU0sQ0FBQywwREFBa0IsRUFBRSwwREFBa0IsRUFBRSx3REFBZ0I7QUFDekUsVUFBVSwrQ0FBTSxDQUFDLHNEQUFjLEVBQUUsNkRBQXFCLEVBQUUsd0RBQWdCO0FBQ3hFO0FBQ0EscUJBQXFCLDhDQUFLO0FBQzFCLElBQUkseURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjJDO0FBQ1Q7QUFDQTtBQUNJO0FBQ0E7QUFDRjtBQUNGO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCwwREFBa0I7QUFDekUsdURBQXVELDBEQUFrQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCLHFEQUFJO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQU07QUFDbkM7QUFDQTtBQUNBLDZCQUE2QixzREFBSztBQUNsQztBQUNBO0FBQ0EsNkJBQTZCLHFEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7OztVQzlDOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQjtBQUMxQjtBQUNBLElBQUksNkNBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZWxkLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvQmlzaG9wLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvRmlndXJlLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvS2luZy5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9maWd1cmVzL0tuaWdodC5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9maWd1cmVzL1Bhd24uanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZmlndXJlcy9RdWVlbi5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9maWd1cmVzL1Jvb2suanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvc3RhcnRGaWd1cmVzLmpzIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvY2hlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkIGZyb20gXCIuL2ZpZWxkXCI7XHJcbmltcG9ydCB7c2V0RWxlbWVudFN0eWxlc30gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhvcml6b250YWxMaW5lcyA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCJdO1xyXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gWzgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdO1xyXG4gICAgdGhpcy5maWVsZHMgPSBbXTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmNyZWF0ZUh0bWxCb2FyZCgpO1xyXG4gICAgdGhpcy5jcmVhdGVCb2FyZEhlbHBlcnMoKTtcclxuICAgIHRoaXMuY3JlYXRlQm9hcmRGaWVsZHMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9hcmQgaW5pdGlhbGl6ZWQgNDU2XCIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSHRtbEJvYXJkKCkge1xyXG4gICAgbGV0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgaWYgKCFhcHApIHtcclxuICAgICAgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYXBwLmlkID0gXCJhcHBcIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xyXG4gICAgfVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyhhcHAsIHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0aGlzLmVsZW1lbnQuaWQgPSBcImJvYXJkXCI7XHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlQm9hcmRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkRmllbGRzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2FsTGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhvcml6b250YWxMaW5lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gbmV3IEZpZWxkKHRoaXMudmVydGljYWxMaW5lc1tpXSwgdGhpcy5ob3Jpem9udGFsTGluZXNbal0sIHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGkgJSAyID09PSAwICYmIGogJSAyID09PSAxIHx8IGkgJSAyID09PSAxICYmIGogJSAyID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRFbGVtZW50U3R5bGVzKGZpZWxkLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjN2M3YzdcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkU3R5bGVzKCkge1xyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgd2lkdGg6IFwiNjQ0cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjY0NHB4XCIsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRIZWxwZXJzKCkge1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbEhlbHBlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbEhlbHBlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKGhvcml6b250YWxIZWxwZXJzLCB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogXCItMjRweFwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSlcclxuICAgIHNldEVsZW1lbnRTdHlsZXModmVydGljYWxIZWxwZXJzLCB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogXCItMjRweFwiLFxyXG4gICAgfSlcclxuICAgIHRoaXMuaG9yaXpvbnRhbExpbmVzLmZvckVhY2gobGV0dGVyID0+IHtcclxuICAgICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBoZWxwZXIuaW5uZXJUZXh0ID0gbGV0dGVyO1xyXG4gICAgICBzZXRFbGVtZW50U3R5bGVzKGhlbHBlciwge1xyXG4gICAgICAgIHdpZHRoOiBcIjgwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9KVxyXG4gICAgICBob3Jpem9udGFsSGVscGVycy5hcHBlbmRDaGlsZChoZWxwZXIpO1xyXG4gICAgfSlcclxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKG51bWJlciA9PiB7XHJcbiAgICAgIGNvbnN0IGhlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgaGVscGVyLmlubmVyVGV4dCA9IG51bWJlcjtcclxuICAgICAgc2V0RWxlbWVudFN0eWxlcyhoZWxwZXIsIHtcclxuICAgICAgICBoZWlnaHQ6IFwiODBweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfSlcclxuICAgICAgdmVydGljYWxIZWxwZXJzLmFwcGVuZENoaWxkKGhlbHBlcik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZWxlbWVudC5wcmVwZW5kKGhvcml6b250YWxIZWxwZXJzKTtcclxuICAgIHRoaXMuZWxlbWVudC5wcmVwZW5kKHZlcnRpY2FsSGVscGVycyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IGZpZWxkLnJlbmRlckZpZ3VyZSgpKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBzZXRFbGVtZW50U3R5bGVzID0gKGVsZW1lbnQsIHN0eWxlcykgPT4ge1xyXG4gIGZvciAobGV0IHByb3BlcnR5IGluIHN0eWxlcykge1xyXG4gICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBzdHlsZXNbcHJvcGVydHldO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgUExBWUVSX1RZUEUgPSB7XHJcbiAgcGxheWVyOiBcInBsYXllclwiLFxyXG4gIHBjOiBcInBjXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRFQU1fRElSRUNUSU9OID0ge1xyXG4gIHRvcDogXCJ0b3BcIixcclxuICBib3R0b206IFwiYm90dG9tXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRFQU1fQ09MT1IgPSB7XHJcbiAgd2hpdGU6IFwid2hpdGVcIixcclxuICBibGFjazogXCJibGFja1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEVTU19GSUdVUkVTX0lNRyA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2IyL0NoZXNzX1BpZWNlc19TcHJpdGUuc3ZnXCI7XHJcbiIsImltcG9ydCB7c2V0RWxlbWVudFN0eWxlc30gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7Q0hFU1NfRklHVVJFU19JTUd9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQge1xyXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2FsUG9zaXRpb24sIGhvcml6b250YWxQb3NpdGlvbiwgYm9hcmQpIHtcclxuICAgIHRoaXMuaFBvcyA9IGhvcml6b250YWxQb3NpdGlvbjtcclxuICAgIHRoaXMudlBvcyA9IHZlcnRpY2FsUG9zaXRpb247XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICB0aGlzLmZpZ3VyZSA9IG51bGw7XHJcbiAgICAvLyB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5oUG9zICsgXCIgXCIgKyB0aGlzLnZQb3M7XHJcbiAgICB0aGlzLmNyZWF0ZVN0eWxlcygpO1xyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVN0eWxlcygpIHtcclxuICAgIHNldEVsZW1lbnRTdHlsZXModGhpcy5lbGVtZW50LCB7XHJcbiAgICAgIHdpZHRoOiBcIjgwcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcclxuICAgICAgZmxleDogXCIwIDAgODBweFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNDM0MzQzXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlndXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZmlndXJlKSB7XHJcbiAgICAgIHNldEVsZW1lbnRTdHlsZXModGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Q0hFU1NfRklHVVJFU19JTUd9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI1NTAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmZpZ3VyZS5iYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpc2hvcCBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwbGF5ZXIpIHtcclxuICAgIHN1cGVyKHBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgdGhpcy5maWd1cmVJZCA9IFwicm9va1wiO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGF5ZXIudGVhbUNvbG9yID09PSBURUFNX0NPTE9SLndoaXRlID8gXCIzOS41JSAtMSVcIiA6IFwiMzkuNSUgMTEwJVwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhcnRQb3NpdGlvbiwgcGxheWVyKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICB9XHJcblxyXG4gIG1vdmUocG9zaXRpb24pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBGaWd1cmUgZnJvbSBcIi4vRmlndXJlXCI7XHJcbmltcG9ydCB7VEVBTV9DT0xPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2luZyBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwbGF5ZXIpIHtcclxuICAgIHN1cGVyKHBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgdGhpcy5maWd1cmVJZCA9IFwicm9va1wiO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGF5ZXIudGVhbUNvbG9yID09PSBURUFNX0NPTE9SLndoaXRlID8gXCItMSUgLTElXCIgOiBcIi0xJSAxMTAlXCI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1IsIFRFQU1fRElSRUNUSU9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHQgZXh0ZW5kcyBGaWd1cmUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcGxheWVyKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbiwgcGxheWVyKTtcclxuICAgIHRoaXMuZmlndXJlSWQgPSBcImtuaWdodFwiO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGF5ZXIudGVhbUNvbG9yID09PSBURUFNX0NPTE9SLndoaXRlID8gXCI2MCUgMCVcIiA6IFwiNjAlIDExMSVcIjtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9yQXZhaWxhYmxlTW92ZVBvc2l0aW9ucygpIHtcclxuICAgIGxldCBhdmFpbGFibGVNb3ZlcyA9IFtdO1xyXG4gICAgaWYgKHRoaXMudGVhbURpcmVjdGlvbiA9PT0gVEVBTV9ESVJFQ1RJT04udG9wKSB7XHJcbiAgICAgIC8vIGlmICgpIHtcclxuICAgICAgLy9cclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5oID09PSB0aGlzLnN0YXJ0UG9zaXRpb24uaCAmJiB0aGlzLnN0YXJ0UG9zaXRpb24udiA9PT0gdGhpcy5zdGFydFBvc2l0aW9uLnYpIHtcclxuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1IsIFRFQU1fRElSRUNUSU9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBsYXllcikge1xyXG4gICAgc3VwZXIocG9zaXRpb24sIHBsYXllcik7XHJcbiAgICB0aGlzLmZpZ3VyZUlkID0gXCJwYXduXCI7XHJcbiAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9IHBsYXllci50ZWFtQ29sb3IgPT09IFRFQU1fQ09MT1Iud2hpdGUgPyBcIjEwMC4yNSUgMiVcIiA6IFwiMTAwLjI1JSAxMTIlXCI7XHJcbiAgfVxyXG5cclxuICBjaGVja0ZvckF2YWlsYWJsZU1vdmVQb3NpdGlvbnMoKSB7XHJcbiAgICBsZXQgYXZhaWxhYmxlTW92ZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnRlYW1EaXJlY3Rpb24gPT09IFRFQU1fRElSRUNUSU9OLnRvcCkge1xyXG4gICAgICAvLyBpZiAoKSB7XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKHRoaXMucG9zaXRpb24uaCA9PT0gdGhpcy5zdGFydFBvc2l0aW9uLmggJiYgdGhpcy5zdGFydFBvc2l0aW9uLnYgPT09IHRoaXMuc3RhcnRQb3NpdGlvbi52KSB7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi9GaWd1cmVcIjtcclxuaW1wb3J0IHtURUFNX0NPTE9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVlbiBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwbGF5ZXIpIHtcclxuICAgIHN1cGVyKHBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgdGhpcy5maWd1cmVJZCA9IFwicXVlZW5cIjtcclxuICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gcGxheWVyLnRlYW1Db2xvciA9PT0gVEVBTV9DT0xPUi53aGl0ZSA/IFwiMTklIC0xJVwiIDogXCIxOSUgMTEwJVwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi9GaWd1cmVcIjtcclxuaW1wb3J0IHtURUFNX0NPTE9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29rIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBsYXllcikge1xyXG4gICAgc3VwZXIocG9zaXRpb24sIHBsYXllcik7XHJcbiAgICB0aGlzLmZpZ3VyZUlkID0gXCJyb29rXCI7XHJcbiAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9IHBsYXllci50ZWFtQ29sb3IgPT09IFRFQU1fQ09MT1Iud2hpdGUgPyBcIjgwJSAwJVwiIDogXCI4MCUgMTExJVwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCB7c2V0RWxlbWVudFN0eWxlc30gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7UExBWUVSX1RZUEUsIFRFQU1fQ09MT1IsIFRFQU1fRElSRUNUSU9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHNldFN0YXJ0RmlndXJlcyBmcm9tIFwiLi9zdGFydEZpZ3VyZXNcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBwbHlCYXNlU3R5bGVzKCk7XHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMucGxheWVycyA9IFtcclxuICAgICAgbmV3IFBsYXllcihQTEFZRVJfVFlQRS5wbGF5ZXIsIFRFQU1fRElSRUNUSU9OLnRvcCwgVEVBTV9DT0xPUi53aGl0ZSksXHJcbiAgICAgIG5ldyBQbGF5ZXIoUExBWUVSX1RZUEUucGMsIFRFQU1fRElSRUNUSU9OLmJvdHRvbSwgVEVBTV9DT0xPUi5ibGFjaylcclxuICAgIF07XHJcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XHJcbiAgICBzZXRTdGFydEZpZ3VyZXModGhpcy5ib2FyZCwgdGhpcy5wbGF5ZXJzKTtcclxuICAgIHRoaXMuYm9hcmQucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBhcHBseUJhc2VTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB9KVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyhkb2N1bWVudC5ib2R5LCB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXJUeXBlLCB0ZWFtRGlyZWN0aW9uLCB0ZWFtQ29sb3IpIHtcclxuICAgIHRoaXMucGxheWVyVHlwZSA9IHBsYXllclR5cGU7XHJcbiAgICB0aGlzLnRlYW1EaXJlY3Rpb24gPSB0ZWFtRGlyZWN0aW9uO1xyXG4gICAgdGhpcy50ZWFtQ29sb3IgPSB0ZWFtQ29sb3I7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1RFQU1fRElSRUNUSU9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFBhd24gZnJvbSBcIi4vZmlndXJlcy9QYXduXCI7XHJcbmltcG9ydCBSb29rIGZyb20gXCIuL2ZpZ3VyZXMvUm9va1wiO1xyXG5pbXBvcnQgS25pZ2h0IGZyb20gXCIuL2ZpZ3VyZXMvS25pZ2h0XCI7XHJcbmltcG9ydCBCaXNob3AgZnJvbSBcIi4vZmlndXJlcy9CaXNob3BcIjtcclxuaW1wb3J0IFF1ZWVuIGZyb20gXCIuL2ZpZ3VyZXMvUXVlZW5cIjtcclxuaW1wb3J0IEtpbmcgZnJvbSBcIi4vZmlndXJlcy9LaW5nXCI7XHJcblxyXG5jb25zdCBzZXRTdGFydEZpZ3VyZXMgPSAoYm9hcmQsIHBsYXllcnMpID0+IHtcclxuICBwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgIGNvbnN0IHBhd25WZXJ0aWNhbExpbmUgPSAocGxheWVyLnRlYW1EaXJlY3Rpb24gPT09IFRFQU1fRElSRUNUSU9OLnRvcCkgPyAyIDogNztcclxuICAgIGNvbnN0IG1haW5WZXJ0aWNhbExpbmUgPSAocGxheWVyLnRlYW1EaXJlY3Rpb24gPT09IFRFQU1fRElSRUNUSU9OLnRvcCkgPyAxIDogODtcclxuICAgIGJvYXJkLmhvcml6b250YWxMaW5lcy5mb3JFYWNoKGxldHRlciA9PiB7XHJcbiAgICAgIC8qKiBQQVdOUyAqKi9cclxuICAgICAgY29uc3QgcGF3bkZpZWxkID0gYm9hcmQuZmllbGRzLmZpbmQoZmllbGQgPT4gZmllbGQuaFBvcyA9PT0gbGV0dGVyICYmIGZpZWxkLnZQb3MgPT09IHBhd25WZXJ0aWNhbExpbmUpO1xyXG4gICAgICBjb25zdCBzdGFydFBhd25Qb3NpdGlvbiA9IHtoUG9zOiBsZXR0ZXIsIHZQb3M6IHBhd25WZXJ0aWNhbExpbmV9O1xyXG4gICAgICBwYXduRmllbGQuZmlndXJlID0gbmV3IFBhd24oc3RhcnRQYXduUG9zaXRpb24sIHBsYXllcik7XHJcbiAgICAgIC8qKiBPVEhFUiAqKi9cclxuICAgICAgY29uc3QgZmllbGQgPSBib2FyZC5maWVsZHMuZmluZChmaWVsZCA9PiBmaWVsZC5oUG9zID09PSBsZXR0ZXIgJiYgZmllbGQudlBvcyA9PT0gbWFpblZlcnRpY2FsTGluZSk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB7aFBvczogbGV0dGVyLCB2UG9zOiBtYWluVmVydGljYWxMaW5lfTtcclxuICAgICAgc3dpdGNoIChsZXR0ZXIpIHtcclxuICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgIGNhc2UgXCJoXCI6XHJcbiAgICAgICAgICBmaWVsZC5maWd1cmUgPSBuZXcgUm9vayhzdGFydFBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJcIjpcclxuICAgICAgICBjYXNlIFwiZ1wiOlxyXG4gICAgICAgICAgZmllbGQuZmlndXJlID0gbmV3IEtuaWdodChzdGFydFBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNcIjpcclxuICAgICAgICBjYXNlIFwiZlwiOlxyXG4gICAgICAgICAgZmllbGQuZmlndXJlID0gbmV3IEJpc2hvcChzdGFydFBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRcIjpcclxuICAgICAgICAgIGZpZWxkLmZpZ3VyZSA9IG5ldyBRdWVlbihzdGFydFBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImVcIjpcclxuICAgICAgICAgIGZpZWxkLmZpZ3VyZSA9IG5ldyBLaW5nKHN0YXJ0UG9zaXRpb24sIHBsYXllcik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U3RhcnRGaWd1cmVzXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxubmV3IEdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9