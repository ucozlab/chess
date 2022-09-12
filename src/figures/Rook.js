import Figure from "./Figure";
import {HORIZONTAL_LINES, HORIZONTAL_NUMBERS, TEAM_COLOR} from "../constants";

export default class Rook extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "80% 0%" : "80% 111%";
  }

  isAvailableMove(field) {
    const canStayHere = !field.figure || field.figure.player.teamColor !== this.board.game.playerMove;
    if (field.hPos !== this.hPos && field.vPos === this.vPos) {
      if (field.hPos < this.hPos) {
        const allFieldsToTheLeft = this.board.fields.filter(checkField => {
          return checkField.vPos === this.vPos && (checkField.hPos > field.hPos) && (checkField.hPos < this.hPos);
        });
        if (!allFieldsToTheLeft.length && ((HORIZONTAL_NUMBERS[field.hPos] + 1) === HORIZONTAL_NUMBERS[this.hPos])) {
          return canStayHere
        }
        return canStayHere && !allFieldsToTheLeft.some(field => field.figure)
      } else {
        const allFieldsToTheRight = this.board.fields.filter(checkField => {
          return checkField.vPos === this.vPos && (checkField.hPos < field.hPos) && (checkField.hPos > this.hPos);
        });
        if (!allFieldsToTheRight.length && ((HORIZONTAL_NUMBERS[field.hPos] - 1) === HORIZONTAL_NUMBERS[this.hPos])) {
          return canStayHere
        }
        return canStayHere && !allFieldsToTheRight.some(field => field.figure)
      }
    } else if (field.hPos === this.hPos && field.vPos !== this.vPos) {
      if (field.vPos < this.vPos) {
        const allFieldsToTheLeft = this.board.fields.filter(checkField => {
          return checkField.hPos === this.hPos && (checkField.vPos > field.vPos) && (checkField.vPos < this.vPos);
        });
        if (!allFieldsToTheLeft.length && ((field.vPos + 1) === this.vPos)) {
          return canStayHere
        }
        return canStayHere && !allFieldsToTheLeft.some(field => field.figure)
      } else {
        const allFieldsToTheRight = this.board.fields.filter(checkField => {
          return checkField.hPos === this.hPos && (checkField.vPos < field.vPos) && (checkField.vPos > this.vPos);
        });
        if (!allFieldsToTheRight.length && ((field.vPos - 1) === this.vPos)) {
          return canStayHere
        }
        return canStayHere && !allFieldsToTheRight.some(field => field.figure)
      }
    }
    return false
  }

}
