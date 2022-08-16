import { NavLink, useParams } from "react-router-dom"
import styled from "styled-components"
import ListCards from "../../components/ListCards/ListCards"

const MenuSearch = styled.nav`
color: #fff;
display: flex;
padding: 0;
justify-content: center;
align-items: center;
display: flex;
justify-content: space-between;
padding:  13px 20px;
font-size: 14px;
`
const NavLinkStyled = styled(NavLink)`
text-decoration: none;
color: black;
padding: 0;
&:visited{
  color: black;
}
`

const UnderLine = styled.div`
height: 3px;
width: 100%;
background-color: ${(props)=> props.active ? "#00C981" : "transparent" };
`

export default function Search () {
  const {articles} = useParams()

  return (
    <div style={{overflowY: "auto"}}>
      <MenuSearch>
        <NavLinkStyled to='/search/projects'>
          Proyectos
          <UnderLine active={articles === "projects"}/>
        </NavLinkStyled> 
        <NavLinkStyled to='/search/profiles'>
          Perfiles
          <UnderLine active={articles === "profiles"}/>
        </NavLinkStyled>
        <NavLinkStyled to='/search/teams'>
          Equipos
          <UnderLine active={articles === "teams"}/>
        </NavLinkStyled> 
        <NavLinkStyled to='/search/foro'>
          Foro
          <UnderLine active={articles === "foro"}/>
        </NavLinkStyled>
      </MenuSearch>
      <ListCards />
    </div>
  )
}