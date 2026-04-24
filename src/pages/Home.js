import Carrusel from "../components/carrusel";
import Nosotros from "../components/Nosotros";
import Destacados from "../components/Destacados";
import Servicios from "../components/Servicios";
import Actualidad from "../components/Actualidad";
import Categorias from "../components/Categorias";

function Home() {
    return (
        <>
            <Carrusel />
            <Destacados />
            <Categorias />
            <Servicios />
            <Nosotros />            
            <Actualidad />
        </>
    );
}

export default Home;