import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contenido">

                <div className="footer-logo">
                    <img src={process.env.PUBLIC_URL + "/img/klik-store-trp-300px.png"} alt="Logo Klik Store" />
                </div>

                <div className="footer-menu">
                    <Link to="/">INICIO</Link>
                    <Link to="/catalogo">PRODUCTOS</Link>
                    <Link to="/servicios">SERVICIOS</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/nosotros">NOSOTROS</Link>
                    <Link to="/contacto">CONTACTO</Link>
                </div>

                <div className="footer-contacto">

                    <p className="footer-siguenos">
                        Síguenos en:
                        <a href="https://www.tiktok.com/@myklikstore" target="_blank">
                            <img className="icono-red" src={process.env.PUBLIC_URL + "/icon/tik-tok-bln.png"} alt="tik tok" />
                        </a>
                        <a href="https://www.instagram.com/myklikstore" target="_blank">
                            <img className="icono-red" src={process.env.PUBLIC_URL + "/icon/instagram-bln.png"} alt="instagram" />
                        </a>
                    </p>

                    <p>
                        <img className="icono" src={process.env.PUBLIC_URL + "/icon/mapa.png"} alt="ubicación" />
                        Bogotá, Calle 2 No. 56 a - 07
                    </p>

                    <p>
                        <img className="icono" src={process.env.PUBLIC_URL + "/icon/telefono.png"} alt="telefono" />
                        3242111830
                    </p>

                    <p>
                        <img className="icono" src={process.env.PUBLIC_URL + "/icon/email.png"} alt="correo" />
                        myklikstore@gmail.com
                    </p>
                </div>
            </div>

            <p className="footer-copy">Todos los derechos reservados por Klik Store 2025</p>

        </footer>
    );
}
