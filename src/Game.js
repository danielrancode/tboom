import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinnindLine, findWinningSquare } from './gameLogic.js'


const Game = ({id, active}) => {


  const [gameState, setGameState] = useState({
    playerFirst: isPlayerFirst,
    position: initialPosition(isPlayerFirst),
    next: isPlayerFirst ? 'X' : 'O',
    status: 'ticking'
  })

  const changeGameState = (e) => {
    let squareId = e.target.id
    let position = gameState.position
    if (position[squareId] === null) {
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

  }


  return <Board id={id} changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;


// useEffect(() => console.log(gameState.status))
