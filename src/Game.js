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
    let position = [...gameState.position]
    let oldNext = gameState.next
    let newNext = gameState.next == 'X' ? 'O' : 'X'


    // check if sqaure is empty

    if (position[squareId] === null) {
      // put in move
      position.splice(squareId, 1, gameState.next)

      setGameState({
        ...gameState,
        position: position,
        next: newNext,
      })

      let winningSquare = findWinningSquare(position, newNext)
      let playerWinningSquare = findWinningSquare(position, oldNext)

      if (winningSquare >= 0 ) {
        setTimeout( () => {
          position[winningSquare] = newNext

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
