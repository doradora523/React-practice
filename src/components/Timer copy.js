import React, {useEffect, useState} from 'react'
import moment from 'moment'

function Clock() {
  const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))
  
  useEffect(() => {
    setTimeout(() => { setTime(moment().format('YYYY-MM-DD HH:mm:ss)),1000})
  })
  return (
    <>
      
    </>
  )
}
export default Clock