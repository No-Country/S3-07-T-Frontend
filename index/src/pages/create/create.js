import styled from "styled-components"
import FormCreateProject from "../../components/FormCreateProject/FormCreateProject"


const TitleCreate = styled.h1`
  font-size: 20px;
  font-weight: medium;
`
const CreateStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  overflow-y: auto;
`

export default function Create () {
  return (
    <CreateStyled>
      <TitleCreate>Agrega tu proyecto</TitleCreate>
      <FormCreateProject/>
    </CreateStyled>
  )
}