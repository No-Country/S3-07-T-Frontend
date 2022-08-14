import { useReducer } from "react"
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

const typeButtons = {
  buttonNext: {
    type: "next",
    text: "siguiente"
  },
  buttonBack: {
    type: "back",
    text: "anterior"
  },
  buttonRegister: {
    type: "register",
    text: "registrarse"
  }
}

const ContainInputForm = styled.div`
  &::placeholder{
    color: #2d2d2d;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`


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

  const handleChangeState = (action) => {
    dispatch(action)
  }


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
              <ButtonForm button={typeButtons.buttonRegister} data={state}/>
            </ActionSlider>
          </Slide>

        </Slider>
      </ProviderContextSlider>
    </section>
  )
}  
