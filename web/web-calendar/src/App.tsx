import Login from "./pages/Login"
import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Home from "./pages/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false)

  function changeLoginOrRegister() {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
