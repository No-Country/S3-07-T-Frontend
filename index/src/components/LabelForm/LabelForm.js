import styled from "styled-components"

export default function LabelForm ({name, text}) {
  return <LabelStyled htmlFor={name}> {text} </LabelStyled>
}

const LabelStyled = styled.label`
  font-weight: bold;
`