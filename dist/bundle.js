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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELHNCQUFzQixpQ0FBaUM7QUFDdkQsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0EsVUFBVSx5REFBZ0I7QUFDMUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDBEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0wwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0QjtBQUNjO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEI7QUFDMUI7QUFDQSxJQUFJLDZDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2ZpZWxkLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9jaGVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSBcIi4vZmllbGRcIjtcclxuaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbExpbmVzID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIl07XHJcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY3JlYXRlSHRtbEJvYXJkKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJvYXJkSGVscGVycygpO1xyXG4gICAgdGhpcy5jcmVhdGVCb2FyZEZpZWxkcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJib2FyZCBpbml0aWFsaXplZCA0NTZcIiwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVIdG1sQm9hcmQoKSB7XHJcbiAgICBsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBhcHAuaWQgPSBcImFwcFwiO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XHJcbiAgICB9XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKGFwcCwge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRoaXMuZWxlbWVudC5pZCA9IFwiYm9hcmRcIjtcclxuICAgIGFwcC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVCb2FyZFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRGaWVsZHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljYWxMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaG9yaXpvbnRhbExpbmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBuZXcgRmllbGQodGhpcy52ZXJ0aWNhbExpbmVzW2ldLCB0aGlzLmhvcml6b250YWxMaW5lc1tqXSwgdGhpcy5lbGVtZW50KTtcclxuICAgICAgICBpZiAoaSAlIDIgPT09IDAgJiYgaiAlIDIgPT09IDEgfHwgaSAlIDIgPT09IDEgJiYgaiAlIDIgPT09IDApIHtcclxuICAgICAgICAgIHNldEVsZW1lbnRTdHlsZXMoZmllbGQuZWxlbWVudCwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3YzdjN1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCI2NDRweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNjQ0cHhcIixcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZEhlbHBlcnMoKSB7XHJcbiAgICBjb25zdCBob3Jpem9udGFsSGVscGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IHZlcnRpY2FsSGVscGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHNldEVsZW1lbnRTdHlsZXMoaG9yaXpvbnRhbEhlbHBlcnMsIHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiBcIi0yNHB4XCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9KVxyXG4gICAgc2V0RWxlbWVudFN0eWxlcyh2ZXJ0aWNhbEhlbHBlcnMsIHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBcIi0yNHB4XCIsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5ob3Jpem9udGFsTGluZXMuZm9yRWFjaChsZXR0ZXIgPT4ge1xyXG4gICAgICBjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGhlbHBlci5pbm5lclRleHQgPSBsZXR0ZXI7XHJcbiAgICAgIHNldEVsZW1lbnRTdHlsZXMoaGVscGVyLCB7XHJcbiAgICAgICAgd2lkdGg6IFwiODBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIGhvcml6b250YWxIZWxwZXJzLmFwcGVuZENoaWxkKGhlbHBlcik7XHJcbiAgICB9KVxyXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2gobnVtYmVyID0+IHtcclxuICAgICAgY29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBoZWxwZXIuaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgICBzZXRFbGVtZW50U3R5bGVzKGhlbHBlciwge1xyXG4gICAgICAgIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjRweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9KVxyXG4gICAgICB2ZXJ0aWNhbEhlbHBlcnMuYXBwZW5kQ2hpbGQoaGVscGVyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbGVtZW50LnByZXBlbmQoaG9yaXpvbnRhbEhlbHBlcnMpO1xyXG4gICAgdGhpcy5lbGVtZW50LnByZXBlbmQodmVydGljYWxIZWxwZXJzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgY29uc3Qgc2V0RWxlbWVudFN0eWxlcyA9IChlbGVtZW50LCBzdHlsZXMpID0+IHtcclxuICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtzZXRFbGVtZW50U3R5bGVzfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHtcclxuICBjb25zdHJ1Y3Rvcihob3Jpem9udGFsUG9zaXRpb24sIHZlcnRpY2FsUG9zaXRpb24sIGJvYXJkKSB7XHJcbiAgICB0aGlzLmhQb3MgPSBob3Jpem9udGFsUG9zaXRpb247XHJcbiAgICB0aGlzLnZQb3MgPSB2ZXJ0aWNhbFBvc2l0aW9uO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgLy8gdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuaFBvcyArIFwiIFwiICsgdGhpcy52UG9zO1xyXG4gICAgdGhpcy5jcmVhdGVTdHlsZXMoKTtcclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdHlsZXMoKSB7XHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICB3aWR0aDogXCI4MHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgICAgIGZsZXg6IFwiMCAwIDgwcHhcIixcclxuICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzQzNDM0M1wiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQge3NldEVsZW1lbnRTdHlsZXN9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcHBseUJhc2VTdHlsZXMoKTtcclxuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIGFwcGx5QmFzZVN0eWxlcygpIHtcclxuICAgIHNldEVsZW1lbnRTdHlsZXMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIH0pXHJcbiAgICBzZXRFbGVtZW50U3R5bGVzKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxubmV3IEdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9