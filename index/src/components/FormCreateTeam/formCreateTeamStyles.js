import styled from "styled-components"

export const ContainerInputFormCreateTeam = styled.div`
  display: flex;
  gap: 10px;
  max-width: 100%;
  flex-wrap: wrap;

  & > label {
    font-size: 14px;
  }
  & > label > input {
    width: 100px;
    background-color: #D9D9D9;
    border: 1px solid transparent;
    border-radius: 2px;
  }
`

export const ContainerInputFormCreate = styled.div`
  display: flex;
  gap: 10px;
  max-width: 100%;
  flex-wrap: wrap;

  & > label {
    font-size: 14px;
  }
  & > label > input {
    width: 100px;
    background-color: #D9D9D9;
    border: 1px solid transparent;
    border-radius: 2px;
  }
`

export const FormCreateTeamStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
