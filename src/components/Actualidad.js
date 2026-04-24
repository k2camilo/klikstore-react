import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";

export default function Actualidad (){
    return (
        <section className="actualidad">
            <div className="contrenedor-actualidad">
                <div className="info-actualidad">
                    <h2>Actualidad Tecnológica</h2>
                    <p>Tu espacio para mantenerte al día con lo último en tecnología. Aquí encontrarás noticias, consejos y tendencias sobre dispositivos, accesorios, innovación digital y todo lo que impulsa el mundo tech. Nuestro objetivo es mantenerte informado, conectado e inspirado, para que saques el máximo provecho de tus herramientas digitales.</p>
                    <button className="btn-blog"><Link className="btn-link-actualidad" to="/blog">Ir a Blog</Link></button>
                </div>
                <div className="img-actualidad">
                    <img src="/img/blog.webp"/>
                </div>
            </div>
        </section>
    );
}