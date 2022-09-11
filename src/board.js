import Field from "./field";
import {setElementStyles} from "./common";
import {HORIZONTAL_LINES, VERTICAL_LINES} from "./constants";

export default class Board {
  constructor(game) {
    this.game = game;
    this.horizontalLines = HORIZONTAL_LINES;
    this.verticalLines = VERTICAL_LINES;
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
    setElementStyles(app, {
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
        const field = new Field(this.verticalLines[i], this.horizontalLines[j], this);
        field.renderBackground();
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

  createBoardHelpers() {
    const horizontalHelpers = document.createElement("ul");
    const verticalHelpers = document.createElement("ul");
    setElementStyles(horizontalHelpers, {
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
    setElementStyles(verticalHelpers, {
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
      setElementStyles(helper, {
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
      setElementStyles(helper, {
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
