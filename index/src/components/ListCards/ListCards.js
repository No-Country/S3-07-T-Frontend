import styled from "styled-components"
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

export default function ListCards ({articles = articlesMock}) {
  return (
    <ListCardsStyled>
      {articles.length !== 0 && articles
        .map((article ,index) => <li key={index}><Card article={article}/></li>)}
    </ListCardsStyled>
  )
}