import styled from "styled-components"

export const Container = styled.div`
`
export const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Imagen = styled.div`
text-align: center;
margin-top: 20px;

img{
  border-radius:50%;
  width: 150px;
}
`
export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin: 6px 0;
`
export const Texto = styled.span`
  font-size: 15px;
  width: 100%;
`
export const ListTech = styled.div`
margin-right:40px;
ul{
  display: flex;
  justify-content: space-around;
 flex-wrap: wrap;
  
  li{
    display: flex;
    list-style: none;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
`

