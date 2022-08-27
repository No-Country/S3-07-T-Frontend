import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import styled from "styled-components"
import ListCards from "../../components/ListCards/ListCards"
import { SERVER_URLS } from "../../configs/URLS"

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

const TYPES_ARTICLES = {
  projects: "projects",
  profiles: "profiles",
  teams: "teams",
  foro: "foro"
}

const getAll = {
  projects: SERVER_URLS.ALLPROJECTS,
  profiles: SERVER_URLS.ALLUSERS,
  teams: SERVER_URLS.ALLTEAMS,
  foro: SERVER_URLS.ALLPUBLICATIONS,
}

const getListCategory = async(category) => {
  try {
    const urlOfCategory = getAll[TYPES_ARTICLES[category]]
    if (!urlOfCategory) throw new Error("No existe la url de esa categoria")
    const categoryList = await axios.get(urlOfCategory)
    return categoryList.data.docs
  } catch (error) {
    console.log(error)
    return []
  }
}


export default function Search () {
  const {articles:categoryParam} = useParams()
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    getListCategory(categoryParam).then(setAllArticles).catch(setAllArticles)
  }, [categoryParam])

  return (
    <div style={{overflowY: "auto", height: "100%"}}>
      <MenuSearch>
        <NavLinkStyled to='/search/projects'>
          Proyectos
          <UnderLine active={categoryParam === TYPES_ARTICLES.projects}/>
        </NavLinkStyled> 
        <NavLinkStyled to='/search/profiles'>
          Perfiles
          <UnderLine active={categoryParam === TYPES_ARTICLES.profiles}/>
        </NavLinkStyled>
        <NavLinkStyled to='/search/teams'>
          Equipos
          <UnderLine active={categoryParam === TYPES_ARTICLES.teams}/>
        </NavLinkStyled> 
        <NavLinkStyled to='/search/foro'>
          Foro
          <UnderLine active={categoryParam === TYPES_ARTICLES.foro}/>
        </NavLinkStyled>
      </MenuSearch>
      <ListCards articles={allArticles} type={categoryParam}/>
    </div>
  )
}