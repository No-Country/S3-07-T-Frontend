import "./App.css"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Register from "./pages/Register/Register.js"
import Search from "./pages/Search/Search.js"
import Login from "./pages/Login/Login.js"
import useWindowSize from "./hooks/useWindowSize"
import { useEffect, useRef } from "react"
import { setNewSize } from "./redux/actions"
import { useDispatch } from "react-redux"
// import Create from "./pages/Create/Create.js"
import Header from "./components/Header/Header"
import NavBarMobile from "./components/NavbarMobile/NavbarMobile"

function App() {
  const size = useWindowSize() //anchura y altura de la pantalla number[]
  const dispatch = useDispatch()
  const appRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(!appRef.current) return
    if(appRef.current.children[1].innerHTML.elementType !== "nav") return //solucion error que me agarraba el navbar y le aplicaba overflow

    appRef.current.children[1].style.overflowY = "auto" // esto es para que el navbar siempre quede abajo en la pantalla
    appRef.current.children[1].style.flexGrow = "1"
  }, [size])

  useEffect(() => {
    dispatch(setNewSize(size)) // cada vez que cambien las dimensiones de la pantalla queremos tenerlo disponible para cualquier componente que lo necesite
  }, [size])

  useEffect(()=>{
    location.pathname === "/" && navigate("search/projects")
  },[])

  return (
    <div className="App" ref={appRef}>
      <Header /> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/search/:articles" element={<Search />}></Route>
      </Routes>
      <NavBarMobile />
    </div>
  )
}

export default App