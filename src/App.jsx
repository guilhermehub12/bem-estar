import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './pages/Footer.jsx'
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Patient } from "./pages/Patient.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { RegisterPatient } from "./pages/RegisterPatient.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/pacientes" element={<Patient />} />
          <Route path="/pacientes/cadastro" element={<RegisterPatient />} />
          <Route path="sobre" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

