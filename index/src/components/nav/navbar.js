import "./nav.css"
import styled from "styled-components"
import { Link ,useLocation } from "react-router-dom"
import {images} from "../../utils/images/images.js"
import { LogoText } from "../Header/Header"

const Menu= styled.nav`
  background: #f5f5f5;
  color: #45b4ea;
  border-bottom:3px #fff solid;
  display:flex;
  flex-direction: wrap;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  `
const MyImg=styled.img`
    width: 80px;
    height: 50px;
    object-fit: cover;
    margin:0px;
    max-width: 130px;
    `

const ContainerLogo = styled.div`
  display: flex;
`
export default function NavBar(){
  const location = useLocation()
  
  return (
    <Menu className={location.pathname === "/" ? "hidden" : "menu"}>
      <ContainerLogo>
        <LogoText>NC Community</LogoText>
        <MyImg src={images.ncLogo} />
      </ContainerLogo>
      <Link to="/search/projects"className={(location.pathname.startsWith("/search") && location.pathname.length <= 16) ? "current__link" : "navbar__link"} style={{ padding: "2vh" }}>
        Inicio
      </Link>
      <Link to="/login" className={location.pathname === "/login" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Sesion
      </Link>
      <Link to="/create" className={location.pathname === "/create" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Crear
      </Link>
      <Link to="/my-profile" className={location.pathname === "/my-profile" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Mi perfil
      </Link>
    </Menu>
  )
}