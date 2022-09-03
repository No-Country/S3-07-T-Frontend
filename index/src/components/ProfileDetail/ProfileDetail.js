import { Container, CardContainer, Titulo, Texto } from "./assets/Styles"
import image1 from "./assets/image1.jpg"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { useEffect } from "react"
import { getUserByID } from "../../services/usersServices"
import { useParams } from "react-router-dom"
import { ContainerVideoAndInfo, SectionTagsInDetail } from "../../pages/ProjectDetail/ProjectDetailStyles"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { adapterToTagInSlider } from "../MyProfile/MyProfile"
import SliderTags from "../SliderTags/SliderTags"
import { getListTech } from "../../services/techsServices"
import { Avatar } from "../MyProfile/MyProfileStyles"

const profileType = {
  "id": "",
  "firstName": "",
  "lastName": "",
  "rolDes": "",
  "phone": "",
  "email": "",
  "projects": [],
  "teams": []
}

const ProfileDetail = () => {
  const [profile, setProfile] = useState(profileType)
  const [technologies, setTechnologies] = useState([])
  const { idProfile } = useParams()

  useEffect(() => {
    getUserByID(idProfile)
      .then((res) => {
        console.log(res)
        setProfile(res)
      })
      .catch((error) => console.log(error))

    getListTech()
      .then(setTechnologies)
      .catch((error) => console.log(error))
  }, [idProfile])

  return (
    <Container>
      <Helmet>
        <title> Perfil | {`${profile.firstName} ${profile.lastName}` || "Perfil de NC"} </title>
      </Helmet>
      <CardContainer >

        <ContainerVideoAndInfo>
          <Avatar src={profile.avatar || image1} alt="photo" />
          <Titulo>{profile.firstName} {profile.lastName}</Titulo>
          <Texto >Puesto: {profile.rolDes} </Texto>
          <Texto >Tiempo: 9 meses</Texto>
          <Texto style={{ color: "purple" }}>ver más</Texto>
        </ContainerVideoAndInfo>
        <SectionTagsInDetail>
          <h2>Tecnologías</h2>
          {
            technologies.length ? 
              <SliderTags tags={adapterToTagInSlider(technologies, categoriesSearchsTypes.technology)}/>
              : <p>No hay tecnologías descriptas aún sobre este perfil</p>
          }
        </SectionTagsInDetail>

        <SectionTagsInDetail>
          <h2>Proyectos</h2>
          {
            profile.projects.length ? 
              <SliderTags tags={adapterToTagInSlider(profile.projects, categoriesSearchsTypes.project)}/>
              : <p>No hay proyectos descriptas aún sobre este perfil</p>
          }
        </SectionTagsInDetail>

      </CardContainer>

    </Container>
  )
}






export default ProfileDetail