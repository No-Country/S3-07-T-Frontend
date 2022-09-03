import FormRegister from "../../components/FormRegister/FormRegister"
import { ContainInputForm } from "../../components/ContainInputForm/ContainInputForm"
import InputForm from "../../components/InputForm/InputForm"
import LabelForm from "../../components/LabelForm/LabelForm"
import { useReducer, useState} from "react"
import ActionSlider from "../../components/ActionSlider/ActionSlider"
import { ButtonFormStyled } from "../../components/ButtonForm/ButtonForm"
import "./Login.css"
import { login } from "../../services/usersServices"
import { saveDataLogin } from "../../services/localStorage"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import ModalAdviser from "../../components/ModalAdviser/ModalAdviser"


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
  const [openAdviser, setOpenAdviser] = useState(false)
  const navigate = useNavigate()

  const clickLogin = async(e) => {
    try {
      e.preventDefault()
      const res = await login(state)
      saveDataLogin(res)
      setOpenAdviser(true)
      setTimeout(() => {
        setOpenAdviser(false)
        navigate("/")
      }, 2500)
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
      <ModalAdviser 
        active={openAdviser} 
        title = "¡Inicio de Sesión Exitoso!"
        subtitle= "¡Bienvenido!"
        image={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c727e48-595d-4e29-ab6e-eaec806cc004/ddbv3yv-2fc70379-e3b9-45c5-8636-8850a99ba565.png/v1/fill/w_894,h_894,q_70,strp/pixel_art___robot_1_by_projectrobo1989_ddbv3yv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4NCIsInBhdGgiOiJcL2ZcLzJjNzI3ZTQ4LTU5NWQtNGUyOS1hYjZlLWVhZWM4MDZjYzAwNFwvZGRidjN5di0yZmM3MDM3OS1lM2I5LTQ1YzUtODYzNi04ODUwYTk5YmE1NjUucG5nIiwid2lkdGgiOiI8PTExODQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MqIzj3TDeyiUPQfGlUfwbBzZCprYhWmfoYHTxjkricM"}
      />
    </div>
  )

}