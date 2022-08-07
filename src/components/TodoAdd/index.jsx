import React, { useState } from 'react'
import * as S from './style'

function TodoAdd({ todoId, todoData, setTodoData }) {
  const [userInput, setUserInput] = useState({ date: '', content: '' })

  const useInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const todoAddHandler = (userInput) => {
    setTodoData([
      ...todoData,
      {
        id: todoId.current,
        date: userInput.date,
        content: userInput.content,
        checked: false,
      },
    ])
    todoId.current += 1
  }
  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={useInputHandler} />
      <S.AddInput name="content" onChange={useInputHandler} />
      <S.AddButton onClick={() => todoAddHandler(userInput)}>
        추가하기
      </S.AddButton>
    </S.AddContainer>
  )
}

export default TodoAdd
