const CHESS_BOARD_SIZE = 8;

const PathFinderGraph = (() => {
  let chessBoard = new Map();
  let test = 1;

  const createEmptyGraph = () => {
    chessBoard = new Map();
    for (let i = 0; i < CHESS_BOARD_SIZE; i++) {
      for (let j = 0; j < CHESS_BOARD_SIZE; j++) {
        // key needs to be set as a string or else get() will not work
        chessBoard.set(`${[i, j]}`, []);
      }
    }
  };

  const addEdges = () => {
    for (let [position] of chessBoard) {
      const positionArray = position.split(",");
      const x = parseInt(positionArray[0]);
      const y = parseInt(positionArray[1]);

      const knightMoves = {
        1: [x + 1, y + 2],
        2: [x + 2, y + 1],
        4: [x + 2, y - 1],
        5: [x + 1, y - 2],
        7: [x - 1, y - 2],
        8: [x - 2, y - 1],
        10: [x - 2, y + 1],
        11: [x - 1, y + 2],
      };

      for (let direction in knightMoves) {
        const move = knightMoves[direction].toString();
        if (chessBoard.has(move) && !chessBoard.get(position).includes(move)) {
          chessBoard.get(position).push(move);
        }
      }
    }
  };

  const findPath = (start, end) => {
    createEmptyGraph();
    addEdges();

    const paths = [];
    const visited = new Set();
    const queue = [];
    queue.push([start, [start]]);

    while (queue.length > 0) {
      let [current, path] = queue.shift();
      visited.add(current);
      if (current === end) {
        paths.push(path);
      }
      const neighbors = chessBoard.get(current);

      for (let position of neighbors) {
        if (!visited.has(position)) {
          queue.push([position, [...path, position]]);
        }
      }
    }
    console.log(`Fastest Routes from ${start} to ${end}`);
    // paths.forEach((element) => console.log(element));
    console.log(paths[0]);
  };

  return {
    findPath,
  };
})();
export default PathFinderGraph;
