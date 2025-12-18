import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { Login } from "./pages/login"
import { Dashboard } from "./pages/Dashboard"
import { useUsuarioStore } from "./store/UserStore"
import { useEffect } from "react"

function App() {

  const { generarUsuarios } = useUsuarioStore();

  useEffect(() => {
    generarUsuarios()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
