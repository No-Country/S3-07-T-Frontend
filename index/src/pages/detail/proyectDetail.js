import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProyectById } from "../../redux/actions"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import NoRute from "../../components/NoRoute/noRoute"
import styled from "styled-components"
import { SectionTags } from "../../components/MyProfile/MyProfileStyles"
import SliderTags from "../../components/SliderTags/SliderTags"
import { adapterToTagInSlider } from "../../components/MyProfile/MyProfile"
import { getListTech } from "../../services/techsServices"
import { categoriesSearchsTypes } from "../../Types/articles_type"
import { getUserByID } from "../../services/usersServices"
//import { getListTeam } from "../../services/teamsServices"
//import CardAct from "./home/CardAct"

export default function ProyectDetail(){
  const [mas,setMas]=useState(false)
  const [textBtn, setTextBtn]=useState(">>")
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

  function handleClick(){
    console.log("llegó a handleClick")
    mas?setTextBtn("Ver más"):setTextBtn("<<")
    mas?setMas(false):setMas(true)
    
  }

  const MyButton=styled.button`
    padding:1em;
    margin: 3em;
    border: 3px #44b3e9 solid;
    background:#090909;
    color: #62f3d5;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-style: italic;
    z-index: 2;
    `
  const MyImg=styled.img`
    width: 60%;
    object-fit: cover;
    margin:0px;
    `
  const Detalles=styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,2fr));
    text-align: center;
    background: linear-gradient(to left, #00c981, transparent 50%, #fff 75%, #ddd 75%);
    `
  const Div2=styled.div`
  opacity:${mas?"1":"0"};
  display:flex;
  `
  const Div1=styled.div`
    margin-top: 4%;
    z-index: 2;
    `
  const Areatxt=styled.div`
  justify-content: center;
  text-align: left;
  font-family: font-family:'Verdana', sans-serif;
  font-size: small;
  color:#fff;
  background:#090909;
  padding: 2% 20% 2% 25%;
  `
  while(!proyect){
    return(
      <NoRute/>
    )
  }
  return( 
    <Detalles>
      <Div1>
        <MyImg src={proyect.image}  alt={"otra imagen"}  /> <br/>
        <p style={{textAlign: "left", paddingLeft:"25%"}} >{proyect.title}</p>
        <Areatxt>{proyect.description}</Areatxt>
        <MyButton onClick={handleClick} >{textBtn}</MyButton>
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
      <Div2 >
        
        <div style={{position:"absolute", whidt:"800px"}}>
          <MyButton style={{borderRadius:"50%", opacity:"0.6", marginLeft:"80%", marginBottom:"5%"}} onClick={handleClick}>X</MyButton> <br/>
          <video
            autoPlay
            controls
            loop
            muted
            style={{
              position: "relative",
              left:"1%",
              width: "90%",
              height: "50vh",
              objectFit: "cover",
              opacity:"0.9",
              border: "3px #44b3e9 solid",
              transform:"traslate(40%, 30%)",
            }}
          >
        
            <source src={proyect.video} type="video/mp4" />
          </video>
        </div>
        
      </Div2> 
    </Detalles>
  )
}