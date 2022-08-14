import { useContext } from "react"
import styled from "styled-components"
import { ContextSlider } from "../../context/contextSlider"
import { setLoading } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux/es/exports"

export const ButtonFormStyled = styled.button`
  background-color: #9C7EEA;
  border: none;
  padding: .5em;
  color: white;
  border-radius: 3px;
  font-size: 16px;
  text-transform: capitalize;
`

const porcentViewSlide = 100

export default function ButtonForm ({button, data = undefined}) {
  const {setMl, ml} = useContext(ContextSlider)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  const nextOnClick = () => {

    let mlSlider = ml
    // margin left del slider en este momento

    if(mlSlider > -200){ 
      mlSlider -= porcentViewSlide 
    }
    // Si el margin left del contenedor de slides es mayor que el margin left donde se ve el ultimo slide
    // al margin del contenedor le restamos el 

    setMl(mlSlider)
    // Aplicamos el nuevo margin left
  }

  const backOnClick = () => {
    let mlContainer = ml

    if(mlContainer < 0){
      mlContainer += porcentViewSlide
    }

    setMl(mlContainer)
  }

  const registerOnClick = () => {
    dispatch(setLoading(true))
    const bodyParse = JSON.stringify(data)
    fetch("http://localhost:3002/api/signUp", {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: bodyParse,
    })
      .then(res => res.json())
      .then( ({user}) => {
        // eslint-disable-next-line no-unused-vars
        const {email, token, id} = user
        dispatch(setLoading(false))
        
      })
      .catch(error => {
        dispatch(setLoading(false))
        console.log(error)
      })
  }


  return(
    <ButtonFormStyled onClick={button.type === "next" ? nextOnClick : button.type  === "back" ? backOnClick : button.type  === "register" ? registerOnClick : ()=>{}}>
      { button.type === "register" && loading ? "cargando..." : button.text}
    </ButtonFormStyled>
  )
}