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
import Login from "./pages/Login/Login.js"

import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App