import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Destacados() {
    const [productos, setProductos] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("/data/catalogo.json")
            .then(res => res.json())
            .then(data => {

                // Filtrar solo los destacados
                const destacados = data.filter(item => item.destacado === true);

                setProductos(destacados);
            });
    }, []);

    const itemsVisibles = 4;

    const maxIndex = Math.ceil(productos.length / itemsVisibles) - 1;

    const siguiente = () => {
        setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    };

    const anterior = () => {
        setIndex(prev => (prev === 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="destacados">
            <h2>Productos Destacados</h2>

            <button className="flecha-prod left-prod" onClick={anterior}>◄</button>
            <button className="flecha-prod right-prod" onClick={siguiente}>►</button>

            <div className="productos-contenedor">
                <div
                    className="productos-slide"
                    style={{
                        transform: `translateX(-${index * 100}%)`
                    }}
                >
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


