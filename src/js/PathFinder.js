const CHESS_BOARD_SIZE = 8;

import Node from "./Node.js";

const PathFinder = (() => {
  let head = null;
  let tilesCovered = [];
  let maximumDepth = 0;

  const listPossibleMoves = (x, y) => {
    return [
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x - 2, y + 1],
      [x + 2, y + 1],
      [x - 2, y - 1],
      [x + 2, y - 1],
      [x - 1, y - 2],
      [x + 1, y - 2],
    ];
  };

  const validateMoves = (moves) => {
    let validMoves = [];

    for (let i = 0; i < moves.length; i++) {
      if (
        !tilesCovered.includes(moves[i]) &&
        moves[i][0] >= 0 &&
        moves[i][0] <= 7 &&
        moves[i][1] >= 0 &&
        moves[i][1] <= 7
      ) {
        validMoves.push(moves[i]);
        tilesCovered.push(moves[i]);
      }
    }

    return validMoves;
  };

  const findPath = (startX, startY, endX, endY) => {
    head = Node([startX, startY]);
    tilesCovered = [[startX, startY]];
    maximumDepth = 0;

    

    // console.log(head);
    console.log(tilesCovered);

    let moves = listPossibleMoves(startX, startY);
    console.log(moves);

    console.log(validateMoves(moves));

  };

  return {
    findPath,
  };
})();

export default PathFinder;
