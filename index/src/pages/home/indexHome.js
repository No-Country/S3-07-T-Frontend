import { Link, Outlet } from "react-router-dom"
export default function IndexHome () {
  return (<div>I am general Home
    <br/>
    <Link to='proyectos' >Proyectos</Link> <br />
    <Link to='perfiles' >Perfiles</Link> <br /> 
    <Link to='equipos' >Equipos</Link> <br />
    <Link to='foro' >Foro</Link> <br />
    <br />
    <Outlet/>
  </div>)
}