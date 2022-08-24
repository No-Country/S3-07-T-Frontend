import styled from "styled-components"

export const FormCreateStyled = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const DragAndDropStyled = styled.div`
  border: 2px dashed #9C7EEA;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  min-height: 200px;
  align-items: center;
`

export const DragAndDropTitle = styled.span`
  font-size: 14px;
  color: #6840D0;
`

export const InputURL = styled.input`
  border: 1px solid transparent;
  background: linear-gradient(to right, #D9D9D9 0%, #E4E4E4 50%, #F1F1F1 100%);
  border-radius: 6px;
  padding: 6px;
  &::placeholder{
    color: #6840D0;
  }
` 
export const InputTitle = styled.input`
  color: #2D2D2D;
  font-size: 20px;
`

export const ContainerInputAdd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
` 

export const ButtonAdd = styled.button`
  background-color: #9C7EEA;
  border: 1px solid transparent;
  box-shadow: 1px 1px 1px 1px gray;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export const TextAdd = styled.h2`
  margin: 0;
  font-weight: medium;
  font-size: 16px;
  color: #2D2D2D;
`

export const ContentAdd = styled.textarea`
  resize: none;
  border: 1px solid gray;
  min-height: 100px;
  &::placeholder{
    color: #767474
  }
`

export const ContainerAddOrDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  padding-bottom: 50px;
  gap: 30px;
`

export const ButtonAddOrDropProject = styled.button`
  border: 1px solid transparent;
  color: white;
  background-color: ${(props)=> props.isAdd ?  "#047B50" : "#FB395C"};
  box-shadow: 1px 1px 1px 1px gray;
  min-width: 80px;
  min-height: 60px;
  font-size: 12px;
  border-radius: 6px;
  
`
export const Space = styled.div`
  min-height: 0px;
`