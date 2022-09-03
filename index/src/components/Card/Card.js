import styled from "styled-components"
import { articleType } from "../../Types/articles_type"

const ImgCard = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 16px;
`

const CardStyled = styled.div`
  position: relative;
  display: flex;
  border: 1px solid transparent;
  background-color: white;
  padding: 15px 10px;
  gap: 10px;
  max-width: 100%;
  &::after{
    position: absolute;
    top: -2px;
    left: 0;
    background: linear-gradient(to left, #9C7EEA 0%, #00C981 50%, #9C7EEA 100%);
    content: '';
    z-index: -1;
    width: 100%;
    height: 102%;
    border-radius: 16px;
  }
`

const TitleCard = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const Tags1 = styled.span`
  font-size: 12px;
  color: #767474;
`

const Tags2 = styled.ul`
  list-style: none;
  display: flex;
  gap: 6px;
  padding: 0;
  max-width: 100%;
  flex-wrap: wrap;
`

const DescriptionCard = styled.p`
  font-size: 12px;
  color: black;
  padding: 0;
  margin: 0;
  font-weight: medium;
`

const ContentInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export default function Card ({article = articleType}) {
  article = {
    ...articleType,
    ...article
  }
  return (
    <CardStyled>
      <ImgCard src={article.image} alt={article.title} />
      <ContentInfoCard>
        <TitleCard>{article.title}</TitleCard>
        <Tags1>{article.tags}</Tags1>
        <Tags2>
          {article.tags2Array.length !== 0 && article.tags2Array
            .map((tag2) => <li key={tag2}> <Tags1>{tag2.name}</Tags1> </li>)}
        </Tags2>
        <DescriptionCard>{article.description.substring(0, 63)}{article.description.length > 63 && "..."}</DescriptionCard>
      </ContentInfoCard>
    </CardStyled>
  )
}