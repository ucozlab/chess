import Board from "./board";
import {setElementStyles} from "./common";
import {PLAYER_TYPE, TEAM_COLOR, TEAM_DIRECTION} from "./constants";
import setStartFigures from "./startFigures";
import Player from "./player";

export default class Game {

  constructor() {
    this.applyBaseStyles();
    this.start();
  }

  start() {
    this.players = [
      new Player(PLAYER_TYPE.player, TEAM_DIRECTION.top, TEAM_COLOR.white),
      new Player(PLAYER_TYPE.pc, TEAM_DIRECTION.bottom, TEAM_COLOR.black)
    ];
    this.board = new Board();
    setStartFigures(this.board, this.players);
    this.board.render();
  }

  applyBaseStyles() {
    setElementStyles(document.documentElement, {
      width: "100%",
      height: "100%",
    })
    setElementStyles(document.body, {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
    })
  }

}
