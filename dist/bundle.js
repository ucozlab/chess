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
    this.createHtmlBoard();
    console.log("board initialized 456", this);
  }

  createHtmlBoard() {
    this.element = document.getElementById("app");
    if (!this.element) {
      this.element = document.createElement("ul");
      this.element.id = "app";
      document.body.appendChild(this.element);
    }
    this.createBoardStyles();
    for (let i = 0; i < this.verticalLines.length; i++) {
      for (let j = 0; j < this.horizontalLines.length; j++) {
        const field = new _field__WEBPACK_IMPORTED_MODULE_0__["default"](this.verticalLines[i], this.horizontalLines[j], this.element);
        console.log("this", this);
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


class Field {
  constructor(horizontalPosition, verticalPosition, board) {
    this.hPos = horizontalPosition;
    this.vPos = verticalPosition;
    this.element = document.createElement("li");
    this.element.innerText = this.hPos + " " + this.vPos;
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



class Game {

  constructor() {
    this.applyBaseStyles();
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  start() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELHNCQUFzQixpQ0FBaUM7QUFDdkQsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0wwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0QjtBQUNjO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEI7QUFDMUI7QUFDQSxJQUFJLDZDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZWxkLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9jaGVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSBcIi4vZmllbGRcIjtcclxuaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbExpbmVzID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIl07XHJcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xyXG4gICAgdGhpcy5jcmVhdGVIdG1sQm9hcmQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9hcmQgaW5pdGlhbGl6ZWQgNDU2XCIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSHRtbEJvYXJkKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5pZCA9IFwiYXBwXCI7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlQm9hcmRTdHlsZXMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNhbExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ob3Jpem9udGFsTGluZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IG5ldyBGaWVsZCh0aGlzLnZlcnRpY2FsTGluZXNbaV0sIHRoaXMuaG9yaXpvbnRhbExpbmVzW2pdLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCI2NDRweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNjQ0cHhcIixcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IHNldEVsZW1lbnRTdHlsZXMgPSAoZWxlbWVudCwgc3R5bGVzKSA9PiB7XHJcbiAgZm9yIChsZXQgcHJvcGVydHkgaW4gc3R5bGVzKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7c2V0RWxlbWVudFN0eWxlc30gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7XHJcbiAgY29uc3RydWN0b3IoaG9yaXpvbnRhbFBvc2l0aW9uLCB2ZXJ0aWNhbFBvc2l0aW9uLCBib2FyZCkge1xyXG4gICAgdGhpcy5oUG9zID0gaG9yaXpvbnRhbFBvc2l0aW9uO1xyXG4gICAgdGhpcy52UG9zID0gdmVydGljYWxQb3NpdGlvbjtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmhQb3MgKyBcIiBcIiArIHRoaXMudlBvcztcclxuICAgIHRoaXMuY3JlYXRlU3R5bGVzKCk7XHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3R5bGVzKCkge1xyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgd2lkdGg6IFwiODBweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiODBweFwiLFxyXG4gICAgICBmbGV4OiBcIjAgMCA4MHB4XCIsXHJcbiAgICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM0MzQzNDNcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcclxuaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBwbHlCYXNlU3R5bGVzKCk7XHJcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBhcHBseUJhc2VTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB9KVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyhkb2N1bWVudC5ib2R5LCB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbm5ldyBHYW1lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==