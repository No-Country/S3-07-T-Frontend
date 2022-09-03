import axios from "axios"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { NavLink, useParams } from "react-router-dom"
import styled from "styled-components"
import ListCards from "../../components/ListCards/ListCards"
import SearchForm from "../../components/SearchForm/SearchForm"
import { SERVER_URLS } from "../../configs/URLS"

const MenuSearch = styled.nav`
color: #fff;
display: flex;
padding: 0;
margin-top: 10px;
margin-bottom: 8px;
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

const querySearch =  {
  projects: "title",
  teams: "team",
  profiles: "name"
}

const getListCategory = async (category, search, page) => {
  try {
    const urlOfCategory = getAll[TYPES_ARTICLES[category]]
    if (!urlOfCategory) throw new Error("No existe la url de esa categoria")
    console.log(urlOfCategory + `?page=${page}` + `&limit=${50}` + `&${querySearch[category]}=${search}`)
    const categoryList = await axios.get(urlOfCategory + `?page=${page}` + `&limit=${50}` + `&${querySearch[category]}=${search}`)
    return categoryList.data.docs
  } catch (error) {
    console.log(error)
    return []
  }
}

export default function Search () {
  const {articles:categoryParam} = useParams()
  const [allArticles, setAllArticles] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getListCategory(categoryParam, search, 0)
      .then(setAllArticles)
      .catch(setAllArticles)

    return setAllArticles([])
  }, [categoryParam, search])

  useEffect(() => {
    setSearch("")
  }, [categoryParam])

  return (
    <div style={{height: "100%"}}>
      <Helmet>
        <title> Home | NC community </title>
      </Helmet>
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
      </MenuSearch>
      <SearchForm changerSearch={setSearch}/>
      <ListCards articles={allArticles} type={categoryParam}/>
    </div>
  )
}