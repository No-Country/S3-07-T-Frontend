import {createContext, useState} from "react"

export const ContextSlider = createContext()

export default function ProviderContextSlider ({children}) {
  const [ml, setMl] = useState(0)
  const [whSlider, setWhSlider] = useState(0)
  return <ContextSlider.Provider value={{setMl, ml, whSlider, setWhSlider}}>
    {children}
  </ContextSlider.Provider>
}