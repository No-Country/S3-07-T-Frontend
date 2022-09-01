import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProyectById } from "../../redux/actions"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import NoRute from "../../components/NoRoute/noRoute"
import { SectionTags } from "../../components/MyProfile/MyProfileStyles"
import SliderTags from "../../components/SliderTags/SliderTags"
import { adapterToTagInSlider } from "../../components/MyProfile/MyProfile"
import { getListTech } from "../../services/techsServices"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { getUserByID } from "../../services/usersServices"
import { Areatxt, Detalles, Div1, Title} from "./detailStyles"
import {Helmet} from "react-helmet"

export default function ProyectDetail(){
  

  const dispatch= useDispatch()
  const {id}= useParams()
  const proyect= useSelector(store=>store.detail)
  const user= useSelector(store=>store.user)
  const [techs, setTechs] = useState([])
  const [persons, setPersons] = useState([])
  
  
  useEffect(()=>{
    dispatch(getProyectById(id))
  }, [dispatch,id])
  useEffect(()=>{
    getListTech().then(setTechs)
    getUserByID().then(setPersons) 
  }, [])

  

  
  if(!proyect){
    return(
      <NoRute/>
    )
  }
  return( 
    <Detalles>
      <Helmet>
        <title>{proyect.title? proyect.title :"." } | NC community</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    
      <Div1>
        <div style={{background:"#F5F5F5", whidt:"800px", marginTop:"1em"}}>
          {/* <MyButton style={{borderRadius:"50%", opacity:"0.8", marginLeft:"80%", marginBottom:"5%"}} onClick={handleClick}>X</MyButton> <br/> */}
          <video
            autoPlay
            controls
            loop
            muted
            style={{
              position: "relative",
              left:"1%",
              width: "90%",
              height: "40vh",
              objectFit: "cover",
              opacity:"0.9",
              border: "3px #000 solid",
              transform:"traslate(40%, 30%)",
            }}
          >
            <source src={proyect.video} type="video/mp4" />
          </video>
        </div>
      
        <Title>{proyect.title}</Title>
        <Areatxt>{proyect.description}</Areatxt>
      </Div1>
      <Div1>
        <h3>  Grupo {proyect.team && proyect.team.group} </h3>
        {proyect.team?console.log(proyect):console.log("no hay objeto detail") }
        <h3>  Cohorte  {proyect.team&& proyect.team.cohortNumber} </h3>
        <h3>  Fase <span>{proyect.team&& proyect.team.cohortType}</span> </h3>

        
        {/* <MyButton onClick={handleClick} >{textBtn}</MyButton> */}
        <SectionTags>
          <span>Tecnologías</span>
          <SliderTags tags={adapterToTagInSlider(techs, categoriesSearchsTypes.technology)}/>
        </SectionTags>
        <SectionTags>
          <span>Participantes</span>
          {console.log(persons)}
          <SliderTags tags={adapterToTagInSlider(persons?[persons,persons]:[user,user], categoriesSearchsTypes.profile)}/>
        </SectionTags>
      </Div1>
        
      
    </Detalles>
  )
}

// function handleClick(){
//   console.log("llegó a handleClick")
//   mas?setTextBtn("Ver más"):setTextBtn("<<")
//   mas?setMas(false):setMas(true)
  
// }