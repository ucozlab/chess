import {TEAM_DIRECTION} from "./constants";
import Pawn from "./figures/Pawn";
import Rook from "./figures/Rook";
import Knight from "./figures/Knight";
import Bishop from "./figures/Bishop";
import Queen from "./figures/Queen";
import King from "./figures/King";

const setStartFigures = (board, players) => {
  players.forEach(player => {
    const pawnVerticalLine = (player.teamDirection === TEAM_DIRECTION.top) ? 2 : 7;
    const mainVerticalLine = (player.teamDirection === TEAM_DIRECTION.top) ? 1 : 8;
    board.horizontalLines.forEach(letter => {
      /** PAWNS **/
      const pawnField = board.fields.find(field => field.hPos === letter && field.vPos === pawnVerticalLine);
      const startPawnPosition = {hPos: letter, vPos: pawnVerticalLine};
      pawnField.figure = new Pawn(startPawnPosition, player, board);
      /** OTHER **/
      const field = board.fields.find(field => field.hPos === letter && field.vPos === mainVerticalLine);
      const startPosition = {hPos: letter, vPos: mainVerticalLine};
      switch (letter) {
        case "a":
        case "h":
          field.figure = new Rook(startPosition, player, board);
          break;
        case "b":
        case "g":
          field.figure = new Knight(startPosition, player, board);
          break;
        case "c":
        case "f":
          field.figure = new Bishop(startPosition, player, board);
          break;
        case "d":
          field.figure = new Queen(startPosition, player, board);
          break;
        case "e":
          field.figure = new King(startPosition, player, board);
          break;
        default:
          break;
      }
    })
  })
}

export default setStartFigures
