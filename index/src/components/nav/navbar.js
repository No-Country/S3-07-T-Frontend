import "./nav.css"
import styled from "styled-components"
import { Link ,useLocation } from "react-router-dom"
import {images} from "../../utils/images/images.js"

export default function NavBar(){
  const location=useLocation()
  console.log(location.pathname)
  const Menu= styled.nav`
    background: #45b4ea;
    color: #fff;
    display:flex;
    flex-direction: wrap;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    `
  const MyImg=styled.img`
    width: 16%;
    height: 54px;
    object-fit: cover;
    margin:1px;
    max-width: 100px;
    `
  return (
    <Menu className={location.pathname === "/" ? "hidden" : "menu"}>
      <MyImg src={images.menubg} />
      <Link to="/search/projects"className="navbar__link" style={{ padding: "2vh" }}>
        Home
      </Link>
      <Link to="/"className="navbar__link"  style={{ padding: "2vh" }}>
        Login
      </Link>
      <Link to="/register"className="navbar__link"  style={{ padding: "2vh" }}>
        Register
      </Link>
      <Link to="/create"className="navbar__link"  style={{ padding: "2vh" }}>
        Create
      </Link>
    </Menu>
  )
}