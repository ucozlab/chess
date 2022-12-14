import Figure from "./Figure";
import {TEAM_COLOR} from "../constants";

export default class Queen extends Figure {

  constructor(position, player, board) {
    super(position, player, board);
    this.figureId = "queen";
    this.backgroundPosition = player.teamColor === TEAM_COLOR.white ? "19% -1%" : "19% 110%";
  }

}
