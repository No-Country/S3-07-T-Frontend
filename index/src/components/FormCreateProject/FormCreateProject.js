import axios from "axios"
import { useReducer, useState } from "react"
import { SERVER_URLS } from "../../configs/URLS"
import { JSONUserStorage } from "../../services/localStorage"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { filterIDsSync } from "../../utils/filterIDsSync"
import ModalAdd from "../ModalAdd/ModalAdd"
import { AddedCard, ContainerAddeds } from "../ModalAdd/stylesModalAdd"
import { reducerCreateProject } from "./reducerCreateProject"
import { ButtonAdd, ButtonAddOrDropProject, ContainerAddOrDrop, ContainerInputAdd, ContentAdd, DragAndDropStyled, DragAndDropTitle, FormCreateStyled, InputTitle, InputURL, Space, TextAdd } from "./stylesFormCreateProject"

const typeProject = {
  title: "",
  description: "",
  image: "",
  author: "",
  video: "",
  teamLeader: "",
  team: [],
  categories: [],
  technologies: [],
}

export default function FormCreateProject () {
  const [state, dispatch] = useReducer(reducerCreateProject, typeProject)
  const [isOpenModalTeam, setIsOpenModalTeam] = useState(false)
  const [isOpendModalTag, setisOpendModalTag] = useState(false)
  const [isOpenModalTech, setisOpendModalTech] = useState(false)


  const handleChangeValues = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
  }

  const handleClickAddThing = (e, type) => {
    e.preventDefault()
    const openModal = {
      tech: ()=>setisOpendModalTech(!isOpenModalTech),
      team: ()=>setIsOpenModalTeam(!isOpenModalTeam),
      tag: ()=>setisOpendModalTag(!isOpendModalTag), 
    }
    openModal[type]()
  }

  const handleClickAddProject = async(e) => {
    e.preventDefault()
    const dataProject = {
      ...state
    }
    dataProject.team = state.team.length ? state.team[0]._id : undefined
    dataProject.categories = state.categories.length 
      ? filterIDsSync(state.categories)
      : undefined

    dataProject.technologies = state.technologies.length 
      ? filterIDsSync(state.technologies)
      : undefined
      
    dataProject.author = JSONUserStorage._id
    await axios.post(SERVER_URLS.ADDPROJECT, dataProject)
  }
 
  return (
    <FormCreateStyled>
      <DragAndDropStyled>
        <DragAndDropTitle>¡Arrastra tu video acá!</DragAndDropTitle>
      </DragAndDropStyled>
      <InputURL type="text" placeholder="O escribe su URL aca" name="video" value={state.video} onChange={handleChangeValues}/>
      <InputTitle type="text" placeholder="Título" name="title" value={state.title} onChange={handleChangeValues}/>
      <ContainerInputAdd>
        <TextAdd>Equipo</TextAdd>
        <ContainerAddeds>
          {
            state.team.length ? 
              <AddedCard>
                {`${state.team[0].cohortType.substring(0,1)}${state.team[0].cohortNumber} - g${state.team[0].group}`}
              </AddedCard> 
              : ""
          }
          
        </ContainerAddeds>
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "team")}>+</ButtonAdd>
        <ModalAdd 
          type={categoriesSearchsTypes.team}
          title="Equipo" 
          active={[isOpenModalTeam, setIsOpenModalTeam]} 
          initialAddeds={[state.team, (addeds)=>dispatch({type:"team", payload:addeds})]} 
          limitAdd={1}
        />
      </ContainerInputAdd>
      <ContainerInputAdd>
        <TextAdd>Categorías</TextAdd>
        <ContainerAddeds>
          {
            state.categories.length ?
              state.categories.map((category, index)=>{
                return(
                  <AddedCard key={category._id || index}>
                    {`${category.name}`}
                  </AddedCard>
                ) 
              }) 

              : ""
          }
        </ContainerAddeds>
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "tag")}>+</ButtonAdd>
        <ModalAdd
          type={categoriesSearchsTypes.category}
          title="Categorias" 
          active={[isOpendModalTag, setisOpendModalTag]}
          initialAddeds={[state.categories, (addeds)=>dispatch({type:"categories", payload:addeds})]} 
        />
      </ContainerInputAdd>

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
          title="Tecnologías" 
          active={[isOpenModalTech, setisOpendModalTech]}
          initialAddeds={[state.technologies, (addeds)=>dispatch({type:"technologies", payload:addeds})]} 
        />
      </ContainerInputAdd>

      <ContainerInputAdd>
        <TextAdd>Descripción</TextAdd>
        <ContentAdd name="description" value={state.description} onChange={handleChangeValues}/>
      </ContainerInputAdd>

      <InputURL type="text" placeholder="URL de la imagen de presentación" name="image" value={state.image} onChange={handleChangeValues}/>

      <ContainerAddOrDrop>
        <ButtonAddOrDropProject isAdd onClick={handleClickAddProject}>Subir</ButtonAddOrDropProject>
        <ButtonAddOrDropProject>Descartar</ButtonAddOrDropProject>
      </ContainerAddOrDrop>

      <Space />
    </FormCreateStyled>
  )
}