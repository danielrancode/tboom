import React, { useState } from 'react'
import Game from './Game.js'

const MetaBoard = ({metaState}) => {

  const { bombIds } = metaState

  return (
    <div className="meta-board">
      <div className="meta-row">
        <Game id="0" active={bombIds.includes(1)}/>
        <Game id="1" active={bombIds.includes(2)}/>
        <Game id="2" active={bombIds.includes(3)}/>
      </div>
      <div className="meta-row">
        <Game id="3" active={bombIds.includes(4)}/>
        <Game id="4" active={bombIds.includes(5)}/>
        <Game id="5" active={bombIds.includes(6)}/>
      </div>
      <div className="meta-row">
        <Game id="6" active={bombIds.includes(7)}/>
        <Game id="7" active={bombIds.includes(8)}/>
        <Game id="8" active={bombIds.includes(9)}/>
      </div>
    </div>
  )
}

export default MetaBoard


// const [selectedBoard, setSelectedBoard] = useState(1)
