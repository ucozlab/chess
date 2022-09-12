import Figure from "./Figure";
import {HORIZONTAL_NUMBERS, TEAM_COLOR} from "../constants";

export default class Bishop extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "39.5% -1%" : "39.5% 110%";
  }

  isAvailableMove(field) {
    const canStayHere = !field.figure || field.figure.player.teamColor !== this.board.game.playerMove;
    for (let i = 0; i < Object.keys(HORIZONTAL_NUMBERS).length; i++) {
      if (
        ((HORIZONTAL_NUMBERS[field.hPos] + i) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos + i) === this.vPos)
        || ((HORIZONTAL_NUMBERS[field.hPos] + i) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos - i) === this.vPos)
        || ((HORIZONTAL_NUMBERS[field.hPos] - i) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos + i) === this.vPos)
        || ((HORIZONTAL_NUMBERS[field.hPos] - i) === HORIZONTAL_NUMBERS[this.hPos]) && ((field.vPos - i) === this.vPos)
      ) {
        return canStayHere
      }
    }
    return false
  }

}
