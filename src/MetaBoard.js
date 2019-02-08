import React, { useState } from 'react'
import Board from './Board.js'

const MetaBoard = () => {

  const [level, setLevel] = useState(1)
  const [attack, setAttack] = useState(1)
  const [selectedBoard, setSelectedBoard] = useState(1)
  const [selectedSquare, setSelectedSquare] = useState(1)

  return (
    <div className="meta-board">
      <div className="meta-row">
        <Board />
        <Board />
        <Board />
      </div>
      <div className="meta-row">
        <Board />
        <Board />
        <Board />
      </div>
      <div className="meta-row">
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  )
}


export default MetaBoard
