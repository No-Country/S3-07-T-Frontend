import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"
import { SERVER_URLS } from "../../configs/URLS"
import { setUser } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import SliderTags from "../SliderTags/SliderTags"
import { useState } from "react"


const getUserByID = async () => {
  try {
    const res = await axios.get(`${SERVER_URLS.GETUSERID}/6302f80e05c3ebcc65a24889`)
    console.log(res)
    return res.data.UserSprint
  } catch (error) {
    return requestError(error)
  }
}

const requestError = (error) => {
  console.error("erorr", error)
  return {

  }
}


const getListTech = async() => {
  try {
    const resList = await axios.get(SERVER_URLS.ALLTECHS)
    return resList.data
  } catch (error) {
    return requestError(error)
  }
}

const MyProfileStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 1em;
  padding: 1em 0;
`

const Avatar = styled.img`
  min-height: 155px;
  min-width: 155px;
  border: 1px solid black;
  border-radius: 155px;
`

const Name = styled.h1`
  margin: 0;
`

const Position = styled.span`

`

const SectionTags = styled.div`
  min-height: 180px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1em;

  & > span {
    margin-bottom: -20px;
    z-index: 1;
  }
`


export default function MyProfile () {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [techs, setTechs] = useState([])
  useEffect(()=>{
    if(user.firstName !== "") return
    getUserByID().then(user => dispatch(setUser(user)))
  }, [dispatch, user])
  

  useEffect(()=>{
    getListTech().then(setTechs)

  }, [])
  return(
    <MyProfileStyled>
      <Avatar/>
      <Name>
        {user.firstName} {user.lastName}
      </Name>
      <Position>
        Desarrollador: 
        {user.rolDes}
      </Position>
      <SectionTags>
        <span>Tecnologías</span>
        <SliderTags tags={techs}/>
      </SectionTags>
      <SectionTags>
        <span>Equipos</span>
        <SliderTags tags={[1, 2, 3, 4]}/>
      </SectionTags>
    </MyProfileStyled>
  )
}