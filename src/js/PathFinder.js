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
    if (startX === endX && startY === endY) {
      return console.log("Reached end in 0 moves!");
    }

    head = Node([startX, startY]);
    tilesCovered = [[startX, startY]];
    maximumDepth = 0;
    let isEnd = false;

    let possibleMoves = listPossibleMoves(startX, startY);
    let validMoves = validateMoves(possibleMoves);
    for (let i = 0; i < validMoves.length; i++) {
      head.nextNodes.push(Node(validMoves[i]));

      if (validMoves[i][0] === endX && validMoves[i][1] === endY) {
        isEnd = true;
        console.log("Path has been found");
        break;
      }
    }

    // iteration 2
    loop1: for (let i = 0; i < head.nextNodes.length; i++) {
      possibleMoves = listPossibleMoves(
        head.nextNodes[i].value[0],
        head.nextNodes[i].value[1]
      );
      validMoves = validateMoves(possibleMoves);

      for (let j = 0; j < validMoves.length; j++) {
        head.nextNodes[i].nextNodes.push(Node(validMoves[j]));
        if (validMoves[j][0] === endX && validMoves[j][1] === endY) {
          isEnd = true;
          console.log("Path has been found");
          break loop1;
        }
      }
    }

    // iteration 3
    loop1: for (let i = 0; i < head.nextNodes.length; i++) {
      for (let j = 0; j < head.nextNodes[i].length; j++) {
        possibleMoves = listPossibleMoves(
          head.nextNodes[j].value[0],
          head.nextNodes[j].value[1]
        );
        validMoves = validateMoves(possibleMoves);
  
        for (let k = 0; k < validMoves.length; k++) {
          head.nextNodes[i].nextNodes[j].nextNodes.push(Node(validMoves[k]));
          if (validMoves[k][0] === endX && validMoves[k][1] === endY) {
            isEnd = true;
            console.log("Path has been found");
            break loop1;
          }
        }
      }
    }

    console.log(head.nextNodes[0]);
    // (0, 0) > (1, 2) > (0, 4)

    // console.log(head.nextNodes[0].value);
    // console.log(head.nextNodes[0].nextNodes);
    console.log(head);
  };

  return {
    findPath,
  };
})();

export default PathFinder;
