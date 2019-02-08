import React, { useState, useEffect } from 'react';
import Board from './Board'

const Game = ({active}) => {

  const [gameState, setGameState] = useState({
    status: 'ticking'
  })

  useEffect(() => console.log(gameState.status))

  const changeGameState = (e) => {
    setGameState({...gameState, status: gameState.status == 'green-border' ? 'red-border' : 'green-border'})
  }


  return <Board changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;
