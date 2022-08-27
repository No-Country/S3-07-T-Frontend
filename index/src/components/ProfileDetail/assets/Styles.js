import styled from "styled-components"


export const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 60px;
height: 100vh;

`
export const CardContainer = styled.div`
border: 2px solid #777777;
width:250px;
border-radius: 5px;

`
export const Imagen = styled.div`
text-align: center;
margin-top: 20px;

img{
  border-radius:50%;
  width: 150px;

  
}
`
export const Titulo = styled.h4`
font-weight: 500;
text-align: center;

`
export const Texto = styled.span`
font-size: 14px;

margin-left:10px;
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

