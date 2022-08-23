import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import NavBar from "../nav/navbar"
// import NavBarMobile from "../NavbarMobile/NavbarMobile"

export default function Header (){
  const size= useWindowSize()
  if (size[0]<1024) {
    return <LogoText>Nc Community</LogoText>
  }else{
    return (
    
      <>
        {
        /*
        <HeaderStyled>
          <NavBarMobile></NavBarMobile>
          <LogoText>Nc Community</LogoText>
        </HeaderStyled>
        */
        }
        <NavBar/>
      </>
    )

  }
}

const LogoText = styled.h1`
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
/*
const HeaderStyled = styled.div`
flex-grow: 1;
  padding: 11px 1em;
  text-align: center;
`
*/