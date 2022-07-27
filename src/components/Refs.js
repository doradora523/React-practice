import React, {useRef} from 'react'

function Refs() {
  const inputRef = useRef()

  const keyHandler = (e) => {
    if (e.key === 'Enter') console.log(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} onKeyDown={keyHandler}/> {/* getElementsById 와 같은 느낌 */}
    </div>
  )
}

export default Refs