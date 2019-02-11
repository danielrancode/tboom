import { randFromOneTo, randFromZeroTo, selectRandomNums, getLine } from './helpers.js'

// game constants
const winningLines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const preVictoryPositions = (xo) => [[xo, xo, null], [xo, null, xo], [null, xo, xo]]

// beginning player / initial position
const isPlayerFirst = () => randFromZeroTo(1) === 0

const initialPosition = (bool) => {
  let position = Array(9).fill(null)
  if (!bool) {
      position[randFromZeroTo(8)] = 'O'
  }
  return position
}

// ************* game logic *****************


const willLineWin = (line, position, xo) => {
  return preVictoryPositions(xo).find(pvPosition => pvPosition[0] == position[line[0]] && pvPosition[1] == position[line[1]] && pvPosition[2] == position[line[2]])
}

const findWinningLine = (position, xo) => {
  // debugger

  return winningLines.find(line => willLineWin(line, position, xo))
}

const findWinningSquare = (position, xo) => {
  let winningLine = findWinningLine(position, xo)
  return winningLine && winningLine.find(i => position[i] === null)
}

const chooseBestSquare = (position, next, previous) => {
  let winningSquare = findWinningSquare(position, next)
  let playerWinningSquare = findWinningSquare(position, previous)
  let emptySquare = randomEmptySquare(position)
  if (winningSquare >= 0) {
    return winningSquare
  }
  if (playerWinningSquare >= 0) {
    return playerWinningSquare
  }
  return emptySquare
}

const isGameWon = (position) => {
  return winningLines.find(line => position[line[0]] !== null && position[line[0]] === position[line[1]] && position[line[1]] === position[line[2]])
}

const isDraw = (position) => {
  // console.log(position.every(sq => sq == 'X' || sq == 'O') && !isGameWon(position))
  return position.every(sq => sq == 'X' || sq == 'O') && !isGameWon(position)
}

const randomEmptySquare = (position) => {
  let i
  while (position[i] !== null) {
    i = randFromZeroTo(8)
  }

  return i
}


export { winningLines, preVictoryPositions, isPlayerFirst, initialPosition,
  willLineWin, findWinningLine, findWinningSquare,
  isGameWon, isDraw, randomEmptySquare, chooseBestSquare}
