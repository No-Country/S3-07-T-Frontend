import FormRegister from "../../components/FormRegister/FormRegister"
import { ContainInputForm } from "../../components/ContainInputForm/ContainInputForm"
import InputForm from "../../components/InputForm/InputForm"
import LabelForm from "../../components/LabelForm/LabelForm"
import { useReducer} from "react"
import ActionSlider from "../../components/ActionSlider/ActionSlider"
import { ButtonFormStyled } from "../../components/ButtonForm/ButtonForm"
import "./Login.css"
import { login } from "../../services/usersServices"
import { saveDataLogin } from "../../services/localStorage"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"


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

  const navigate = useNavigate()

  const clickLogin = async(e) => {
    try {
      e.preventDefault()
      const res = await login(state)
      saveDataLogin(res)
      return navigate("/")
    } catch (error) {
      return alert("error")
    }
  }

  return (
    <div className="Login">
      <Helmet>
        <title>{"Login" } | NC community</title>
        <meta name="description" content="Login | Nc community Iniciar sesión" />
      </Helmet>
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
        <ButtonFormStyled onClick={clickLogin}>
          Iniciar Sesión
        </ButtonFormStyled>
      </ActionSlider>
    </div>
  )

}