import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinningLine, findWinningSquare, isGameWon, isDraw, randomEmptySquare } from './gameLogic.js'


const Game = ({id, active}) => {

  let first = isPlayerFirst()

  const [playerFirst, setPlayerFirst] = useState(first)
  const [position, setPosition] = useState(initialPosition(first))
  const [next, setNext] = useState(first ? 'X' : 'O')
  const [previous, setPrevious] = useState(first ? 'O' : 'X')
  const [status, setStatus] = useState('player')

  useEffect(() => {opponentMove()}, [status])


  // this function is executed when player clicks a square
  const play = (e) => {
    if (status == 'player' && position[e.target.id] == null) {
      playerMove(e.target.id)
    }
  }

  const playerMove = (squareId)  => {
    let newPosition = [...position]
    newPosition[squareId] = next

    updateState(newPosition)
  }

  // this function is called after each move (by both player and opponent)
  const updateState = (newPosition) => {
    setPosition(newPosition)
    // debugger

    if (status === 'player' && isGameWon(newPosition)) {
      // debugger
      setStatus('player-won')
    } else if (status === 'opponent' && isGameWon(newPosition)) {
      setStatus('opponent-won')
    } else if (isDraw(newPosition)) {
      setStatus('draw')
    } else {
      setNext(previous)
      setPrevious(next)
      status === 'player' ? setStatus('opponent') : setStatus('player')
    }
  }


  const opponentMove = () => {
      if (status === 'opponent') {
        setTimeout(() => {

        let winningSquare = findWinningSquare(position, next)
        let playerWinningSquare = findWinningSquare(position, previous)
        let newPosition = [...position]

        if (winningSquare >= 0 ) {

          console.log("winning square found!")
          newPosition[winningSquare] = next

          updateState(newPosition)

        } else if (playerWinningSquare >= 0 ) {

          console.log("Watch out! player winning square found!")
          newPosition[playerWinningSquare] = next

          updateState(newPosition)
        } else {
          newPosition[randomEmptySquare(newPosition)] = next
          updateState(newPosition)
        }

      }, 1000)
      }
  }

  return (<Board
            id={id}
            playerFirst={playerFirst}
            position={position}
            next={next}
            previous={previous}
            status={status}
            play={play}
            active={active}
          />)
}

export default Game;
