import React, {useState} from 'react'

function Handlers() {
  const [number, setNumber] = useState(0)
  
  // const changeHandler = (e) => {
  //   setNumber(e.target.value)
  // }

  // return (  
  //   <div>
  //     <input onChange={changeHandler}></input>
  //     <p>{number}</p>
  //   </div>
    
  // )

  const keyHandler = (e) => {
    if (e.key === 'Enter') setNumber(10)
  }

  return (  
    <div>
      <input onKeyDown={keyHandler}></input>
      <p>{number}</p>
    </div>
    
  )
}

export default Handlers