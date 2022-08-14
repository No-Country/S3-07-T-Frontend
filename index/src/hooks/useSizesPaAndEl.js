import { useLayoutEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function useSizesPaAndEl(refEl) {
  const [wParent, setWParent] = useState(refEl.current?.parentElement.offsetWidth || 0)
  const [wRefEl, setWRefEl] = useState(wParent)
  const size = useSelector(state => state.size)
  useLayoutEffect(() => {
    if(!(refEl.current?.parentElement.offsetWidth)) return
    setWParent(refEl.current.parentElement.offsetWidth)
    setWRefEl(wParent)

  }, [refEl, size])

  return [wParent, wRefEl, setWParent, setWRefEl]
}