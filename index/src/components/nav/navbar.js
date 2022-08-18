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
    flex-direction: raw;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    `
  const MyImg=styled.img`
    width: 10%;
    height: 30px;
    object-fit: cover;
    margin:1px;
    `
  return( 
    <Menu className={location.pathname==="/"?"hidden": "menu"} >
      <MyImg src={images.menubg} />
      <Link to="home/" style={{padding:"2vh"}} >Home</Link> 
      <Link to="/"  style={{padding:"2vh"}}>Login</Link> 
      <Link to="/register" style={{padding:"2vh"}} >Register</Link> 
      <Link to="/create"  style={{padding:"2vh"}}>Create</Link>
    </Menu>
  )
}