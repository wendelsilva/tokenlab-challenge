import Login from "./pages/Login"
import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"

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
      </Routes>
    </>
  )
}

export default App
