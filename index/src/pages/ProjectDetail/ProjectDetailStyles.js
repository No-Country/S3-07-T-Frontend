import styled from "styled-components"

export const ProjectDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
`
export const Video = styled.video`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  min-height: 200px;
  max-height: 350px ;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: 28px;
  margin: 0;
  text-align: left;
  width: 100%;
`

export const TeamInfo = styled.div`
  font-size: 16px;
  text-align: left;
  width: 100%;
`

export const ContainerVideoAndInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
`

export const Description = styled.div`
  width: 100%;
  & > h2 {
    font-size: 16px;
  }
  & > p {
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-weight: normal;
  }
`
export const SectionTagsInDetail = styled.div`
  width: 100%;
  & > h2 {
    font-size: 16px;
  }
  & > p{
    margin: 0;
    font-size: 15px;
  }
`