import Figure from "./Figure";
import {TEAM_COLOR} from "../constants";

export default class King extends Figure {

  constructor(position, player) {
    super(position, player);
    this.figureId = "rook";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "-1% -1%" : "-1% 110%";
  }

}
