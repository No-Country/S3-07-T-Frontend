import styled from "styled-components"
export const MyButton=styled.button`
    padding:1em;
    margin: 3em;
    border: 3px #44b3e9 solid;
    background:#090909;
    color: #62f3d5;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-style: italic;
    z-index: 2;
    `
export const MyImg=styled.img`
    width: 60%;
    object-fit: cover;
    margin:0px;
    `
export const Title=styled.h2`
font-family: Roboto;
font-weight: 800;
font-size: 48px;
line-height: 46.88px;
text-align: left; 
padding-left:25%;
`
export const Detalles=styled.div`
    height: 96vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,4fr));
    text-align: center;
    background: linear-gradient(to top right, #F5F5F5 0%, #eee 100%);
    `

export const Div1=styled.div`
    margin-top: 4%;
    z-index: 2;
    `
export const Areatxt=styled.div`
    justify-content: center;
    text-align: left;
    font-family: 'Verdana';
    font-size: bold;
    color: #000;
    background:#eee;
    padding: 2% 20% 2% 25%;
    `