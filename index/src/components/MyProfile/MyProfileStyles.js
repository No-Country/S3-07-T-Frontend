import styled from "styled-components"

export const MyProfileStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 1em;
  padding: 1em 0;
`

export const Avatar = (props) => {
  return (
    <ContainerAvatar>
      <ImgAvatar {...props}/>
    </ContainerAvatar>
  )
}

export const ContainerAvatar = styled.div`
  width: max-content;
  height: max-content;
  border: 1px solid transparent;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  &::after{
  position: absolute;
  top: -3px; 
  bottom: -3px;
  left: -3px; 
  right: -3px;
  background: linear-gradient(to bottom, #9C7EEA 0%, #00C981 50%,#9C7EEA 100%);
  content: '';
  z-index: -1;
  border-radius: 50%;
  }
`

export const ImgAvatar = styled.img`
  min-height: 155px;
  min-width: 155px;
  border: 1px solid black;
  border-radius: 155px;
  max-height: 155px;
  max-width: 155px;
  object-fit: cover;
`

export const Name = styled.h1`
  margin: 0;
`

export const Position = styled.span`

`

export const SectionTags = styled.div`
  min-height: 180px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1em;

  & > span {
    margin-bottom: -20px;
    z-index: 1;
  }
`

export const EditAvatar = styled.label`
  position: absolute;
  bottom: 0;
  right: -5px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 3px 1px 3px 0px rgba(0, 0, 0, 0.4);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  & > input {
    opacity: 0;
    display: none;
    height: 1px;
    width: 1px;
  }
`