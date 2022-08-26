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
    margin:3em;
    background:#7babc5;
    color: #fff;
    font-weight: bold;
    font-style: italic;
    `
  const MyImg=styled.img`
    width: 60%;
    object-fit: cover;
    margin:0px;
    `
  const Detalles=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,2fr));
    color: #fff;
    text-align: center;
    `
  // const Div2=styled.div`
  //   opacity:${mas?"1":"0"};
  //   `
  const Div1=styled.div`
    margin-top: 4%;
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
        <p>{proyect.description}</p>
        <MyButton onClick={handleClick}>Ver más</MyButton>  
      </Div1>
      {/* <Div2 >
        <MyButton onClick={handleClick}>Ocultar</MyButton> <br/>
      </Div2> */}
    </Detalles>
  )
}