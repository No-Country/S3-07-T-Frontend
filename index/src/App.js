// import "./App.css"
// import { Routes, Route } from "react-router-dom"
// import Register from "./pages/Register/Register.js"

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register.js"
import IndexHome from "./pages/home/indexHome.js"
import Proyectos from "./pages/home/Proyectos/proyectos.js"
import Equipos from "./pages/home/Equipos/equipos.js"
import Perfiles from "./pages/home/Perfiles/perfiles.js"
import Foro from "./pages/home/Foro/foro.js"
import Login from "./pages/Login/Login.js"
import NoRute from "./components/NoRoute/noRoute.js"

import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
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