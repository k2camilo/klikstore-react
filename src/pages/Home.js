import Carrusel from "../components/carrusel";
import Nosotros from "../components/Nosotros";
import Destacados from "../components/Destacados";
import Servicios from "../components/Servicios";

function Home() {
    return (
        <>
            <Carrusel />
            <Nosotros />
            <Destacados />
            <Servicios />
        </>
    );
}

export default Home;