import React, { useState } from 'react';
import MetaBoard from './MetaBoard'
import { randFromOneTo, randFromZeroTo, selectRandomNums } from './helpers.js'

const MetaGame = ({player}) => {

  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [attack, setAttack] = useState(1)
  const [metaBoard, setMetaBoard] = useState({
    // ... MetaBoard state
  })

  // *************** meta-game logic

  const runAttack = (maxInterval = 3000, bombCount = randFromOneTo(9)) => {

    if (attack > 5) {
      level++
      attack = 1
      // runGame()
    }

    const bombs = selectRandomNums(bombCount)

    // ids.forEach((id) => {
    //   setTimeout(() => bomb(id), randFromOneTo(maxInterval))
    // })

  }

  const bombCount = randFromOneTo(9)
  const bombs = selectRandomNums(bombCount)


  return(
    <MetaBoard
      bombs={bombs}
    />
  )

}

export default MetaGame;
