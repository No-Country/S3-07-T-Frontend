import axios from "axios"
import { useReducer, useState } from "react"
import { Helmet } from "react-helmet"
import { SERVER_URLS } from "../../configs/URLS"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { filterIDsSync } from "../../utils/filterIDsSync"
import { ButtonAdd, ButtonAddOrDropProject, ContainerAddOrDrop, ContainerInputAdd, TextAdd } from "../FormCreateProject/stylesFormCreateProject"
import ModalAdd from "../ModalAdd/ModalAdd"
import { AddedCard, ContainerAddeds } from "../ModalAdd/stylesModalAdd"
import { ContainerInputFormCreateTeam, FormCreateTeamStyled } from "./formCreateTeamStyles"
import { reducerCreateTeam } from "./reducerCreateTeam"
import { typeCreateTeam } from "./typeCreateTeam"

const createTeam = async (teamData) => {
  await axios.post(SERVER_URLS.ADDTEAM, teamData)
}

export default function FormCreateTeam () {
  const [state, dispatch] = useReducer(reducerCreateTeam, typeCreateTeam)
  const [isOpendModalTech, setIsOpendModalTech] = useState(false)
  const [isOpenModalDev, setIsOpenModalDev] = useState(false)
  const [isOpenModalTl, setIsOpenModalTl] = useState(false)

  const handleChangeInput = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
  }

  const handleClickAddTeam = () => {
    const dataTeam = {
      ...state
    }
    dataTeam.teamLeader = state.teamLeader.length ? state.teamLeader[0]._id : undefined
    dataTeam.technologies = state.technologies.length ? filterIDsSync(state.technologies) : undefined
    dataTeam.devs = state.devs.length ? filterIDsSync(state.devs) : undefined

    createTeam(dataTeam)    
      .then(() => alert("equipo creado"))
      .catch(error => alert("error al crear", JSON.stringify(error)) )
  }

  const handleClickAddThing = (e, type) => {
    const setModal = {
      tech: () => setIsOpendModalTech(!isOpendModalTech),
      dev: () => setIsOpenModalDev(!isOpenModalDev),
      tl: () => setIsOpenModalTl(!isOpenModalTl)
    }
    e.preventDefault()
    setModal[type]()
  }
  return (
    <FormCreateTeamStyled onSubmit={(e)=>e.preventDefault()}>
      <Helmet>
        <title> Agrega tu equipo | NC community </title>
        <meta name="description" content="Nc Community AGREGA TU PROYECTO" />
      </Helmet>
      <ContainerInputFormCreateTeam>
        <label htmlFor="cohortType">Tipo: 
          <input type="text" name="cohortType" value={state.cohortType} onChange={handleChangeInput}/>
        </label>

        <label htmlFor="cohortNumber">Número: 
          <input type="text" name="cohortNumber" value={state.cohortNumber} onChange={handleChangeInput} />
        </label>

        <label htmlFor="typgroupe">Grupo: 
          <input type="text" name="group" value={state.group} onChange={handleChangeInput} />
        </label>
      </ContainerInputFormCreateTeam>

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
          active={[isOpendModalTech, setIsOpendModalTech]}
          initialAddeds={[state.technologies , (addeds)=> dispatch({type:"technologies", payload: addeds})]} 
        />
      </ContainerInputAdd>


      <ContainerInputAdd>
        <TextAdd>Desarrolladores</TextAdd>
        <ContainerAddeds>
          {
            state.devs.length ?
              state.devs.map((category, index)=>{
                return(
                  <AddedCard key={category._id || index}>
                    {`${category.firstName} ${ category.lastName}`}
                  </AddedCard>
                ) 
              }) 

              : ""
          }
        </ContainerAddeds>
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "dev")}>+</ButtonAdd>
        <ModalAdd
          type={categoriesSearchsTypes.profile}
          title="Desarrolladores" 
          active={[isOpenModalDev, setIsOpenModalDev]}
          initialAddeds={[state.devs , (addeds)=> dispatch({type:"devs", payload: addeds})]} 
        />
      </ContainerInputAdd>

      <ContainerInputAdd>
        <TextAdd>Team Leader</TextAdd>
        <ContainerAddeds>
          {
            state.teamLeader.length ?
              state.teamLeader.map((category, index)=>{
                return(
                  <AddedCard key={category._id || index}>
                    {`${category.firstName} ${ category.lastName}`}
                  </AddedCard>
                ) 
              }) 

              : ""
          }
        </ContainerAddeds>
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "tl")}>+</ButtonAdd>
        <ModalAdd
          type={categoriesSearchsTypes.profile}
          title="Team Leader" 
          active={[isOpenModalTl, setIsOpenModalTl]}
          initialAddeds={[state.teamLeader , (addeds)=> dispatch({type:"teamLeader", payload: addeds})]} 
          limitAdd={1}
        />
      </ContainerInputAdd>


      <ContainerAddOrDrop>
        <ButtonAddOrDropProject isAdd onClick={handleClickAddTeam}>Subir</ButtonAddOrDropProject>
        <ButtonAddOrDropProject>Descartar</ButtonAddOrDropProject>
      </ContainerAddOrDrop>

    </FormCreateTeamStyled>
  )
}