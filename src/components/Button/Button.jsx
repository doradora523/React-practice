import React, { useState } from 'react'
import * as S from './style'

function Button() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <S.Button isClicked={false} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? <p>Good!</p> : <p>Nice!</p>}
    </S.Button>
  )
}

export default Button
