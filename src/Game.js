import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinningLine, findWinningSquare, isGameWon, isDraw, randomEmptySquare, chooseBestSquare } from './gameLogic.js'


const Game = ({id, active, delay}) => {
  const first = isPlayerFirst()

  // *************** STATE CONSTANTS DECLARATIONS *************
  const [playerFirst, setPlayerFirst] = useState(first)
  const [position, setPosition] = useState(initialPosition(first))
  const [next, setNext] = useState('X')
  const [previous, setPrevious] = useState('O')
  const [status, setStatus] = useState('delay')
  const [time, setTime] = useState(-1)
  const [timeoutId, setTimeoutId] = useState(null)

  // useEffect(() => {startGame()}, [status])
  useEffect(() => {opponentMove()}, [status])
  useEffect(() => {updateTime()}, [time])
  useEffect(() => {startTimer()}, [])

// *************** STATE UPDATE LOGIC *****************

  // this function is executed when player clicks a square
  const play = (e) => {
    if (status == 'player' && position[e.target.id] === null) {
      playerMove(e.target.id)
    }
  }

  // this function is executed once it is confirmed that it is player's turn.
  // It returns new position array.
  const playerMove = (squareId)  => {
    let newPosition = [...position]
    newPosition[squareId] = next
    updateState(newPosition)
  }

  // this function is called after each move (by both player and opponent)
  const updateState = (newPosition) => {

    setPosition(newPosition)

    if (status === 'player' && isGameWon(newPosition)) {
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

  // this function is called only after 'status' changes
  // if it is opponent turn, it makes opponent move.
  const opponentMove = () => {
    if (status === 'opponent') {
      setTimeout(() => {
        let square = chooseBestSquare(position, next, previous)
        let newPosition = [...position]
        newPosition[square] = next
        updateState(newPosition)
      }, 1000)
    }
  }

  const updateTime = () => {
    if (time > 0 && (status === 'player' || status === 'opponent')) {
      let id = setTimeout(() => {
        if (status === 'player' || status === 'opponent') {
          let gameTime = time
            setTime(gameTime - 1)
        }
      }, 1000)
      setTimeoutId(id)
    }
  }

  const startTimer = () => {
    if (active) {
      setTimeout(() => {
      setStatus('player')
      setTime(30)
    }, delay)
  }
}

  return  <Board
            id={id}
            playerFirst={playerFirst}
            position={position}
            next={next}
            previous={previous}
            status={status}
            time={time}
            play={play}
            active={status === 'delay' ? false : active}
          />
}

export default Game;
