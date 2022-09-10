import {setElementStyles} from "./common";

export default class Field {
  constructor(horizontalPosition, verticalPosition, board) {
    this.hPos = horizontalPosition;
    this.vPos = verticalPosition;
    this.element = document.createElement("li");
    // this.element.innerText = this.hPos + " " + this.vPos;
    this.createStyles();
    board.appendChild(this.element);
  }

  createStyles() {
    setElementStyles(this.element, {
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
