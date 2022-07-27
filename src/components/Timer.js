import React, {useEffect, useState} from 'react'

function Timer({s}) {
  const [seconds, setSeconds] = useState(s) 
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if(isClicked) {
      const countDown = setTimeout(() => {setSeconds(seconds - 1)}, 1000)  
      return () => clearTimeout(countDown)
    }
  }, [seconds, isClicked])
  return (
    <>
    <div>{seconds}</div>
    <button onClick={() => setIsClicked(true)}>시작!</button>
    <button onClick={() => setIsClicked(false)}>중지!</button>
    </>
  )
}
export default Timer