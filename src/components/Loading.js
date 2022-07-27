import React, { useEffect, useState } from 'react'

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [text, setText] = useState([])
  useEffect(() => {
    // 컴포넌트가 렌더링 될 때 실행될 함수
    // 데이터 갖고오기 요청 보내고, 데이터가 오면 isLoaded = true

    setTimeout(() => {setIsLoaded(true)}, 3000)
  }, [])

  // 로딩이 완료로 변하면, ~~가 실행되도록
  useEffect(() => {
    // 업데이트될 때 실행될 함수 + 처음 컴포넌트가 렌더링될 때도 실행된다! 2회
    // setText(text.concat(['추가!']))
    if(isLoaded) setText(text.concat(['추가!']))
  }, [isLoaded])



  return (
    <div>
     { isLoaded ? <>로딩완료! </> : <>로딩 중</>} 
     { text }
    </div>
  )
}

export default Loading