import { useParams } from "react-router-dom"
import styled from "styled-components"
import FormCreateProject from "../../components/FormCreateProject/FormCreateProject"
import FormCreateTeam from "../../components/FormCreateTeam/FormCreateTeam"


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
const forms = {
  project: <FormCreateProject/>,
  team: <FormCreateTeam/>
}

const categoryEs ={
  project: "proyecto",
  team: "equipo"
}

export default function Create () {
  const {categoryName} = useParams()

  return (
    <CreateStyled>
      <TitleCreate>Agrega tu {categoryEs[categoryName]}</TitleCreate>
      {forms[categoryName]}
    </CreateStyled>
  )
}