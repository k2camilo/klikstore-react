import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";

export default function Nosotros() {
    return (
        <section className="nosotros">
        <div className="banner-nosotros">
            <p className="texto-nosotros">
            <span className="sombreado">Nos apasiona</span> la tecnología. Ofrecemos
            accesorios, periféricos y servicio técnico especializado con{" "}
            <span className="sombreado">calidad</span> y diseño, brindando una
            experiencia <span className="sombreado">confiable</span> y personalizada.
            </p>
        </div>

        <button className="btn-nosotros">
            <a><Link to="/nosotros">Conocenos</Link></a>
        </button>
        </section>
    );
}

