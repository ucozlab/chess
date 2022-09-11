import {setElementStyles} from "./common";
import {CHESS_FIGURES_IMG} from "./constants";

export default class Field {
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

  renderFigure() {
    if (this.figure) {
      setElementStyles(this.element, {
        backgroundImage: `url(${CHESS_FIGURES_IMG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "550%",
        backgroundPosition: this.figure.backgroundPosition,
      })
    }
  }

}
