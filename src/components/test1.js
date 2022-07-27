import React, { useEffect, useState } from 'react'

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loc, setLoc] = useState()
  const [subLoc, setSubLoc] = useState()

  useEffect(() => {
    // 컴포넌트가 렌더링 될 때 실행될 함수
    // 데이터 갖고오기 요청 보내고, 데이터가 오면 isLoaded = true

    setTimeout(() => {setIsLoaded(true)}, 5000)
  }, [])

  // 로딩이 완료로 변하면, ~~가 실행되도록
  useEffect(() => {
    // 업데이트될 때 실행될 함수 + 처음 컴포넌트가 렌더링될 때도 실행된다! 2회
    // setText(text.concat(['추가!']))
    // if(isLoaded) setText(text.concat(['추가!']))
    if (loc === '서울') {
      setSubLoc(['서초', '강남'])
    } else if (loc === '부산') {
      setSubLoc(['해운대', '수영'])
    }
  }, [loc])



  return (
    <div>
      {isLoaded ? 
        <>
          <button onClick={() => setLoc('서울')}>서울</button>
          <button onClick={() => setLoc('부산')}>부산</button>
          <p>현재 지역: {loc}</p>
          <p>세부 지역: {subLoc}</p>
        </> :
        <></>
      }
    </div>
  )
}

export default Loading