export default class Figure {

  constructor(startPosition, player) {
    this.position = startPosition;
    this.startPosition = startPosition;
    this.player = player;
  }

  move(position) {
    this.position = position;
  }

}
