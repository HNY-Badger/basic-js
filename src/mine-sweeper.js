const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minefield = [];
  for (let i = 0; i < matrix.length; i++) {
    let line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      line.push(scanMines(i, j));
    }
    minefield.push(line);
  }

  function scanMines(i, j) {
    let mines = 0;
    for (let ii = i-1; ii < i+2; ii++) {
      for (let jj = j-1; jj < j+2; jj++) {
        if ((matrix[ii] !== undefined && matrix[ii][jj] !== undefined && matrix[ii][jj]) && !(i === ii && j === jj)) {
          mines += 1;
        }
      }
    }
    return mines;
  }

  return minefield;
}

module.exports = {
  minesweeper
};
