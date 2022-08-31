import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { parseArticle } from "../../utils/adapters"
import Card from "../Card/Card"

const articlesMock = [
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  },
  {
    image: "https://picsum.photos/700/400?random",
    title: "Nc Community",
    technologies: ["React" , "Node.js"],
    team: "Seleccionado 3 - Grupo 7",
    description: "Sitio web donde encontraras todos los proyectos creados por la com...",
  }
]


const ListCardsStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0;
  margin: 0;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0);
  &:visited{
    color: rgba(0, 0, 0);
  }
`
const loading = keyframes`
  0%{
    opacity: 0.4;
  }
  50% {
    opacity: 0.5;
  }
  100%{
    opacity: 0.6;
  }
`

const MySkeleton = styled.div`
  background-color: #D9D9D9;
  animation: ${loading} 2s linear infinite;
  width: 90%;
  height: 110px;
  margin: auto;
  opacity: 0.6;
`

export default function ListCards ({articles = [], type = ""}) {
  return (
    <ListCardsStyled>
      {articles.length !== 0 
        ? articles
          .map((article) => (
            <li key={article._id}>
              <LinkStyled to={"/search/" + type + "/" + article._id}>
                <Card article={parseArticle(article, type)}/>
              </LinkStyled>
            </li>
          ))
        : articlesMock
          .map ((_, index) =>(
            <MySkeleton key={index}>
            </MySkeleton>
          )
          )
      }
    </ListCardsStyled>
  )
}