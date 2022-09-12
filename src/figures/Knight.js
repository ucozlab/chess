import Figure from "./Figure";
import {TEAM_COLOR, TEAM_DIRECTION} from "../constants";

export default class Knight extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "knight";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "60% 0%" : "60% 111%";
  }

  checkForAvailableMovePositions() {
    let availableMoves = [];
    if (this.teamDirection === TEAM_DIRECTION.top) {
      // if () {
      //
      // }
      if (this.position.h === this.startPosition.h && this.startPosition.v === this.startPosition.v) {

      }
      return []
    }
  }

}
