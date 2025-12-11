import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";

export default function Servicios(){
    return(
        <>
        <div className="img-banner-producto">
            <img src={process.env.PUBLIC_URL + "/img/Banner_servicios.jpg"} alt="banner-servicios" />
        </div>
        <div className="page-servicios">
            <p>"Resolviendo problemas, construyendo confianza"</p>
            <div className="servicios-cajas">
                <div className="servicio-caja">
                    <img src={process.env.PUBLIC_URL + "/img/diagnostico.png"} alt="img-diagnostico" />
                    <div className="texto-servicios">
                        <h2>Diagnóstico</h2>
                        <p>Detectamos cualquier falla antes de que se convierta en un problema. Realizamos un diagnóstico técnico completo y preciso, identificando el origen de errores en hardware o software para ofrecerte la mejor solución al menor costo posible.</p>
                    </div>
                </div>
                <div className="servicio-caja">
                    <img src={process.env.PUBLIC_URL + "/img/mto.jpg"} alt="img-mantenimiento" />
                    <div className="texto-servicios">
                        <h2>Mantenimiento</h2>
                        <p>Mantén tu equipo como nuevo con nuestro servicio de mantenimiento preventivo y correctivo. Limpiamos, optimizamos y cuidamos cada detalle para garantizar el mejor rendimiento y prolongar la vida útil de tus dispositivos, tanto en celulares como computadores.</p>
                    </div>
                </div>
                <div className="servicio-caja">
                    <img src={process.env.PUBLIC_URL + "/img/reparacion.jpg"} alt="img-repaciones" />
                    <div className="texto-servicios">
                        <h2>Reparación</h2>
                        <p>Reparamos tu equipo con la precisión y confianza que merece. En Klik Store utilizamos repuestos de calidad y procedimientos profesionales para celulares y computadores, asegurando resultados duraderos y garantía en cada servicio.</p>
                    </div>
                </div>
                <div className="servicio-caja">
                    <img src={process.env.PUBLIC_URL + "/img/programas.jpg"} alt="img-instalacion" />
                    <div className="texto-servicios">
                        <h2>Instalación y actualización de software</h2>
                        <p>Mantén tu equipo siempre al día y funcionando al máximo rendimiento. En Klik Store realizamos la instalación segura de programas y la actualización de sistemas operativos y software en celulares y computadores. Optimizamos el desempeño, garantizamos compatibilidad y cuidamos tu información</p>
                    </div>
                </div>
            </div>
            <button className="btn-servicios"><Link className="btn-link-servicio" to="/contacto">Cotiza tu servicios</Link></button>
        </div>
        </>
    );
}