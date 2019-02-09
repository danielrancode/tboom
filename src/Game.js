import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinnindLine, findWinningSquare, isGameWon, isDraw, randomEmptySquare, delay } from './gameLogic.js'


const Game = ({id, active}) => {

  const [gameState, setGameState] = useState({
    playerFirst: isPlayerFirst,
    position: initialPosition(isPlayerFirst),
    next: isPlayerFirst ? 'X' : 'O',
    status: 'ticking'
  })

  // const [playerFirst, setPlayerFirst] = useState(isPlayerFirst)
  // const [position, setPosition] = useState(initialPosition(isPlayerFirst))
  // const [next, setNext] = useState(isPlayerFirst ? 'X' : 'O')
  // const [status, setStatus] = useState('ticking')


  const changeGameState = (e) => {
    let squareId = e.target.id
    let position = [...gameState.position]
    let oldNext = gameState.next
    let newNext = gameState.next == 'X' ? 'O' : 'X'


    // check if sqaure is empty

    if (gameState.staus = 'ticking' && position[squareId] === null) {
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
        console.log("a")
        delay(() => {
          position[winningSquare] = newNext

          setGameState({
          ...gameState,
          position: position,
          status: 'opponent-won'
        })
      })
      } else if (playerWinningSquare >= 0 ) {
        delay(() => {
          position[playerWinningSquare] = newNext

          setGameState({
            ...gameState,
            position: position,
            next: oldNext,
            status: isDraw(position) ? 'draw' : 'ticking'
          })
        })
      } else if (isGameWon(position)) {
        setGameState({
          ...gameState,
          position: position,
          status: "player-won"
        })
        console.log("You won!")
      } else if (isDraw(position)) {
        console.log("draw")
        setGameState({
          ...gameState,
          position: position,
          status: "draw"
        })
      } else {
        delay(() => {
          position[randomEmptySquare(position)] = newNext
          setGameState({
          ...gameState,
          position: position,
          next: oldNext
        })})
      }


    }

  }


  return <Board id={id} changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;
