import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import NavBar from "../nav/navbar"
// import NavBarMobile from "../NavbarMobile/NavbarMobile"

export default function Header (){
  const [widthScreen]= useWindowSize()


  return (
    widthScreen < 1024 
      ? 
      <HeaderStyled>
        <LogoText>Nc Community</LogoText>
      </HeaderStyled>
      : 
      <NavBar/>
  )
}

export const LogoText = styled.h1`
  font-size: 24px;
  background: linear-gradient(to bottom, #9C7EEA 0%, #00C981 50%,#9C7EEA 80%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin: 0;
  display: flex;
  text-align: center;
  justify-content:center;
  align-items: center;
`

const HeaderStyled = styled.div`
  flex-grow: 1;
  padding: 11px 1em;
  text-align: center;
  max-height: 50px;
`