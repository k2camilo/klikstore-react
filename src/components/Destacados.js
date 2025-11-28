import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Destacados() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/data/productos.json")
        .then(res => res.json())
        .then(data => setProductos(data));
    }, []);

    return (
        <section className="destacados">
        <h2>Productos Destacados</h2>

        <button className="flecha-prod left-prod">◄</button>
        <button className="flecha-prod right-prod">►</button>

        <div className="productos-contenedor">
            <div className="productos-slide">

            {productos.map(producto => (
                <Link to={`/producto/${producto.id}`} className="producto" key={producto.id}>
                
                <div className="img-producto">
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>

                <div className="texto-producto">
                    <h4>{producto.nombre}</h4>
                    <p className="descripcion">{producto.descripcion}</p>
                    <p className="precio">
                    ${producto.precio.toLocaleString("es-CO")}
                    </p>
                </div>

                </Link>
            ))}

            </div>
        </div>
        </section>
    );
}
