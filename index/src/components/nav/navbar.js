import "./nav.css"
import styled from "styled-components"
import { Link ,useLocation } from "react-router-dom"
import {images} from "../../utils/images/images.js"


export default function NavBar(){
  const location=useLocation()
  


  const Menu= styled.nav`
  background: #f5f5f5
    color: #45b4ea;
    border-bottom:3px #fff solid;
    display:flex;
    flex-direction: wrap;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
    `
  const MyImg=styled.img`
    width: 16%;
    height: 54px;
    object-fit: cover;
    margin:0px;
    max-width: 130px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
    `
  return (
    <Menu className={location.pathname === "/" ? "hidden" : "menu"}>
      
      <MyImg src={images.ncLogo} />
      <Link to="/search/projects"className={(location.pathname ==="/search/projects") ? "current__link" : "navbar__link"} style={{ padding: "2vh" }}>
        Home
      </Link>
      <Link to="/login" className={location.pathname === "/login" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Login
      </Link>
      <Link to="/register" className={location.pathname === "/register" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Register
      </Link>
      <Link to="/create" className={location.pathname === "/create" ? "current__link" : "navbar__link"}  style={{ padding: "2vh" }}>
        Create
      </Link>
    </Menu>
  )
}