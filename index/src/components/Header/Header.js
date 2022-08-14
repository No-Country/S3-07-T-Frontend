import styled from "styled-components"

export default function Header (){
  return (
    <HeaderStyled>
      <LogoText>Nc Community</LogoText>
    </HeaderStyled>
  )
}

const LogoText = styled.h1`
  font-size: 24px;
  background: linear-gradient(to bottom, #9C7EEA 0%, #00C981 50%,#9C7EEA 80%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const HeaderStyled = styled.div`
  padding: 11px 1em;
  text-align: center;
`