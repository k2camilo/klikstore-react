import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";

export default function Servicios() {
    return (
        <section className="contenedor-servicios">
            <h2 className="titulo-serv">Nuestros Servicios</h2>
            <div className="contenedor-cajas">
                <div className="caja-servicio">
                    <img className="img-servicio" src={"/img/mto.jpg"} alt="img.mantenimiendo"/>
                    <h3>Mantenimiento</h3>
                    <p>Mantén tu equipo como nuevo con nuestro servicio de mantenimiento preventivo y correctivo. Limpiamos, optimizamos y cuidamos cada detalle para garantizar el mejor rendimiento y prolongar la vida útil de tus dispositivos, tanto en celulares como computadores.</p>
                    <Link to="/contacto" className="link-servicio">Cotiza tu servicio →</Link>
                </div>
                
                <div className="caja-servicio">
                    <img className="img-servicio" src={"/img/reparacion.jpg"} alt="img.reparacion"/>
                    <h3>Reparación</h3>
                    <p>Reparamos tu equipo con la precisión y confianza que merece. En Klik Store utilizamos repuestos de calidad y procedimientos profesionales para celulares y computadores, asegurando resultados duraderos y garantía en cada servicio.</p>
                    <Link to="/contacto" className="link-servicio">Cotiza tu servicio →</Link>
                </div>

                <div className="caja-servicio">
                    <img className="img-servicio" src={"/img/diagnostico.png"} alt="img.diagnostico"/>
                    <h3>Diagnóstico</h3>
                    <p>Detectamos cualquier falla antes de que se convierta en un problema. Realizamos un diagnóstico técnico completo y preciso, identificando el origen de errores en hardware o software para ofrecerte la mejor solución al menor costo posible.</p>
                    <Link to="/contacto" className="link-servicio">Cotiza tu servicio →</Link>
                </div>
            </div>
        </section>
    );
}