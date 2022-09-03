import bannerImg from "./banner.jpg"
import styled from "styled-components"

const Image=styled.img`
    width: 41px;
    min-height: 41px;
    max-height: 41px;
    border-radius: 50%;
    object-fit: cover;
`

const BannerStyled = styled.div`
  background-color: #15141E;
  color: white;
  height: max-content;
  width: 100%;
  display: flex;
  padding: 10px 10px;
  gap: 10px;
  justify-content: center;
  font-size: calc(2px + 2vh);
  font-weight: normal;
`

const ContainerTextBanner = styled.div`
  display: flex;
  flex-direction: column;
`

const TextBanner = styled.span`
`
export default function Banner  () {
  return (
    <BannerStyled>
      <ContainerTextBanner>        
        <TextBanner>
        ¿Desarrollador de No Country?
        </TextBanner>
        <TextBanner>
          ¡Crea tu perfil y hace tu proyecto más visible aquí!        
        </TextBanner>
      </ContainerTextBanner>
      <Image src={bannerImg}/>
    </BannerStyled>
  )
}


