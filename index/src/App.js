import "./App.css"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register.js"
import Login from "./pages/Login/Login.js"
import {BrowserRouter} from "react-router-dom"
import useWindowSize from "./hooks/useWindowSize"
import { useEffect } from "react"
import { setNewSize } from "./redux/actions"
import { useDispatch } from "react-redux"

function App() {
  const size = useWindowSize() //anchura y altura de la pantalla number[]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNewSize(size)) // cada vez que cambien las dimensiones de la pantalla queremos tenerlo disponible para cualquier componente que lo necesite
  }, [size])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App