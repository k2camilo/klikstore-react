import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BtnWts from "./components/Btn-wts";
import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Catalogo from "./pages/Catalogo";
import Servicios from "./pages/Servicios";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/catalogo" element={<Catalogo />}/>
        <Route path="/servicios"  element={<Servicios />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} /> 
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <BtnWts />
      <Footer />
    </Router>
  );
}

export default App;