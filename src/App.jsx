import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Patient from "./pages/Patient.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/cadastro" element={<Home />} />

          <Route path="/" element={<Home />} />
          <Route path="pacientes/cadastro" element={<Patient />} />
          <Route path="sobre" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App

