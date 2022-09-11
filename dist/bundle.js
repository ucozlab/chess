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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




class Board {
  constructor(game) {
    this.game = game;
    this.horizontalLines = _constants__WEBPACK_IMPORTED_MODULE_2__.HORIZONTAL_LINES;
    this.verticalLines = _constants__WEBPACK_IMPORTED_MODULE_2__.VERTICAL_LINES;
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
        const field = new _field__WEBPACK_IMPORTED_MODULE_0__["default"](this.verticalLines[i], this.horizontalLines[j], this);
        field.renderBackground();
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
    this.fields.forEach(field => {
      field.renderFigure();
      field.renderBackground();
      field.setCursor();
    })
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
/* harmony export */   "HORIZONTAL_LINES": () => (/* binding */ HORIZONTAL_LINES),
/* harmony export */   "HORIZONTAL_NUMBERS": () => (/* binding */ HORIZONTAL_NUMBERS),
/* harmony export */   "PLAYER_TYPE": () => (/* binding */ PLAYER_TYPE),
/* harmony export */   "TEAM_COLOR": () => (/* binding */ TEAM_COLOR),
/* harmony export */   "TEAM_DIRECTION": () => (/* binding */ TEAM_DIRECTION),
/* harmony export */   "VERTICAL_LINES": () => (/* binding */ VERTICAL_LINES)
/* harmony export */ });
const HORIZONTAL_LINES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const VERTICAL_LINES = [8, 7, 6, 5, 4, 3, 2, 1];
const HORIZONTAL_NUMBERS = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
};

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
    this.board = board;
    this.hPos = horizontalPosition;
    this.vPos = verticalPosition;
    this.element = document.createElement("li");
    this.element.addEventListener("click", this.fieldClick.bind(this))
    this.figure = null;
    this.isActive = false;
    this.isPossibleMove = false;
    // this.element.innerText = this.hPos + " " + this.vPos;
    this.createStyles();
    board.element.appendChild(this.element);
  }

  fieldClick() {
    if (this.figure && this.board.game.playerMove === this.figure.player.teamColor) {
      this.board.fields.forEach(field => {
        field.isActive = this.hPos === field.hPos && this.vPos === field.vPos;
        field.isPossibleMove = !field.isActive && this.figure.isAvailableMove(field);
      });
      this.board.render();
    } else if (this.isPossibleMove) {
      const activeField = this.board.fields.find(field => field.isActive);
      activeField.figure.move(this);
      activeField.isActive = false;
      activeField.figure = null;
      this.board.fields.forEach(field => {
        if (field.isPossibleMove) {
          field.isPossibleMove = false;
        }
      });
      this.board.game.playerMove = this.board.game.playerMove === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white ? _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.black : _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_COLOR.white;
      this.board.render();
    }
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
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.setElementStyles)(this.element, {
      backgroundImage: this.figure ? `url(${_constants__WEBPACK_IMPORTED_MODULE_1__.CHESS_FIGURES_IMG})` : "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "550%",
      backgroundPosition: this.figure ? this.figure.backgroundPosition : "",
    })
  }

  renderBackground() {
    const backgroundColor = this.isActive
      ? "#8EE600"
      : this.isPossibleMove
        ? this.figure ? "#FF9A9A" : "#e0f9b8"
        : this.vPos % 2 === 0 && _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos] % 2 === 1 || this.vPos % 2 === 1 && _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos] % 2 === 0
          ? "#c7c7c7"
          : "#ffffff";
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.setElementStyles)(this.element, {
      backgroundColor,
    });
  }

  setCursor() {
    const cursor = (this.isPossibleMove || (this.figure && (this.figure.player.teamColor === this.board.game.playerMove)))
      ? "pointer"
      : "default";
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.setElementStyles)(this.element, {
      cursor,
    });
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
    this.hPos = startPosition.hPos;
    this.vPos = startPosition.vPos;
    this.startPosition = startPosition;
    this.player = player;
  }

  move(field) {
    this.hPos = field.hPos;
    this.vPos = field.vPos;
    field.figure = this;
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

  isAvailableMove(field) {
    if (field.hPos !== this.hPos) {
      if (!field.figure) {
        return false
      }
      if (this.player.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_DIRECTION.top) {
        if (field.vPos - 1 !== this.vPos) {
          return false
        }
        return _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[field.hPos] - 1 === _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos] || (_constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[field.hPos] + 1 === _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos])
      } else {
        if (field.vPos + 1 !== this.vPos) {
          return false
        }
        return _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos] - 1 === _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[field.hPos] || (_constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[this.hPos] + 1 === _constants__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_NUMBERS[field.hPos])
      }
    }
    if (field.figure) {
      return false
    }
    if (this.player.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_DIRECTION.top) {
      return ((field.vPos - this.vPos) === 1) || (this.vPos === this.startPosition.vPos && ((field.vPos - this.vPos) === 2))
    } else {
      return ((this.vPos - field.vPos) === 1) || (this.vPos === this.startPosition.vPos && ((this.vPos - field.vPos) === 2))
    }
  }

  checkForAvailableMovePositions() {
    let availableMoves = [];
    if (this.player.teamDirection === _constants__WEBPACK_IMPORTED_MODULE_1__.TEAM_DIRECTION.top) {
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
    this.playerMove = _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLOR.white;
    this.applyBaseStyles();
    this.start();
  }

  start() {
    this.players = [
      new _player__WEBPACK_IMPORTED_MODULE_4__["default"](_constants__WEBPACK_IMPORTED_MODULE_2__.PLAYER_TYPE.player, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_DIRECTION.top, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLOR.white),
      new _player__WEBPACK_IMPORTED_MODULE_4__["default"](_constants__WEBPACK_IMPORTED_MODULE_2__.PLAYER_TYPE.pc, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_DIRECTION.bottom, _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLOR.black)
    ];
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25DO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBTTtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLHNEQUFLO0FBQ2xDO0FBQ0E7QUFDQSw2QkFBNkIscURBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7O1VDOUM5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQzFCO0FBQ0EsSUFBSSw2Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZXNzLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZmlndXJlcy9CaXNob3AuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZmlndXJlcy9GaWd1cmUuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvZmlndXJlcy9LaW5nLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvS25pZ2h0LmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvUGF3bi5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9maWd1cmVzL1F1ZWVuLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZ3VyZXMvUm9vay5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9zdGFydEZpZ3VyZXMuanMiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9jaGVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSBcIi4vZmllbGRcIjtcclxuaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHtIT1JJWk9OVEFMX0xJTkVTLCBWRVJUSUNBTF9MSU5FU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuaG9yaXpvbnRhbExpbmVzID0gSE9SSVpPTlRBTF9MSU5FUztcclxuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IFZFUlRJQ0FMX0xJTkVTO1xyXG4gICAgdGhpcy5maWVsZHMgPSBbXTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmNyZWF0ZUh0bWxCb2FyZCgpO1xyXG4gICAgdGhpcy5jcmVhdGVCb2FyZEhlbHBlcnMoKTtcclxuICAgIHRoaXMuY3JlYXRlQm9hcmRGaWVsZHMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9hcmQgaW5pdGlhbGl6ZWQgNDU2XCIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSHRtbEJvYXJkKCkge1xyXG4gICAgbGV0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgaWYgKCFhcHApIHtcclxuICAgICAgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgYXBwLmlkID0gXCJhcHBcIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xyXG4gICAgfVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyhhcHAsIHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0aGlzLmVsZW1lbnQuaWQgPSBcImJvYXJkXCI7XHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlQm9hcmRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkRmllbGRzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2FsTGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhvcml6b250YWxMaW5lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gbmV3IEZpZWxkKHRoaXMudmVydGljYWxMaW5lc1tpXSwgdGhpcy5ob3Jpem9udGFsTGluZXNbal0sIHRoaXMpO1xyXG4gICAgICAgIGZpZWxkLnJlbmRlckJhY2tncm91bmQoKTtcclxuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCI2NDRweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNjQ0cHhcIixcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZEhlbHBlcnMoKSB7XHJcbiAgICBjb25zdCBob3Jpem9udGFsSGVscGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IHZlcnRpY2FsSGVscGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHNldEVsZW1lbnRTdHlsZXMoaG9yaXpvbnRhbEhlbHBlcnMsIHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiBcIi0yNHB4XCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9KVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh2ZXJ0aWNhbEhlbHBlcnMsIHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBcIi0yNHB4XCIsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5ob3Jpem9udGFsTGluZXMuZm9yRWFjaChsZXR0ZXIgPT4ge1xyXG4gICAgICBjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGhlbHBlci5pbm5lclRleHQgPSBsZXR0ZXI7XHJcbiAgICAgIHNldEVsZW1lbnRTdHlsZXMoaGVscGVyLCB7XHJcbiAgICAgICAgd2lkdGg6IFwiODBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIGhvcml6b250YWxIZWxwZXJzLmFwcGVuZENoaWxkKGhlbHBlcik7XHJcbiAgICB9KVxyXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2gobnVtYmVyID0+IHtcclxuICAgICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBoZWxwZXIuaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgICBzZXRFbGVtZW50U3R5bGVzKGhlbHBlciwge1xyXG4gICAgICAgIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjRweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9KVxyXG4gICAgICB2ZXJ0aWNhbEhlbHBlcnMuYXBwZW5kQ2hpbGQoaGVscGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbGVtZW50LnByZXBlbmQoaG9yaXpvbnRhbEhlbHBlcnMpO1xyXG4gICAgdGhpcy5lbGVtZW50LnByZXBlbmQodmVydGljYWxIZWxwZXJzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBmaWVsZC5yZW5kZXJGaWd1cmUoKTtcclxuICAgICAgZmllbGQucmVuZGVyQmFja2dyb3VuZCgpO1xyXG4gICAgICBmaWVsZC5zZXRDdXJzb3IoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IHNldEVsZW1lbnRTdHlsZXMgPSAoZWxlbWVudCwgc3R5bGVzKSA9PiB7XHJcbiAgZm9yIChsZXQgcHJvcGVydHkgaW4gc3R5bGVzKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX0xJTkVTID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIl07XHJcbmV4cG9ydCBjb25zdCBWRVJUSUNBTF9MSU5FUyA9IFs4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcclxuZXhwb3J0IGNvbnN0IEhPUklaT05UQUxfTlVNQkVSUyA9IHtcclxuICBcImFcIjogMSxcclxuICBcImJcIjogMixcclxuICBcImNcIjogMyxcclxuICBcImRcIjogNCxcclxuICBcImVcIjogNSxcclxuICBcImZcIjogNixcclxuICBcImdcIjogNyxcclxuICBcImhcIjogOCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfVFlQRSA9IHtcclxuICBwbGF5ZXI6IFwicGxheWVyXCIsXHJcbiAgcGM6IFwicGNcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVEVBTV9ESVJFQ1RJT04gPSB7XHJcbiAgdG9wOiBcInRvcFwiLFxyXG4gIGJvdHRvbTogXCJib3R0b21cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVEVBTV9DT0xPUiA9IHtcclxuICB3aGl0ZTogXCJ3aGl0ZVwiLFxyXG4gIGJsYWNrOiBcImJsYWNrXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIRVNTX0ZJR1VSRVNfSU1HID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2IvYjIvQ2hlc3NfUGllY2VzX1Nwcml0ZS5zdmdcIjtcclxuIiwiaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHtDSEVTU19GSUdVUkVTX0lNRywgSE9SSVpPTlRBTF9OVU1CRVJTLCBURUFNX0NPTE9SfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHtcclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNhbFBvc2l0aW9uLCBob3Jpem9udGFsUG9zaXRpb24sIGJvYXJkKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmhQb3MgPSBob3Jpem9udGFsUG9zaXRpb247XHJcbiAgICB0aGlzLnZQb3MgPSB2ZXJ0aWNhbFBvc2l0aW9uO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmZpZWxkQ2xpY2suYmluZCh0aGlzKSlcclxuICAgIHRoaXMuZmlndXJlID0gbnVsbDtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNQb3NzaWJsZU1vdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmhQb3MgKyBcIiBcIiArIHRoaXMudlBvcztcclxuICAgIHRoaXMuY3JlYXRlU3R5bGVzKCk7XHJcbiAgICBib2FyZC5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmaWVsZENsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuZmlndXJlICYmIHRoaXMuYm9hcmQuZ2FtZS5wbGF5ZXJNb3ZlID09PSB0aGlzLmZpZ3VyZS5wbGF5ZXIudGVhbUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYm9hcmQuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGZpZWxkLmlzQWN0aXZlID0gdGhpcy5oUG9zID09PSBmaWVsZC5oUG9zICYmIHRoaXMudlBvcyA9PT0gZmllbGQudlBvcztcclxuICAgICAgICBmaWVsZC5pc1Bvc3NpYmxlTW92ZSA9ICFmaWVsZC5pc0FjdGl2ZSAmJiB0aGlzLmZpZ3VyZS5pc0F2YWlsYWJsZU1vdmUoZmllbGQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5ib2FyZC5yZW5kZXIoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Bvc3NpYmxlTW92ZSkge1xyXG4gICAgICBjb25zdCBhY3RpdmVGaWVsZCA9IHRoaXMuYm9hcmQuZmllbGRzLmZpbmQoZmllbGQgPT4gZmllbGQuaXNBY3RpdmUpO1xyXG4gICAgICBhY3RpdmVGaWVsZC5maWd1cmUubW92ZSh0aGlzKTtcclxuICAgICAgYWN0aXZlRmllbGQuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgYWN0aXZlRmllbGQuZmlndXJlID0gbnVsbDtcclxuICAgICAgdGhpcy5ib2FyZC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmlzUG9zc2libGVNb3ZlKSB7XHJcbiAgICAgICAgICBmaWVsZC5pc1Bvc3NpYmxlTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYm9hcmQuZ2FtZS5wbGF5ZXJNb3ZlID0gdGhpcy5ib2FyZC5nYW1lLnBsYXllck1vdmUgPT09IFRFQU1fQ09MT1Iud2hpdGUgPyBURUFNX0NPTE9SLmJsYWNrIDogVEVBTV9DT0xPUi53aGl0ZTtcclxuICAgICAgdGhpcy5ib2FyZC5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVN0eWxlcygpIHtcclxuICAgIHNldEVsZW1lbnRTdHlsZXModGhpcy5lbGVtZW50LCB7XHJcbiAgICAgIHdpZHRoOiBcIjgwcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcclxuICAgICAgZmxleDogXCIwIDAgODBweFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNDM0MzQzXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlndXJlKCkge1xyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiB0aGlzLmZpZ3VyZSA/IGB1cmwoJHtDSEVTU19GSUdVUkVTX0lNR30pYCA6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcIjU1MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmZpZ3VyZSA/IHRoaXMuZmlndXJlLmJhY2tncm91bmRQb3NpdGlvbiA6IFwiXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHRoaXMuaXNBY3RpdmVcclxuICAgICAgPyBcIiM4RUU2MDBcIlxyXG4gICAgICA6IHRoaXMuaXNQb3NzaWJsZU1vdmVcclxuICAgICAgICA/IHRoaXMuZmlndXJlID8gXCIjRkY5QTlBXCIgOiBcIiNlMGY5YjhcIlxyXG4gICAgICAgIDogdGhpcy52UG9zICUgMiA9PT0gMCAmJiBIT1JJWk9OVEFMX05VTUJFUlNbdGhpcy5oUG9zXSAlIDIgPT09IDEgfHwgdGhpcy52UG9zICUgMiA9PT0gMSAmJiBIT1JJWk9OVEFMX05VTUJFUlNbdGhpcy5oUG9zXSAlIDIgPT09IDBcclxuICAgICAgICAgID8gXCIjYzdjN2M3XCJcclxuICAgICAgICAgIDogXCIjZmZmZmZmXCI7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEN1cnNvcigpIHtcclxuICAgIGNvbnN0IGN1cnNvciA9ICh0aGlzLmlzUG9zc2libGVNb3ZlIHx8ICh0aGlzLmZpZ3VyZSAmJiAodGhpcy5maWd1cmUucGxheWVyLnRlYW1Db2xvciA9PT0gdGhpcy5ib2FyZC5nYW1lLnBsYXllck1vdmUpKSlcclxuICAgICAgPyBcInBvaW50ZXJcIlxyXG4gICAgICA6IFwiZGVmYXVsdFwiO1xyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgY3Vyc29yLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpc2hvcCBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwbGF5ZXIpIHtcclxuICAgIHN1cGVyKHBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgdGhpcy5maWd1cmVJZCA9IFwicm9va1wiO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGF5ZXIudGVhbUNvbG9yID09PSBURUFNX0NPTE9SLndoaXRlID8gXCIzOS41JSAtMSVcIiA6IFwiMzkuNSUgMTEwJVwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhcnRQb3NpdGlvbiwgcGxheWVyKSB7XHJcbiAgICB0aGlzLmhQb3MgPSBzdGFydFBvc2l0aW9uLmhQb3M7XHJcbiAgICB0aGlzLnZQb3MgPSBzdGFydFBvc2l0aW9uLnZQb3M7XHJcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGZpZWxkKSB7XHJcbiAgICB0aGlzLmhQb3MgPSBmaWVsZC5oUG9zO1xyXG4gICAgdGhpcy52UG9zID0gZmllbGQudlBvcztcclxuICAgIGZpZWxkLmZpZ3VyZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbmcgZXh0ZW5kcyBGaWd1cmUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcGxheWVyKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbiwgcGxheWVyKTtcclxuICAgIHRoaXMuZmlndXJlSWQgPSBcInJvb2tcIjtcclxuICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gcGxheWVyLnRlYW1Db2xvciA9PT0gVEVBTV9DT0xPUi53aGl0ZSA/IFwiLTElIC0xJVwiIDogXCItMSUgMTEwJVwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi9GaWd1cmVcIjtcclxuaW1wb3J0IHtURUFNX0NPTE9SLCBURUFNX0RJUkVDVElPTn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0IGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBsYXllcikge1xyXG4gICAgc3VwZXIocG9zaXRpb24sIHBsYXllcik7XHJcbiAgICB0aGlzLmZpZ3VyZUlkID0gXCJrbmlnaHRcIjtcclxuICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gcGxheWVyLnRlYW1Db2xvciA9PT0gVEVBTV9DT0xPUi53aGl0ZSA/IFwiNjAlIDAlXCIgOiBcIjYwJSAxMTElXCI7XHJcbiAgfVxyXG5cclxuICBjaGVja0ZvckF2YWlsYWJsZU1vdmVQb3NpdGlvbnMoKSB7XHJcbiAgICBsZXQgYXZhaWxhYmxlTW92ZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnRlYW1EaXJlY3Rpb24gPT09IFRFQU1fRElSRUNUSU9OLnRvcCkge1xyXG4gICAgICAvLyBpZiAoKSB7XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKHRoaXMucG9zaXRpb24uaCA9PT0gdGhpcy5zdGFydFBvc2l0aW9uLmggJiYgdGhpcy5zdGFydFBvc2l0aW9uLnYgPT09IHRoaXMuc3RhcnRQb3NpdGlvbi52KSB7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEZpZ3VyZSBmcm9tIFwiLi9GaWd1cmVcIjtcclxuaW1wb3J0IHtIT1JJWk9OVEFMX05VTUJFUlMsIFRFQU1fQ09MT1IsIFRFQU1fRElSRUNUSU9OfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBsYXllcikge1xyXG4gICAgc3VwZXIocG9zaXRpb24sIHBsYXllcik7XHJcbiAgICB0aGlzLmZpZ3VyZUlkID0gXCJwYXduXCI7XHJcbiAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9IHBsYXllci50ZWFtQ29sb3IgPT09IFRFQU1fQ09MT1Iud2hpdGUgPyBcIjEwMC4yNSUgMiVcIiA6IFwiMTAwLjI1JSAxMTIlXCI7XHJcbiAgfVxyXG5cclxuICBpc0F2YWlsYWJsZU1vdmUoZmllbGQpIHtcclxuICAgIGlmIChmaWVsZC5oUG9zICE9PSB0aGlzLmhQb3MpIHtcclxuICAgICAgaWYgKCFmaWVsZC5maWd1cmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIudGVhbURpcmVjdGlvbiA9PT0gVEVBTV9ESVJFQ1RJT04udG9wKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLnZQb3MgLSAxICE9PSB0aGlzLnZQb3MpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSE9SSVpPTlRBTF9OVU1CRVJTW2ZpZWxkLmhQb3NdIC0gMSA9PT0gSE9SSVpPTlRBTF9OVU1CRVJTW3RoaXMuaFBvc10gfHwgKEhPUklaT05UQUxfTlVNQkVSU1tmaWVsZC5oUG9zXSArIDEgPT09IEhPUklaT05UQUxfTlVNQkVSU1t0aGlzLmhQb3NdKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChmaWVsZC52UG9zICsgMSAhPT0gdGhpcy52UG9zKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEhPUklaT05UQUxfTlVNQkVSU1t0aGlzLmhQb3NdIC0gMSA9PT0gSE9SSVpPTlRBTF9OVU1CRVJTW2ZpZWxkLmhQb3NdIHx8IChIT1JJWk9OVEFMX05VTUJFUlNbdGhpcy5oUG9zXSArIDEgPT09IEhPUklaT05UQUxfTlVNQkVSU1tmaWVsZC5oUG9zXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkLmZpZ3VyZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBsYXllci50ZWFtRGlyZWN0aW9uID09PSBURUFNX0RJUkVDVElPTi50b3ApIHtcclxuICAgICAgcmV0dXJuICgoZmllbGQudlBvcyAtIHRoaXMudlBvcykgPT09IDEpIHx8ICh0aGlzLnZQb3MgPT09IHRoaXMuc3RhcnRQb3NpdGlvbi52UG9zICYmICgoZmllbGQudlBvcyAtIHRoaXMudlBvcykgPT09IDIpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICgodGhpcy52UG9zIC0gZmllbGQudlBvcykgPT09IDEpIHx8ICh0aGlzLnZQb3MgPT09IHRoaXMuc3RhcnRQb3NpdGlvbi52UG9zICYmICgodGhpcy52UG9zIC0gZmllbGQudlBvcykgPT09IDIpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JBdmFpbGFibGVNb3ZlUG9zaXRpb25zKCkge1xyXG4gICAgbGV0IGF2YWlsYWJsZU1vdmVzID0gW107XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIudGVhbURpcmVjdGlvbiA9PT0gVEVBTV9ESVJFQ1RJT04udG9wKSB7XHJcbiAgICAgIC8vIGlmICgpIHtcclxuICAgICAgLy9cclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5oID09PSB0aGlzLnN0YXJ0UG9zaXRpb24uaCAmJiB0aGlzLnN0YXJ0UG9zaXRpb24udiA9PT0gdGhpcy5zdGFydFBvc2l0aW9uLnYpIHtcclxuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZWVuIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBsYXllcikge1xyXG4gICAgc3VwZXIocG9zaXRpb24sIHBsYXllcik7XHJcbiAgICB0aGlzLmZpZ3VyZUlkID0gXCJxdWVlblwiO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGF5ZXIudGVhbUNvbG9yID09PSBURUFNX0NPTE9SLndoaXRlID8gXCIxOSUgLTElXCIgOiBcIjE5JSAxMTAlXCI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xyXG5pbXBvcnQge1RFQU1fQ09MT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb2sgZXh0ZW5kcyBGaWd1cmUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcGxheWVyKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbiwgcGxheWVyKTtcclxuICAgIHRoaXMuZmlndXJlSWQgPSBcInJvb2tcIjtcclxuICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gcGxheWVyLnRlYW1Db2xvciA9PT0gVEVBTV9DT0xPUi53aGl0ZSA/IFwiODAlIDAlXCIgOiBcIjgwJSAxMTElXCI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcclxuaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHtQTEFZRVJfVFlQRSwgVEVBTV9DT0xPUiwgVEVBTV9ESVJFQ1RJT059IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc2V0U3RhcnRGaWd1cmVzIGZyb20gXCIuL3N0YXJ0RmlndXJlc1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJNb3ZlID0gVEVBTV9DT0xPUi53aGl0ZTtcclxuICAgIHRoaXMuYXBwbHlCYXNlU3R5bGVzKCk7XHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMucGxheWVycyA9IFtcclxuICAgICAgbmV3IFBsYXllcihQTEFZRVJfVFlQRS5wbGF5ZXIsIFRFQU1fRElSRUNUSU9OLnRvcCwgVEVBTV9DT0xPUi53aGl0ZSksXHJcbiAgICAgIG5ldyBQbGF5ZXIoUExBWUVSX1RZUEUucGMsIFRFQU1fRElSRUNUSU9OLmJvdHRvbSwgVEVBTV9DT0xPUi5ibGFjaylcclxuICAgIF07XHJcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMpO1xyXG4gICAgc2V0U3RhcnRGaWd1cmVzKHRoaXMuYm9hcmQsIHRoaXMucGxheWVycyk7XHJcbiAgICB0aGlzLmJvYXJkLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlCYXNlU3R5bGVzKCkge1xyXG4gICAgc2V0RWxlbWVudFN0eWxlcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgfSlcclxuICAgIHNldEVsZW1lbnRTdHlsZXMoZG9jdW1lbnQuYm9keSwge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocGxheWVyVHlwZSwgdGVhbURpcmVjdGlvbiwgdGVhbUNvbG9yKSB7XHJcbiAgICB0aGlzLnBsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xyXG4gICAgdGhpcy50ZWFtRGlyZWN0aW9uID0gdGVhbURpcmVjdGlvbjtcclxuICAgIHRoaXMudGVhbUNvbG9yID0gdGVhbUNvbG9yO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtURUFNX0RJUkVDVElPTn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBQYXduIGZyb20gXCIuL2ZpZ3VyZXMvUGF3blwiO1xyXG5pbXBvcnQgUm9vayBmcm9tIFwiLi9maWd1cmVzL1Jvb2tcIjtcclxuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9maWd1cmVzL0tuaWdodFwiO1xyXG5pbXBvcnQgQmlzaG9wIGZyb20gXCIuL2ZpZ3VyZXMvQmlzaG9wXCI7XHJcbmltcG9ydCBRdWVlbiBmcm9tIFwiLi9maWd1cmVzL1F1ZWVuXCI7XHJcbmltcG9ydCBLaW5nIGZyb20gXCIuL2ZpZ3VyZXMvS2luZ1wiO1xyXG5cclxuY29uc3Qgc2V0U3RhcnRGaWd1cmVzID0gKGJvYXJkLCBwbGF5ZXJzKSA9PiB7XHJcbiAgcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICBjb25zdCBwYXduVmVydGljYWxMaW5lID0gKHBsYXllci50ZWFtRGlyZWN0aW9uID09PSBURUFNX0RJUkVDVElPTi50b3ApID8gMiA6IDc7XHJcbiAgICBjb25zdCBtYWluVmVydGljYWxMaW5lID0gKHBsYXllci50ZWFtRGlyZWN0aW9uID09PSBURUFNX0RJUkVDVElPTi50b3ApID8gMSA6IDg7XHJcbiAgICBib2FyZC5ob3Jpem9udGFsTGluZXMuZm9yRWFjaChsZXR0ZXIgPT4ge1xyXG4gICAgICAvKiogUEFXTlMgKiovXHJcbiAgICAgIGNvbnN0IHBhd25GaWVsZCA9IGJvYXJkLmZpZWxkcy5maW5kKGZpZWxkID0+IGZpZWxkLmhQb3MgPT09IGxldHRlciAmJiBmaWVsZC52UG9zID09PSBwYXduVmVydGljYWxMaW5lKTtcclxuICAgICAgY29uc3Qgc3RhcnRQYXduUG9zaXRpb24gPSB7aFBvczogbGV0dGVyLCB2UG9zOiBwYXduVmVydGljYWxMaW5lfTtcclxuICAgICAgcGF3bkZpZWxkLmZpZ3VyZSA9IG5ldyBQYXduKHN0YXJ0UGF3blBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAvKiogT1RIRVIgKiovXHJcbiAgICAgIGNvbnN0IGZpZWxkID0gYm9hcmQuZmllbGRzLmZpbmQoZmllbGQgPT4gZmllbGQuaFBvcyA9PT0gbGV0dGVyICYmIGZpZWxkLnZQb3MgPT09IG1haW5WZXJ0aWNhbExpbmUpO1xyXG4gICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0ge2hQb3M6IGxldHRlciwgdlBvczogbWFpblZlcnRpY2FsTGluZX07XHJcbiAgICAgIHN3aXRjaCAobGV0dGVyKSB7XHJcbiAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICBjYXNlIFwiaFwiOlxyXG4gICAgICAgICAgZmllbGQuZmlndXJlID0gbmV3IFJvb2soc3RhcnRQb3NpdGlvbiwgcGxheWVyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJiXCI6XHJcbiAgICAgICAgY2FzZSBcImdcIjpcclxuICAgICAgICAgIGZpZWxkLmZpZ3VyZSA9IG5ldyBLbmlnaHQoc3RhcnRQb3NpdGlvbiwgcGxheWVyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgY2FzZSBcImZcIjpcclxuICAgICAgICAgIGZpZWxkLmZpZ3VyZSA9IG5ldyBCaXNob3Aoc3RhcnRQb3NpdGlvbiwgcGxheWVyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkXCI6XHJcbiAgICAgICAgICBmaWVsZC5maWd1cmUgPSBuZXcgUXVlZW4oc3RhcnRQb3NpdGlvbiwgcGxheWVyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlXCI6XHJcbiAgICAgICAgICBmaWVsZC5maWd1cmUgPSBuZXcgS2luZyhzdGFydFBvc2l0aW9uLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFN0YXJ0RmlndXJlc1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbm5ldyBHYW1lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==