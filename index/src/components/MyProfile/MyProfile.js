import { useEffect } from "react"
import { setUser } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import SliderTags from "../SliderTags/SliderTags"
import { useState } from "react"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { editAvatar, getUserByID } from "../../services/usersServices"
import { getListTeam } from "../../services/teamsServices"
import { Avatar, EditAvatar, MyProfileStyled, Name, Position, SectionTags } from "./MyProfileStyles"
import { getListTech } from "../../services/techsServices"
import { Icon } from "@iconify/react"
import { JSONUserStorage } from "../../services/localStorage"

export const adapterToTagInSlider = (tags, type) => {
  const category = categoriesSearchsTypes[type]
  if (!category) return []

  const adapters = {
    profile: (tag) => ({_id: tag._id , title: tag.firstName + " " + tag.lastName, image: tag.avatar}),
    technology: (tag) => ({_id: tag._id , title: tag.name, image: tag.image}),
    team: (tag) => ({_id: tag._id , title: tag.cohortType +  " " + tag.cohortNumber +  " " + "grupo " + tag.group, image: undefined}),
  }

  let tagsAdapteds = []

  for (let tag of tags) {
    tagsAdapteds.push(adapters[category](tag))
  }

  return tagsAdapteds
}


export default function MyProfile () {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [techs, setTechs] = useState([])
  const [teams, setTeams] = useState([])

  const handleSubmitFile = (e) => {
    const file = e.target.files[0]
    console.log(file)
    editAvatar(user._id, file)
  }

  useEffect(()=>{
    if(user.firstName !== "") return
    const idUser = JSONUserStorage._id
    getUserByID(idUser).then(user => dispatch(setUser(user)))
  }, [dispatch, user])

  useEffect(()=>{
    getListTech().then(setTechs)
    getListTeam().then(setTeams)
  }, [])
  
  return(
    <MyProfileStyled>
      <div style={{position:"relative"}}>
        <Avatar src={user.avatar}/>
        <EditAvatar htmlFor="avatar">
          <div>
            <Icon icon="fluent:image-edit-16-filled" color="#15141E" width={20}/>
          </div>
          <input type="file" name="avatar" id="avatar" onClick={handleSubmitFile}/>
        </EditAvatar>
      </div>
      <Name>
        {user.firstName} {user.lastName}
      </Name>
      <Position>
        Desarrollador: 
        {user.rolDes}
      </Position>
      <SectionTags>
        <span>Tecnologías</span>
        <SliderTags tags={adapterToTagInSlider(techs, categoriesSearchsTypes.technology)}/>
      </SectionTags>
      <SectionTags>
        <span>Equipos</span>
        <SliderTags tags={adapterToTagInSlider(teams, categoriesSearchsTypes.team)}/>
      </SectionTags>
    </MyProfileStyled>
  )
}