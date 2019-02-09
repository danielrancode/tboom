import React, { useState, useEffect } from 'react';
import Board from './Board'
import { randFromOneTo, randFromZeroTo, selectRandomNums } from './helpers.js'


const Game = ({id, active}) => {

  const isPlayerFirst = randFromZeroTo(1) === 0

  const initialPosition = (bool) => {
    let position = Array(9).fill(null)
    if (bool) {
        position[randFromZeroTo(8)] = 'X'
    }
    return position
  }



  const [gameState, setGameState] = useState({
    playerFirst: isPlayerFirst,
    position: initialPosition(isPlayerFirst),
    next: isPlayerFirst ? 'X' : 'O',
    status: 'ticking'
  })

  useEffect(() => console.log(gameState.status))

  const changeGameState = (e) => {
    e.target.innerText = gameState.next
    setGameState({...gameState, next: gameState.next == 'X' ? 'O' : 'X'})
  }


  return <Board id={id} changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;
