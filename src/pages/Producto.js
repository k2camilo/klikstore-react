import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/style.css";

export default function Producto(){

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch("/data/productos.json")
        .then(res => res.json())
        .then(data => {
            const prod = data.find(p => p.id === Number(id));
            setProducto(prod);
        });
    }, [id]);

    if(!producto){
        return <h2>Cargando producto...</h2>;
    }

    return (
        <section className="producto-detalle">

        <img src={producto.imagen} alt={producto.nombre} />

        <div className="info-producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>${producto.precio.toLocaleString("es-CO")}</h3>
            <a className="btn-comprar"
                href={`https://wa.me/573242111830?text=${encodeURIComponent(
                    `Hola, vengo desde la página web y estoy interesado en el producto: ${producto.nombre}`
                )}`} target="_blank">Pregunta por él
            </a>
        </div>

        </section>
    );
}
