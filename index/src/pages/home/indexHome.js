import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
export default function IndexHome () {
  const Menu2= styled.div`
    background: #000;
    color: #fff;
    display:flex;
    flex-direction: raw;
    padding: 0;
    justify-content: center;
    align-items: center;
    `
    
  return (<div>I am general Home
    <Menu2>
      <NavLink to='proyectos' style={{color:"#61f2d4", padding:"20px"}}>Proyectos</NavLink> 
      <NavLink to='perfiles' style={{color:"#fff", padding:"20px"}} >Perfiles</NavLink>
      <NavLink to='equipos' style={{color:"#61f2d4", padding:"20px"}} >Equipos</NavLink> 
      <NavLink to='foro' style={{color:"#fff", padding:"20px"}}>Foro</NavLink>
    </Menu2>
    <Outlet/>
  </div>)
}