export default class Figure {

  constructor(startPosition, player, board) {
    this.hPos = startPosition.hPos;
    this.vPos = startPosition.vPos;
    this.startPosition = startPosition;
    this.player = player;
    this.board = board;
  }

  move(field) {
    this.hPos = field.hPos;
    this.vPos = field.vPos;
    field.figure = this;
  }

}
