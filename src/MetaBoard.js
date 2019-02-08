import React, { useState } from 'react'
import Game from './Game.js'

const MetaBoard = ({metaState}) => {

  const { bombIds } = metaState

  return (
    <div className="meta-board">
      <div className="meta-row">
        <Game active={bombIds.includes(1)}/>
        <Game active={bombIds.includes(2)}/>
        <Game active={bombIds.includes(3)}/>
      </div>
      <div className="meta-row">
        <Game active={bombIds.includes(4)}/>
        <Game active={bombIds.includes(5)}/>
        <Game active={bombIds.includes(6)}/>
      </div>
      <div className="meta-row">
        <Game active={bombIds.includes(7)}/>
        <Game active={bombIds.includes(8)}/>
        <Game active={bombIds.includes(9)}/>
      </div>
    </div>
  )
}

export default MetaBoard


// const [selectedBoard, setSelectedBoard] = useState(1)
