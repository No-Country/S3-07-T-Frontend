/* eslint-disable no-unused-vars */
import { useLayoutEffect } from "react"
import { useEffect, useRef, useState } from "react"
import useSizesPaAndEl from "../../hooks/useSizesPaAndEl"

export default function Slide ({children}){ 
  const slideRef = useRef()
  const [wParent] = useSizesPaAndEl(slideRef)
  const [childrenPa, setChildrenPa] = useState(0)
  const [wSlide, setWSlide] = useState(undefined)

  useEffect(()=>{
    if(!slideRef.current?.parentElement.children) return
    setChildrenPa(slideRef.current.parentElement.children.length)
  }, [slideRef])

  useLayoutEffect(()=>{
    if(!slideRef.current.parentElement.offsetWidth) return
    setWSlide(slideRef.current.parentElement.offsetWidth / childrenPa)
  }, [childrenPa, slideRef, wParent])

  return (
    <div className="Slide" ref={slideRef} style={{width: wSlide  + "px", height: "100%"}}>
      {children}
    </div>
  )
}