import { useReducer, useState } from "react"
import styled from "styled-components"
import ActionSlider from "../../components/ActionSlider/ActionSlider"
import ButtonForm from "../../components/ButtonForm/ButtonForm"
import FormRegister from "../../components/FormRegister/FormRegister"
import InputForm from "../../components/InputForm/InputForm"
import LabelForm from "../../components/LabelForm/LabelForm"
import Slide from "../../components/Slide/Slide"
import Slider from "../../components/Slider/Slider"
import ProviderContextSlider from "../../context/contextSlider"
import "./Register"
import { ContainInputForm } from "../../components/ContainInputForm/ContainInputForm"
import { typeButtons } from "../../Types/ButtonsForm"
import ModalAdviser from "../../components/ModalAdviser/ModalAdviser"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/usersServices"
import { saveDataLogin } from "../../services/localStorage"

const TitleFormStyles = styled.h1`
  text-transform: capitalize;
  margin: 0;
  padding: 1em 0;
  text-align: center;
`

const DescriptionFormShort = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin: auto;
  width: 90%;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  &:first-child {
  }
`

function DescriptionForm ({title, descriptionShort, step}) {
  return (
    <div style={{width:"272px", margin: "auto"}}>
      <TitleFormStyles>
        {title}
      </TitleFormStyles>

      <DescriptionFormShort>
        <span>{descriptionShort}</span>
        <span>{step}</span>
      </DescriptionFormShort>
    </div>
  )
}

function registerReducer(state, action) {
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
  case "rolDes":
    return {
      ...state,
      rolDes: action.payload
    }
  case "firstName":
    return {
      ...state,
      firstName: action.payload
    }
  case "lastName":
    return {
      ...state,
      lastName: action.payload
    }
  case "phone":
    return {
      ...state,
      phone: action.payload
    }
  default:
    break
  }
}

const initialRegisterData = {
  email: "",
  password: "",
  rolDes: "",
  firstName: "",
  lastName: "",
  phone: "",
}


export default function Register () {
  const [state, dispatch] = useReducer(registerReducer, initialRegisterData)
  const [openAdviser, setOpenAdviser] = useState(false)
  const [resRegister, setResRegister] = useState(undefined)
  const navigate = useNavigate()
  const handleChangeState = (action) => {
    dispatch(action)
  }

  useEffect(() => {
    if(resRegister){
      setOpenAdviser(true)
      console.log(resRegister)
      login({email: resRegister.email, password: resRegister.password})
        .then(res => {
          saveDataLogin(res)
          setTimeout(()=>{
            setOpenAdviser(false)
            navigate("/")
          }, 2500)
        })
        .catch((error) => {
          console.log(error)
          alert("Ocurrio un error")
        })
    }
  }, [resRegister, navigate])

  return (
    <section className="Register">
      <ProviderContextSlider >
        <Slider>
          <Slide buttons={[typeButtons.buttonNext]}>
            <DescriptionForm title="¡crea tu perfil!" descriptionShort="Datos de sesión" step="1/3"/>
            <FormRegister>
              <ContainInputForm>
                <LabelForm name="email" text="correo electrónico"/>
                <InputForm name="email" placeholder="example@correo.com" value={state.email} onChange={handleChangeState}/>
              </ContainInputForm>

              <ContainInputForm>
                <LabelForm name="password" text="contraseña"/>
                <InputForm name="password" placeholder="***" type="password" value={state.password} onChange={handleChangeState}/>
              </ContainInputForm>
            </FormRegister>
            <ActionSlider>
              <div></div>
              <ButtonForm button={typeButtons.buttonNext}/>
            </ActionSlider>

          </Slide>

          <Slide buttons={[typeButtons.buttonBack ,typeButtons.buttonNext]}>
            <DescriptionForm title="¡estas a mitad de camino!" descriptionShort="Datos personales" step="2/3"/>
            <FormRegister>
              <ContainInputForm>
                <LabelForm name="rolDes" text="Rol Ocupado"/>
                <InputForm name="rolDes" placeholder="frontend" value={state.rolDes} onChange={handleChangeState}/>
              </ContainInputForm>

              <ContainInputForm>
                <LabelForm name="phone" text="Numero de telefono"/>
                <InputForm name="phone" value={state.phone} onChange={handleChangeState}/>
              </ContainInputForm>
            </FormRegister>

            <ActionSlider>
              <ButtonForm button={typeButtons.buttonBack}/>
              <ButtonForm button={typeButtons.buttonNext}/>
            </ActionSlider>
          </Slide>

          <Slide buttons={[typeButtons.buttonBack ,typeButtons.buttonRegister]}>
            <DescriptionForm title="¡Ultimo Paso!" descriptionShort="Datos personales" step="3/3"/>
            <FormRegister>
              <ContainInputForm>
                <LabelForm name="firstName" text="Nombre"/>
                <InputForm name="firstName" placeholder="juan" value={state.firstName} onChange={handleChangeState}/>
              </ContainInputForm>

              <ContainInputForm>
                <LabelForm name="lastName" text="Apellido"/>
                <InputForm name="lastName" placeholder="Rodriguez" value={state.lastName} onChange={handleChangeState}/>
              </ContainInputForm>
            </FormRegister>

            <ActionSlider>
              <ButtonForm button={typeButtons.buttonBack}/>
              <ButtonForm button={typeButtons.buttonRegister} data={state} res={(res)=>setResRegister(res)}/>
            </ActionSlider>
          </Slide>

        </Slider>
      </ProviderContextSlider>
      <ModalAdviser
        active={openAdviser} 
        title = "¡Registro Exitoso!"
        subtitle= "¡Bienvenido!"
        image={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c727e48-595d-4e29-ab6e-eaec806cc004/ddbv3yv-2fc70379-e3b9-45c5-8636-8850a99ba565.png/v1/fill/w_894,h_894,q_70,strp/pixel_art___robot_1_by_projectrobo1989_ddbv3yv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4NCIsInBhdGgiOiJcL2ZcLzJjNzI3ZTQ4LTU5NWQtNGUyOS1hYjZlLWVhZWM4MDZjYzAwNFwvZGRidjN5di0yZmM3MDM3OS1lM2I5LTQ1YzUtODYzNi04ODUwYTk5YmE1NjUucG5nIiwid2lkdGgiOiI8PTExODQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MqIzj3TDeyiUPQfGlUfwbBzZCprYhWmfoYHTxjkricM"}
      />
    </section>
  )
}  
