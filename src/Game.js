import React, { useState, useEffect } from 'react';
import Board from './Board'
import { randFromOneTo, randFromZeroTo, selectRandomNums } from './helpers.js'


const Game = ({id, active}) => {

  const initialPosition = () => {
    let position = Array(9).fill(null)

    if (randFromZeroTo(1) === 0) {
        position[randFromZeroTo(8)] = 'X'
    }

    return position
  }



  const [gameState, setGameState] = useState({
    position: initialPosition(),
    status: 'ticking'
  })

  useEffect(() => console.log(gameState.status))

  const changeGameState = (e) => {
    setGameState({...gameState, /* changed properties */})
  }


  return <Board id={id} changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;
