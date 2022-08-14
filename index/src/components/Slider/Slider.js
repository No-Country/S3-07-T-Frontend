/* eslint-disable no-unused-vars */
import {  useContext, useEffect, useRef, useState } from "react"
import { ContextSlider } from "../../context/contextSlider"
import useSizesPaAndEl from "../../hooks/useSizesPaAndEl"
import "./Slider.css"

export default function Slider ({children}) {
  const sliderRef = useRef()
  const [wParent]= useSizesPaAndEl(sliderRef)
  const { ml } = useContext(ContextSlider)

  useEffect(() => {
    if(!sliderRef.current?.children.length) return
    sliderRef.current.parentElement.style.overflow = "hidden"
  }, [])

  return (
    <div ref={sliderRef} className="Slider" style={{marginLeft: ml + "%", width: wParent * 3}}>
      {children}
    </div>
  )
}