import Carrusel from "../components/carrusel";
import Nosotros from "../components/Nosotros";
import Destacados from "../components/Destacados";
import Servicios from "../components/Servicios";
import Actualidad from "../components/Actualidad";

function Home() {
    return (
        <>
            <Carrusel />
            <Nosotros />
            <Destacados />
            <Servicios />
            <Actualidad />
        </>
    );
}

export default Home;