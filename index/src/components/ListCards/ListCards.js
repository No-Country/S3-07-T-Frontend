import { Link } from "react-router-dom"
import styled from "styled-components"
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

export default function ListCards ({articles = articlesMock, type = ""}) {

  if(!articles.length) {
    articles = articlesMock
  }

  return (
    <ListCardsStyled>
      {articles.length !== 0 && articles
        .map((article ,index) => (
          <li key={article._id || index}>
            <Link to={"/search/" + type + "/" + article._id}>
              <Card article={parseArticle(article, type)}/>
            </Link>
          </li>
        ))
      }
    </ListCardsStyled>
  )
}