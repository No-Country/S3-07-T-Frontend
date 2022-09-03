import styled from "styled-components"
import { Link } from "react-router-dom"
//import { images } from "../../utils/images/images"


const TitleCreate = styled.h1`
  font-size: 20px;
  font-weight: medium;
`
const CreateStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  overflow-y: auto;
`
const Container=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 80vh;
aling-items:center;

`
const StyledButton=styled.button`
    display:flex;
    background-image: url("https://www.estrategiaynegocios.net/binrepository/600x400/0c0/0d0/none/26086/VHKU/equipodetrabajo.20_EN1311300_MG219711723.jpg");
    background-size: cover;
    background-position: center;
    font-family:roboto;
    font-size: 2em;
    text-decoration:none;
    border-radius:5px;
    border:3px #00C981 solid;
`

export default function SelectCreate () {  
  return (<div>
    <CreateStyled>
      <TitleCreate>Agrega tu </TitleCreate>
      <Container>
        <Link to={"/create/project"}><StyledButton style={{border:"4px #551a8b solid"}} ><p>+</p>Proyecto</StyledButton ></Link>
        <Link to={"/create/team"}><StyledButton style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxW-kDa5pXZkk5kvVuWeaoS2QTdzj9koSwQ&usqp=CAU)"}} > <p>+</p>Equipo</StyledButton></Link>
      </Container>
    </CreateStyled>
  </div>)
}