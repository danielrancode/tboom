import React, { useState, useEffect } from 'react';
import Board from './Board'
import { randFromOneTo, randFromZeroTo, selectRandomNums, getFromArray, getLine } from './helpers.js'


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

  const winningMove = (currentPosition, next) => {
    let result = winningLines.find(line => {
      let currentLinePosition = getLine(currentPosition, line)
      console.log("preVictoryPositions(next)", preVictoryPositions(next))
      console.log("currentLinePosition", currentLinePosition)
      // debugger
      // return preVictoryPositions(next).filter(position => position[0] == currentLinePosition[0] && position[1] == currentLinePosition[1] && position[2] == currentLinePosition[2])
      return preVictoryPositions(next).find(position => {
        // debugger
        return position[0] == currentLinePosition[0] && position[1] == currentLinePosition[1] && position[2] == currentLinePosition[2]
      })
    })
    console.log("result = ", result)
    return result
  }

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

    console.log("winningMove(newNext)", winningMove(position, newNext))
    if (winningMove(position, newNext)) {
      setTimeout( () => {
        winningMove(position, newNext).forEach(n => position[n] = newNext)

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
