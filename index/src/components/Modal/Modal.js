import styled from "styled-components"

const ModalStyled = styled.div`
  height: 100%;
  width: 100%;
  visibility: ${({active})=>active ? "visibility" :"hidden"};
`

export default function Modal ({children, active=false}) {
  return (
    <ModalStyled active={active}>
      {children}
    </ModalStyled>
  )
}