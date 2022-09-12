import Figure from "./Figure";
import {HORIZONTAL_NUMBERS, TEAM_COLOR, TEAM_DIRECTION} from "../constants";

export default class Pawn extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "pawn";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "100.25% 2%" : "100.25% 112%";
  }

  isAvailableMove(field) {
    if (field.hPos !== this.hPos) {
      if (!field.figure || field.figure.player.teamColor === this.board.game.playerMove) {
        return false
      }
      if (this.player.teamDirection === TEAM_DIRECTION.top) {
        if (field.vPos - 1 !== this.vPos) {
          return false
        }
        return HORIZONTAL_NUMBERS[field.hPos] - 1 === HORIZONTAL_NUMBERS[this.hPos] || (HORIZONTAL_NUMBERS[field.hPos] + 1 === HORIZONTAL_NUMBERS[this.hPos])
      } else {
        if (field.vPos + 1 !== this.vPos) {
          return false
        }
        return HORIZONTAL_NUMBERS[this.hPos] - 1 === HORIZONTAL_NUMBERS[field.hPos] || (HORIZONTAL_NUMBERS[this.hPos] + 1 === HORIZONTAL_NUMBERS[field.hPos])
      }
    }
    if (field.figure) {
      return false
    }
    if (this.player.teamDirection === TEAM_DIRECTION.top) {
      return ((field.vPos - this.vPos) === 1) || (this.vPos === this.startPosition.vPos && ((field.vPos - this.vPos) === 2))
    } else {
      return ((this.vPos - field.vPos) === 1) || (this.vPos === this.startPosition.vPos && ((this.vPos - field.vPos) === 2))
    }
  }

}
