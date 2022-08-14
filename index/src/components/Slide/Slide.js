/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import useSizesPaAndEl from "../../hooks/useSizesPaAndEl"

export default function Slide ({children}){ 
  const slideRef = useRef()
  const [wParent] = useSizesPaAndEl(slideRef)
  const [childrenPa, setChildrenPa] = useState(0)

  useEffect(()=>{
    if(!slideRef.current?.parentElement.children) return
    setChildrenPa(slideRef.current.parentElement.children.length)
  }, [slideRef])

  useEffect(()=>{

  }, [wParent])

  return (
    <div className="Slide" ref={slideRef} style={{width: wParent / childrenPa  + "px", height: "100%"}}>
      {children}
    </div>
  )
}