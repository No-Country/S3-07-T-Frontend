/* eslint-disable no-unused-vars */
import {  useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { ContextSlider } from "../../context/contextSlider"
import useSizesPaAndEl from "../../hooks/useSizesPaAndEl"
import "./Slider.css"

export default function Slider ({children}) {
  const sliderRef = useRef()
  const [wParent]= useSizesPaAndEl(sliderRef)
  const [widtSlider, setWidthSlider] = useState(undefined)
  const { ml, setWhSlider } = useContext(ContextSlider)

  useEffect(() => {
    if(!sliderRef.current?.children.length) return
    sliderRef.current.parentElement.style.overflowX = "hidden"
  }, [])

  useLayoutEffect(() => {
    if(!sliderRef.current?.children.length) return
    setWidthSlider(wParent * 3)
    setWhSlider(wParent * 3)
  }, [wParent, sliderRef])
  
  return (
    <div ref={sliderRef} className="Slider" style={{marginLeft: ml + "%", width: widtSlider}}>
      {children}
    </div>
  )
}