import { useParams } from "react-router-dom"
import { ContainerVideoAndInfo, Description, ProjectDetailStyled, SectionTagsInDetail, TeamInfo, Title, Video} from "./ProjectDetailStyles"
import {Helmet} from "react-helmet"
import { useEffect, useState } from "react"
import { getProjectById } from "../../services/projectsServices"
import SliderTags from "../../components/SliderTags/SliderTags"
import { adapterToTagInSlider } from "../../components/MyProfile/MyProfile"
import { categoriesSearchsTypes } from "../../Types/articles_type"

const nameTeam = (team) => {
  return `${team.cohortType} ${team.cohortNumber} grupo ${team.group}`
}

export default function ProjectDetail(){
  const { idProject } = useParams()
  const [project, setProject] = useState(undefined)

  useEffect(() => {
    getProjectById(idProject)
      .then((res)=>{
        setProject(res) 
      })
      .catch(error => console.log(error))
  }, [idProject])


  if(!project){
    return(
      <></>
    )
  }

  return( 
    <ProjectDetailStyled>
      <Helmet>
        <title>{project.title ? project.title : "." } | NC community</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    
      <ContainerVideoAndInfo>
        <Video
          autoPlay
          controls
          loop
          muted
        >
          <source src={project.video} type="video/mp4" />
        </Video>      
        <Title>{project.title}</Title>
        <TeamInfo>
          {
            nameTeam(project.team)
          }
        </TeamInfo>
        <Description>
          <h2>Descripción</h2>
          <p>
            {project.description}
          </p>
        </Description>
      </ContainerVideoAndInfo>

      <SectionTagsInDetail>
        <h2>Participantes</h2>
        {
          project.team.devs.length ? 
            <SliderTags tags={adapterToTagInSlider(project.team.devs, categoriesSearchsTypes.profile)}/>
            : <p>No hay participantes descriptos aún sobre este proyecto</p>
        }
      </SectionTagsInDetail>

      <SectionTagsInDetail>
        <h2>Tecnologías</h2>
        {
          project.team.technologies.length ? 
            <SliderTags tags={adapterToTagInSlider(project.team.technologies, categoriesSearchsTypes.technology)}/>
            : <p>No hay tecnologías descriptas aún sobre este proyecto</p>
        }
      </SectionTagsInDetail>
        
    </ProjectDetailStyled>
  )
}
