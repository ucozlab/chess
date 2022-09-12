import Figure from "./Figure";
import {HORIZONTAL_NUMBERS, TEAM_COLOR} from "../constants";

export default class King extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "-1% -1%" : "-1% 110%";
  }

  isAvailableMove(field) {
    const canStayHere = !field.figure || field.figure.player.teamColor !== this.board.game.playerMove;
    if (field.hPos !== this.hPos && field.vPos === this.vPos) {
      if (field.hPos < this.hPos) {
        return canStayHere && ((HORIZONTAL_NUMBERS[field.hPos] + 1) === HORIZONTAL_NUMBERS[this.hPos])
      } else {
        return canStayHere && ((HORIZONTAL_NUMBERS[field.hPos] - 1) === HORIZONTAL_NUMBERS[this.hPos])
      }
    } else if (field.hPos === this.hPos && field.vPos !== this.vPos) {
      if (field.vPos < this.vPos) {
        return canStayHere && ((field.vPos + 1) === this.vPos)
      } else {
        return canStayHere && ((field.vPos - 1) === this.vPos)
      }
    } else if (
      ((HORIZONTAL_NUMBERS[field.hPos] + 1) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos + 1) === this.vPos)
      || ((HORIZONTAL_NUMBERS[field.hPos] + 1) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos - 1) === this.vPos)
      || ((HORIZONTAL_NUMBERS[field.hPos] - 1) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos + 1) === this.vPos)
      || ((HORIZONTAL_NUMBERS[field.hPos] - 1) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos - 1) === this.vPos)
    ) {
      return canStayHere
    }
    return false
  }

}
