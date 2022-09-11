import {setElementStyles} from "./common";
import {CHESS_FIGURES_IMG, HORIZONTAL_NUMBERS, TEAM_COLOR} from "./constants";

export default class Field {
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
      this.board.game.playerMove = this.board.game.playerMove === TEAM_COLOR.white ? TEAM_COLOR.black : TEAM_COLOR.white;
      this.board.render();
    }
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
    setElementStyles(this.element, {
      backgroundImage: this.figure ? `url(${CHESS_FIGURES_IMG})` : "",
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
        : this.vPos % 2 === 0 && HORIZONTAL_NUMBERS[this.hPos] % 2 === 1 || this.vPos % 2 === 1 && HORIZONTAL_NUMBERS[this.hPos] % 2 === 0
          ? "#c7c7c7"
          : "#ffffff";
    setElementStyles(this.element, {
      backgroundColor,
    });
  }

  setCursor() {
    const cursor = (this.isPossibleMove || (this.figure && (this.figure.player.teamColor === this.board.game.playerMove)))
      ? "pointer"
      : "default";
    setElementStyles(this.element, {
      cursor,
    });
  }

}
