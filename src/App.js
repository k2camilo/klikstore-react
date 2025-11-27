import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./assets/css/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/nosotros" />
        <Route path="/catalogo" />
        <Route path="/blog" />
        <Route path="/contacto" />
      </Routes>
    </Router>
  );
}

export default App;