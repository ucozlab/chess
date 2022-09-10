import Field from "./field";
import {setElementStyles} from "./common";

export default class Board {
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
        const field = new Field(this.verticalLines[i], this.horizontalLines[j], this.element);
        console.log("this", this);
        this.fields.push(field);
      }
    }
  }

  createBoardStyles() {
    setElementStyles(this.element, {
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
