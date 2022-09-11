import Figure from "./Figure";
import {TEAM_COLOR} from "../constants";

export default class Rook extends Figure {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "80% 0%" : "80% 111%";
  }

}
