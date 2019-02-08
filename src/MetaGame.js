import React, { useState } from 'react';
import MetaBoard from './MetaBoard'
import { randFromOneTo, randFromZeroTo, selectRandomNums } from './helpers.js'

const MetaGame = ({player}) => {

  const [metaState, setMetaState] = useState({
    score: 0,
    level: 1,
    attack: 1,
    bombIds: selectRandomNums(randFromOneTo(9))
  })

  return(
    <MetaBoard
      metaState={metaState}
    />
  )

}

export default MetaGame;




  // const [score, setScore] = useState(0)
  // const [level, setLevel] = useState(1)
  // const [attack, setAttack] = useState(1)


  // *************** meta-game logic

  // const runAttack = (maxInterval = 3000, bombCount = randFromOneTo(9)) => {
  //
  //   if (attack > 5) {
  //     level++
  //     attack = 1
  //     // runGame()
  //   }
  //
  //   const bombs = selectRandomNums(bombCount)
  //
  //   // ids.forEach((id) => {
  //   //   setTimeout(() => bomb(id), randFromOneTo(maxInterval))
  //   // })
  //
  // }
