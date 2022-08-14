import FormRegister from "../../components/FormRegister/FormRegister"
import { ContainInputForm } from "../../components/ContainInputForm/ContainInputForm"
import InputForm from "../../components/InputForm/InputForm"
import LabelForm from "../../components/LabelForm/LabelForm"
import { useReducer} from "react"
import ActionSlider from "../../components/ActionSlider/ActionSlider"
import { ButtonFormStyled } from "../../components/ButtonForm/ButtonForm"
import axios from "axios"


const reducerLogin = (state, action) => {
  switch (action.type) {
  case "email":
    return {
      ...state,
      email: action.payload
    }
  case "password":
    return {
      ...state,
      password: action.payload
    }
  default:
    break
  } 
}

export default function Login () {
  const [state, dispatch] = useReducer(reducerLogin, {
    email: "",
    password: ""
  })


  const handleOnClick = async(e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:3002/api/signIn", state)
    console.log(res)
  }

  return (
    <>
      <FormRegister>
        <ContainInputForm>
          <LabelForm name="email" text="correo electrónico"/>
          <InputForm name="email" placeholder="example@correo.com" value={state.email} onChange={dispatch}/>
        </ContainInputForm>

        <ContainInputForm>
          <LabelForm name="password" text="contraseña"/>
          <InputForm name="password" placeholder="***" type="password" value={state.password} onChange={dispatch}/>
        </ContainInputForm>
      </FormRegister>
      <ActionSlider>
        <ButtonFormStyled onClick={handleOnClick}>
          Iniciar Sesión
        </ButtonFormStyled>
      </ActionSlider>
    </>

  )

}