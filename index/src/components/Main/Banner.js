import useWindowSize from "../../hooks/useWindowSize"
import { images } from "../../utils/images/images.js"
import styled from "styled-components"

const Image=styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    `
export default function Banner  () {
  const size= useWindowSize()
  if (size[0]>1024) {
    return (
      <>
        <Image src= {images.welBanner}/>
      </>
    )
  }
}


