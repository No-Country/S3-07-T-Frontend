import styled from "styled-components"

export default  function InputForm  ({value, onChange, name, placeholder = "", type="text"}) {
  const handleChange = (e) => {
    onChange({type: name, payload: e.target.value})
  }

  return <InputStyled placeholder={placeholder} name={name} type={type} onChange={handleChange} value={value} autoComplete="newText"/>
}

const InputStyled = styled.input`
  background-color: #D9D9D9;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: .5em;
`