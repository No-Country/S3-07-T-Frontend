import axios from "axios"
import { useReducer, useState } from "react"
import styled from "styled-components"
import { SERVER_URLS } from "../../configs/URLS"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { ButtonAdd, ButtonAddOrDropProject, ContainerAddOrDrop, ContainerInputAdd, TextAdd } from "../FormCreateProject/stylesFormCreateProject"
import ModalAdd from "../ModalAdd/ModalAdd"
import { AddedCard, ContainerAddeds } from "../ModalAdd/stylesModalAdd"

const createTeam = async (teamData) => {
  await axios.post(SERVER_URLS.ADDTEAM, teamData)
}

const ContainerInputFormCreate = styled.div`
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

const FormCreateTeamStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const typeCreateTeam = {
  cohortType : "",
  cohortNumber: "",
  group: "",
  teamLeader: "6302f80e05c3ebcc65a24889",
  technologies: []
}

const reducerCreateTeam = (state, action) => {
  switch (action.type) {
  case "cohortType":
    return {
      ...state,
      cohortType: action.payload
    }
  case "cohortNumber":
    return {
      ...state,
      cohortNumber: action.payload
    }
  case "group":
    return {
      ...state,
      group: action.payload
    }
  case "teamLeader":
    return {
      ...state,
      teamLeader: action.payload
    }   
  case "technologies":
    return {
      ...state,
      technologies: action.payload
    }
  default:
    return state
  }
}

export default function FormCreateTeam () {
  const [state, dispatch] = useReducer(reducerCreateTeam, typeCreateTeam)
  const [isOpendModalTech, setisOpendModalTech] = useState()

  const handleChangeInput = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
  }

  const handleClickAddTeam = () => {
    const dataTeam = {
      ...state
    }
    dataTeam.technologies = (() => {
      const categoriesIDs = []
      for (let category of state.technologies){
        categoriesIDs.push(category._id)
      }
      return categoriesIDs
    })()
    createTeam(dataTeam)    
      .then(() => alert("equipo creado"))
      .catch(error => alert("error al crear", JSON.stringify(error)) )
  }

  const handleClickAddThing = (e) => {
    e.preventDefault()
    setisOpendModalTech(!isOpendModalTech)
  }
  return (
    <FormCreateTeamStyled onSubmit={(e)=>e.preventDefault()}>
      <ContainerInputFormCreate>
        <label htmlFor="cohortType">Tipo: 
          <input type="text" name="cohortType" value={state.cohortType} onChange={handleChangeInput}/>
        </label>

        <label htmlFor="cohortNumber">Número: 
          <input type="text" name="cohortNumber" value={state.cohortNumber} onChange={handleChangeInput} />
        </label>

        <label htmlFor="typgroupe">Grupo: 
          <input type="text" name="group" value={state.group} onChange={handleChangeInput} />
        </label>
      </ContainerInputFormCreate>

      <ContainerInputAdd>
        <TextAdd>Tecnologías</TextAdd>
        <ContainerAddeds>
          {
            state.technologies.length ?
              state.technologies.map((category, index)=>{
                return(
                  <AddedCard key={category._id || index}>
                    {`${category.name}`}
                  </AddedCard>
                ) 
              }) 

              : ""
          }
        </ContainerAddeds>
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "tech")}>+</ButtonAdd>
        <ModalAdd
          type={categoriesSearchsTypes.technology}
          title="Tecnologias" 
          active={[isOpendModalTech, setisOpendModalTech]}
          initialAddeds={[state.technologies , (addeds)=> dispatch({type:"technologies", payload: addeds})]} 
        />
      </ContainerInputAdd>


      <ContainerAddOrDrop>
        <ButtonAddOrDropProject isAdd onClick={handleClickAddTeam}>Subir</ButtonAddOrDropProject>
        <ButtonAddOrDropProject>Descartar</ButtonAddOrDropProject>
      </ContainerAddOrDrop>

    </FormCreateTeamStyled>
  )
}