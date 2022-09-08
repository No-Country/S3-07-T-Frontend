/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { useEffect, useRef, useState } from "react"
import { ContextSlider } from "../../context/contextSlider"

export default function Slide ({children}){ 
  const slideRef = useRef()
  const [parent, setParent] = useState(undefined)
  const [wSlide, setWSlide] = useState(undefined)
  const { whSlider } = useContext(ContextSlider)

  useEffect(()=>{
    if(!slideRef.current.parentElement) return
    setParent(slideRef.current.parentElement)
  }, [slideRef])

  useEffect(()=>{
    if(!parent) return
    setWSlide(whSlider / parent.children.length)
  }, [parent, whSlider])

  return (
    <div className="Slide" ref={slideRef} style={{width: wSlide  + "px", height: "100%"}}>
      {children}
    </div>
  )
}