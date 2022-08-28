import axios from "axios"
import { useReducer, useState } from "react"
import { SERVER_URLS } from "../../configs/URLS"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import ModalAdd from "../ModalAdd/ModalAdd"
import { AddedCard, ContainerAddeds } from "../ModalAdd/stylesModalAdd"
import { reducerCreateProject } from "./reducerCreateProject"
import { ButtonAdd, ButtonAddOrDropProject, ContainerAddOrDrop, ContainerInputAdd, ContentAdd, DragAndDropStyled, DragAndDropTitle, FormCreateStyled, InputTitle, InputURL, Space, TextAdd } from "./stylesFormCreateProject"

const typeProject = {
  title: "",
  description: "",
  image: "",
  author: "6302f80e05c3ebcc65a24889",
  video: "",
  teamLeader: "",
  team: [],
  categories: [],
}

export default function FormCreateProject () {
  const [state, dispatch] = useReducer(reducerCreateProject, typeProject)
  const [isOpenModal, setIsOpenModel] = useState(false)
  const [isOpendModalTech, setisOpendModalTech] = useState()

  const handleChangeValues = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
  }

  const handleClickAddThing = (e, type = "participants") => {
    e.preventDefault()
    type === "participants" ? setIsOpenModel(!isOpenModal) : setisOpendModalTech(!isOpendModalTech)
  }

  const handleClickAddProject = async(e) => {
    e.preventDefault()
    const dataProject = {
      ...state
    }
    dataProject.team = state.team[0]._id
    dataProject.categories = (() => {
      const categoriesIDs = []
      for (let category of state.categories){
        categoriesIDs.push(category._id)
      }
      return categoriesIDs
    })()
    dataProject.author = "6302f80e05c3ebcc65a24889"
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
        <ButtonAdd onClick={handleClickAddThing}>+</ButtonAdd>
        <ModalAdd 
          type={categoriesSearchsTypes.team}
          title="Equipo" 
          active={[isOpenModal, setIsOpenModel]} 
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
        <ButtonAdd onClick={(e)=>handleClickAddThing(e, "tech")}>+</ButtonAdd>
        <ModalAdd
          type={categoriesSearchsTypes.category}
          title="Categorias" 
          active={[isOpendModalTech, setisOpendModalTech]}
          initialAddeds={[state.categories, (addeds)=>dispatch({type:"categories", payload:addeds})]} 
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