import styled from "styled-components"

export const ModalAddStyled = styled.div`
  position: absolute;
  height: ${(props) => props.active ? "100%" : "0"};
  width: ${(props) => props.active ? "100%" : "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 11;
  & > div {
    background-color: white;
    width: 90%;
    height: max-content;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid #A8A8A8;
  };
`

export const Result = styled.li`
  display: flex;
  gap: 3px;
  min-height: 39px;
  padding: 0 3px ;
  justify-content: flex-start;
  align-items: center;
`

export const ResultsList = styled.ul`
  border: 1px solid #A8A8A8;
  list-style: none;
  padding: 3px 3px;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: max-content;
  max-height: 117px;
  overflow-y: auto;
`

export const ContainerSearch = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

export const ContainerSearchAndButton = styled.div`
  display: flex;

  & > button {
    height: 24px;
  }
`

export const FormSearchAdd = styled.form`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const ContainerAddeds = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: auto;
  overflow-y: none;
  padding: 0;
  gap: 3px;
  max-width: 100%;
  padding: 0 3px;
  margin: 0;
`
export const AddedCard = styled.li`
  padding: 3px;
  font-size: 12px;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
`

export const ButtonAddedCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  color: white;
  background-color: #FB395C;
  font-size: 11px;
  margin-left: 3px;
  border-radius: 3em;
`