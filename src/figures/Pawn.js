import Figure from "./Figure";
import {TEAM_COLOR, TEAM_DIRECTION} from "../constants";

export default class Pawn extends Figure {

  constructor(position, player) {
    super(position, player);
    this.figureId = "pawn";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "100.25% 2%" : "100.25% 112%";
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
