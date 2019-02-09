import React, { useState, useEffect } from 'react';
import Board from './Board'
import { randFromOneTo, randFromZeroTo, selectRandomNums, getLine } from './helpers.js'


const Game = ({id, active}) => {

  const winningLines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

  const preVictoryPositions = (next) => [[next, next, null], [next, null, next], [null, next, next]]

  const isPlayerFirst = randFromZeroTo(1) === 0

  const initialPosition = (bool) => {
    let position = Array(9).fill(null)
    if (!bool) {
        position[randFromZeroTo(8)] = 'X'
    }
    return position
  }

  // const winningMove = (currentPosition, next) => {
  //   let result = winningLines.find(line => {
  //     let currentLinePosition = getLine(currentPosition, line)
  //
  //     return preVictoryPositions(next).find(position => {
  //
  //       return position[0] == currentLinePosition[0] && position[1] == currentLinePosition[1] && position[2] == currentLinePosition[2]
  //     })
  //   })
  //   console.log("result = ", result)
  //   return result
  // }

  const willLineWin = (line, position, next) => {
    let result = preVictoryPositions(next).find(pvPosition => pvPosition[0] == position[line[0]] && pvPosition[1] == position[line[1]] && pvPosition[2] == position[line[2]])
    return result
  }

  const findWinningLine = (position, next) => {
    let result = winningLines.find(line => willLineWin(line, position, next))
    return result
  }

  const findWinningSquare = (position, next) => {
    let winningLine = findWinningLine(position, next)
    let winningSquare = winningLine && winningLine.find(i => position[i] === null)
    return winningSquare
  }

  // const winningSquare = (position, next) => {
  //   willPositionWin(position, next)
  // }

  const [gameState, setGameState] = useState({
    playerFirst: isPlayerFirst,
    position: initialPosition(isPlayerFirst),
    next: isPlayerFirst ? 'X' : 'O',
    status: 'ticking'
  })

  const changeGameState = (e) => {
    let squareId = e.target.id
    let position = gameState.position
    position.splice(squareId, 1, gameState.next)
    let newNext = gameState.next == 'X' ? 'O' : 'X'

    setGameState({
      ...gameState,
      position: position,
      next: newNext,
    })

    let winningSquare = findWinningSquare(position, newNext)

    if (winningSquare >= 0 ) {
      console.log("hitting")
      position[winningSquare] = newNext
      setTimeout( () => {
        setGameState({
        ...gameState,
        position: position,
        status: 'won'
      })}, 1000)
    }
  }


  return <Board id={id} changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;


// useEffect(() => console.log(gameState.status))
