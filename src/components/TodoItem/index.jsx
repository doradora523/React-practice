import React from 'react'
import * as S from './style'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function TodoItem({ itemData, todoCheckHandler, todoRemoveHandler }) {
  return (
    <S.ItemContainer isChecked={itemData.checked}>
      <S.ItemButton onClick={() => todoCheckHandler(itemData.id)}>
        {itemData.checked ? <GrCheckboxSelected /> : <GrCheckbox />}
      </S.ItemButton>
      <S.ItemText>{itemData.date}</S.ItemText>
      <S.ItemText>{itemData.content}</S.ItemText>
      <S.ItemButton onClick={() => todoRemoveHandler(itemData.id)}>
        <AiOutlineCloseCircle />
      </S.ItemButton>
    </S.ItemContainer>
  )
}

export default TodoItem
