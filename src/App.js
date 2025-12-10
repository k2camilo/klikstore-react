import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BtnWts from "./components/Btn-wts";
import Home from "./pages/Home";
import Producto from "./pages/Producto";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/nosotros" />
        <Route path="/catalogo" />
        <Route path="/blog" />
        <Route path="/contacto" />
      </Routes>
      <BtnWts />
      <Footer />
    </Router>
  );
}

export default App;