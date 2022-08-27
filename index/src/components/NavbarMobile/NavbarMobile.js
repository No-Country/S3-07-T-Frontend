import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import useWindowSize from "../../hooks/useWindowSize"

export default function NavBarMobile() {
  const navigate = useNavigate()
  const size = useWindowSize()
  return (
    <NavBarMobileStyled>
      <LinkStyled to="/search/projects">
        <Icon icon="akar-icons:home" color="#777777" width={"25px"} height={"25px"} />
      </LinkStyled>
      {size[0] < 1024 && <ButtonAddStyled onClick={()=>navigate("/create")}>+</ButtonAddStyled>}
      <LinkStyled to="/my-profile">
        <Icon icon="bi:person" color="#777777" width={"31px"} height={"31px"} />
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
  background-color: #00c981;
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
  &:visited {
    color: inherit;
  }
`
