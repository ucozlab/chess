export default class Figure {

  constructor(startPosition, player) {
    this.hPos = startPosition.hPos;
    this.vPos = startPosition.vPos;
    this.startPosition = startPosition;
    this.player = player;
  }

  move(field) {
    this.hPos = field.hPos;
    this.vPos = field.vPos;
    field.figure = this;
  }

}
