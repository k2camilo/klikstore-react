import Carrusel from "../components/carrusel";
import Destacados from "../components/Destacados";
import Servicios from "../components/Servicios";
import Categorias from "../components/Categorias";

function Home() {
    return (
        <>
            <Carrusel />
            <Destacados />
            <Categorias />
            <Servicios />
        </>
    );
}

export default Home;