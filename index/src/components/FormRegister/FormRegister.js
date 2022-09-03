import styled from "styled-components"
import { styles } from "../../configs/styles"

export default function FormRegister ({children, onSubmit = ()=>{}, ...props}) {
  return( 
    <FormRegisterStyled onSubmit={onSubmit} {...props} >
      {children}
    </FormRegisterStyled>
  )
}

const FormRegisterStyled = styled.form`
  position: relative;
  display: flex;
  border: 1px solid transparent;
  padding: 0 1em;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin: 1em auto;
  background-color: white;
  height: 250px;
  max-height: 100%;
  border-radius: 1em;
  width: 272px;
  max-width: 90%;
  &::after{
    position: absolute;
    top: -${styles.borderRadiusForms}px; bottom: -${styles.borderRadiusForms}px;
    left: -${styles.borderRadiusForms}px; right: -${styles.borderRadiusForms}px;
    background: linear-gradient(to bottom, #9C7EEA 0%, #00C981 50%,#9C7EEA 100%);
    content: '';
    z-index: -1;
    border-radius: 16px;
  }
`