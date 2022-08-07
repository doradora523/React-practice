import styled from 'styled-components'

export const AddContainer = styled.div`
  ${({ theme }) => theme.common.flexAround};
  flex-shrink: 0;

  color: #fff;
  width: 90%;
  margin-bottom: 1rem;

  font-family: 'BlackHanSans';
`

export const AddButton = styled.button`
  ${({ theme }) => theme.common.flexCenter};
  border: none;
  outline: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.palette.pink};
  height: 2rem;
  width: 5rem;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }
`

export const AddInput = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0rem 0.5rem;

  height: 2rem;
  width: 30%;
`
