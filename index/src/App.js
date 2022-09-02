import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Register from "./pages/Register/Register.js"
import Search from "./pages/Search/Search.js"
import Login from "./pages/Login/Login.js"
import useWindowSize from "./hooks/useWindowSize"
import { useEffect, useRef } from "react"
import { setNewSize } from "./redux/actions"
import { useDispatch } from "react-redux"
import Create from "./pages/Create/Create"
import Header from "./components/Header/Header"
import NavBarMobile from "./components/NavbarMobile/NavbarMobile"
import ProfileDetail from "./components/ProfileDetail/ProfileDetail"
import Banner from "./components/Main/Banner"
import MyProfile from "./components/MyProfile/MyProfile"
import styled from "styled-components"
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail"

const Main = styled.section`
overflow-y: auto;
flex-grow: 1;
`

function App() {
  const size = useWindowSize() //anchura y altura de la pantalla number[]
  const dispatch = useDispatch()
  const appRef = useRef()

  useEffect(() => {
    dispatch(setNewSize(size)) // cada vez que cambien las dimensiones de la pantalla queremos tenerlo disponible para cualquier componente que lo necesite
  }, [dispatch, size])

  return (
    <div className="App" ref={appRef} style={{height: size[1], overflowY:"hidden"}}>
      <Header />
      <Banner />
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to={"/search/projects"}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/create/:categoryName" element={<Create/>} />
          <Route path="/search/:articles" element={<Search />} />
          <Route path="search/projects/:idProject" element={<ProjectDetail/>} />
          <Route path="search/profiles/:idProfile" element={<ProfileDetail/>} />
        </Routes>
      </Main>
      <NavBarMobile />
    </div>
  )
}

export default App
