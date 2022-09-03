import styled from "styled-components"

const ActionSliderStyled = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  width: 272px;
  margin: auto;
`

export default function ActionSlider ({children}) {

  return (
    <ActionSliderStyled>
      {children}
    </ActionSliderStyled>
  )
}