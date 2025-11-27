import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/nosotros" />
        <Route path="/catalogo" />
        <Route path="/blog" />
        <Route path="/contacto" />
      </Routes>
    </Router>
  );
}

export default App;