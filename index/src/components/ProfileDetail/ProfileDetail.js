import { Container, CardContainer, Imagen, Titulo, Texto, ListTech } from "./assets/Styles"
import image1 from "./assets/image1.jpg"
import axios from "axios"
import {SERVER_URLS} from "../../configs/URLS"
import { useEffect } from "react"

const ProfileDetail = () => {
  const getDataUser = async(id)=>{
    const {GETUSERID} = SERVER_URLS
    try {
      const resUserData = await axios.get(`${GETUSERID}/${id}`)
      return resUserData.data
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect((id)=>{
    getDataUser(id)
  })
  return (
    <Container>
      <CardContainer >
        <Imagen>
          <img src={image1} alt="photo" />
        </Imagen>
        <Titulo>Luciano Olmedo</Titulo><br />
        <Texto >Puesto: Frontend Developer</Texto><br />
        <Texto >Tiempo: 9 meses</Texto><br />
        <Texto style={{ color: "purple" }}>ver más</Texto><br />
        <Texto>Tecnologías</Texto>
        <ListTech>
          <ul>
            <li>*REACT</li>
            <li>*NODEJS</li>
            <li>*MONGODB</li>
          </ul>
        </ListTech>
      </CardContainer>

    </Container>
  )
}






export default ProfileDetail