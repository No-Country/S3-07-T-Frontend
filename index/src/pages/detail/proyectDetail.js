import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProyectById } from "../../redux/actions"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import NoRute from "../../components/NoRoute/noRoute"
import styled from "styled-components"
//import CardAct from "./home/CardAct"

export default function ProyectDetail(){
  const [mas,setMas]=useState(false)
  const dispatch= useDispatch()
  const {id}= useParams()
  const proyect= useSelector(store=>store.detail)
  useEffect(()=>{
    dispatch(getProyectById(id))
  }, [dispatch,id])


  function handleClick(){
    console.log("llegó a handleClick")
    mas?setMas(false):setMas(true)
  }

  const MyButton=styled.button`
    padding:1em;
    margin: 3em;
    border: 3px #44b3e9 solid;
    background:#090909;
    color: #62f3d5;
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
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,2fr));
    color: #6c2de3;
    text-align: center;
    background: linear-gradient(to left, #333, transparent 50%, #fff 75%, #333 75%);
    `
  const Div2=styled.div`
  opacity:${mas?"1":"0"};
  `
  const Div1=styled.div`
    margin-top: 4%;
    z-index: 2;
    `
  while(!proyect){
    return(
      <NoRute/>
    )
  }
  return( 
    <Detalles>
      <Div1>
        <p>{proyect._id}</p>
        <MyImg src={proyect.image}  alt={"otra imagen"}  /> <br/>
        <p style={{color:"#44b3e9"}}>{proyect.title}</p>
        <MyButton onClick={handleClick}>Ver más</MyButton>  
      </Div1>
      <Div2 >
        <p>{proyect.description}</p>
        <video
          autoPlay
          controls
          loop
          muted
          style={{
            position: "absolute",
            left:"40%",
            width: "56%",
            height: "50vh",
            objectFit: "cover",
            zIndex: 1,
            transform:"traslate(40%, 30%)",
          }}
        >
          <source src={proyect.video} type="video/mp4" />
        </video>
        <MyButton onClick={handleClick}>Ocultar</MyButton> <br/>
      </Div2> 
    </Detalles>
  )
}