import { Link } from "react-router-dom"
import styled from "styled-components"
// eslint-disable-next-line quotes
import { Icon } from '@iconify/react'

export default function NavBarMobile () {
  return (
    <NavBarMobileStyled>
      <LinkStyled to="/home" >
        <Icon icon="akar-icons:home" color="#777777" width={"25px"} height={"25px"}/>
      </LinkStyled>
      <ButtonAddStyled>+</ButtonAddStyled>
      <LinkStyled to="/profile">
        <Icon icon="bi:person" color="#777777" width={"31px"} height={"31px"}/>
      </LinkStyled>
    </NavBarMobileStyled>
  )
}

const NavBarMobileStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  flex-grow: 1;
  width: 100%;
  padding: 0 29px;
  bottom: 0;
  height: 43px;
  max-height: 43px;
  `

const ButtonAddStyled = styled.button`
  background-color: #00C981;
  color: white;
  border: 1px solid transparent;
  border-radius: 50%;
  font-weight: medium;
  width: 50px;
  height: 50px;
  font-size: 32px;
  transform: translateY(-15px);
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:visited{
    color: inherit;
  }
`