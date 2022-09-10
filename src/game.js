import Board from "./board";
import {setElementStyles} from "./common";

export default class Game {

  constructor() {
    this.applyBaseStyles();
    this.board = new Board();
  }

  start() {

  }

  applyBaseStyles() {
    setElementStyles(document.documentElement, {
      width: "100%",
      height: "100%",
    })
    setElementStyles(document.body, {
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
