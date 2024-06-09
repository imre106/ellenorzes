import Header from "./Components/Header"
import Jaratok from "./Components/Jaratok"
import Main from "./Components/Main"
import Menu from "./Components/Menu"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UjJarat from "./Components/UjJarat"

function App() {


  return (
    <div>
      <Header headerSzoveg={"Trolibusz hálózat"} />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jaratok" element={<Jaratok />} />
          <Route path="/ujjarat" element={<UjJarat />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
