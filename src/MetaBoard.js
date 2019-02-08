import React, { useState } from 'react'
import Game from './Game.js'

const MetaBoard = ({bombs}) => {
  console.log(bombs)
  const [selectedBoard, setSelectedBoard] = useState(1)
  const [selectedSquare, setSelectedSquare] = useState(1)

  return (
    <div className="meta-board">
      <div className="meta-row">
        <Game active={bombs.includes(1)}/>
        <Game active={bombs.includes(2)}/>
        <Game active={bombs.includes(3)}/>
      </div>
      <div className="meta-row">
        <Game active={bombs.includes(4)}/>
        <Game active={bombs.includes(5)}/>
        <Game active={bombs.includes(6)}/>
      </div>
      <div className="meta-row">
        <Game active={bombs.includes(7)}/>
        <Game active={bombs.includes(8)}/>
        <Game active={bombs.includes(9)}/>
      </div>
    </div>
  )
}


export default MetaBoard
