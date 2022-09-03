import { createPortal } from "react-dom"
import styled, { keyframes } from "styled-components"
import Modal from "../Modal/Modal"

const jump = keyframes`
  0%{
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  55% {
    transform: translateY(-8px);
  }
  100%{
    transform: translateY(0px);
  }
`

const ModalAdviserStyled = styled.div`
  position: absolute;
  height: ${(props) => props.active ? "100%" : "0"};
  width: ${(props) => props.active ? "100%" : "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 12;
  backdrop-filter: blur(4px);
  `

const CardAdviser = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  height: max-content;
  padding: 20px 10px;
  gap: 10px;
  max-width: 90%;
  border: 1px solid black;
  & > h1 {
    font-size: 24px;
    margin: 0;
    width: 100%;
    text-align: center;
    color: #2D2D2D;
  }
  & > img {
    max-width: 100%;
    max-height: 150px;
    animation: ${jump} .8s linear infinite;
  }
  & > h2 {
    margin: 0;
    font-size: 16px;
    color: #9C7EEA;
  }
`

const shadow = keyframes`
  0%{
    width: 30px;
  }
  50% {
    width: 26px;
    background-color: rgba(0, 0, 0, 0.23);
  }
  55% {
    width: 26px;
    background-color: rgba(0, 0, 0, 0.23);
  }
  100%{
    width: 30px;
    background-color: rgba(0, 0, 0, 0.3);
  }

`

const Shadow = styled.div`
  position: relative;
  width: 30px;
  display: flex;
  justify-content: center;
  & > div {
    background-color: rgba(0, 0, 0, 0.3);
    height: 6px;
    width: 30px;
    border-radius: 50%;
    margin-top: -40px;
    animation: ${shadow} .8s linear infinite;
  }
`

export default function ModalAdviser ({ active, image, title, subtitle })  {

  return(
    createPortal(
      <Modal active={active}>
        <ModalAdviserStyled active={active}>
          <CardAdviser>
            <h1>{title}</h1>
            <img src={image} alt="Adviser" />
            <Shadow>
              <div></div>
            </Shadow>
            <h2>{subtitle}</h2>
          </CardAdviser>
        </ModalAdviserStyled>
      </Modal>, 
      document.getElementById("modal")
    )
  )
}