import Figure from "./Figure";
import {TEAM_COLOR} from "../constants";

export default class Bishop extends Figure {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "39.5% -1%" : "39.5% 110%";
  }

}
