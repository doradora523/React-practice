import React, {useEffect, useState} from 'react'

function Login() {
  const [userInput, setUserInput] = useState({id: '', pw: ''})
  
  const onUserInputChange = (e) => {
    const {name, value} = e.target
  
    setUserInput({...userInput, [name]:value})
  }

  const doLogin = () => {
    alert('로그인 완료')
  }

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  return (
    <div>
      <input placeholder='아이디를 입력해주세요' onChange={onUserInputChange} name='id'/>
      <input type="password" placeholder='비밀번호를 입력해주세요' onChange={onUserInputChange} name='pw'/>
      <button onClick={doLogin}>
        로그인
      </button>
    </div>
  )
}

export default Login