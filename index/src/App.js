import "./App.css"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register.js"
import IndexHome from "./pages/home/indexHome.js"
import Proyectos from "./pages/home/Proyectos/proyectos.js"
import Equipos from "./pages/home/Equipos/equipos.js"
import Perfiles from "./pages/home/Perfiles/perfiles.js"
import Foro from "./pages/home/Foro/foro.js"
import Login from "./pages/Login/Login.js"
import {BrowserRouter} from "react-router-dom"
import useWindowSize from "./hooks/useWindowSize"
import { useEffect } from "react"
import { setNewSize } from "./redux/actions"
import { useDispatch } from "react-redux"
import NoRute from "./components/NoRoute/noRoute.js"
import Create from "./pages/create/create.js"
import Header from "./components/Header/Header"

function App() {
  const size = useWindowSize() //anchura y altura de la pantalla number[]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNewSize(size)) // cada vez que cambien las dimensiones de la pantalla queremos tenerlo disponible para cualquier componente que lo necesite
  }, [size])

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create" element={<Create/>} />
          <Route path='/home/*' element={<IndexHome/>}>
            <Route path='proyectos' element={<Proyectos/>} />
            <Route path='perfiles' element={<Perfiles/>} />
            <Route path='equipos' element={<Equipos/>} />
            <Route path='foro' element={<Foro/>} />
            <Route path='*' element={<NoRute/>} />
          </Route> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App