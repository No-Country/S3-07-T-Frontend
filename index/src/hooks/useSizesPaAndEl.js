import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function useSizesPaAndEl(refEl) {
  const [wParent, setWParent] = useState(0)
  const [wRefEl, setWRefEl] = useState(wParent)
  const size = useSelector(state => state.size)

  useEffect(() => {
    if(!(refEl.current?.parentElement.offsetWidth)) return
    setWParent(refEl.current.parentElement.offsetWidth)
    setWRefEl(wParent)

  }, [refEl, size, wParent])

  return [wParent, wRefEl, setWParent, setWRefEl] // anchos del elemento pasado en prop y el de su padre
}