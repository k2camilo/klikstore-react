import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [categoriaFiltro, setCategoriaFiltro] = useState("todas");

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/data/catalogo.json")
            .then(res => res.json())
            .then(data => setProductos(data));
    }, []);

    /** FILTRO POR BÚSQUEDA */
    const productosBuscados = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    /** FILTRO POR CATEGORÍA (opcional) */
    const productosFiltrados =
        categoriaFiltro === "todas"
            ? productosBuscados
            : productosBuscados.filter(p => p.categoria === categoriaFiltro);

    /** AGRUPAR POR CATEGORÍA */
    const categorias = [
        "accesorios-celular",
        "accesorios-pc",
        "sonido",
        "curiosidades",
        "jugueteria"
    ];

    const productosPorCategoria = categorias.reduce((acc, cat) => {
        acc[cat] = productosFiltrados.filter(p => p.categoria === cat);
        return acc;
    }, {});

    return (
        <section className="catalogo-grid contenedor-catalogo">
            <h2>Catálogo Completo</h2>

            {/* 🔍 Buscador */}
            <div className="buscador-catalogo">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            {/* 📂 Filtro por categoría */}
            <div className="filtros-catalogo">
                <select
                    value={categoriaFiltro}
                    onChange={(e) => setCategoriaFiltro(e.target.value)}
                >
                    <option value="todas">Todas las categorías</option>
                    {categorias.map(cat => (
                        <option key={cat} value={cat}>
                            {cat.replace("-", " ").toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

            {/* GRID POR CATEGORÍAS */}
            {categorias.map(cat => {
                const lista = productosPorCategoria[cat];

                if (lista.length === 0) return null; // si no hay productos filtrados, omite categoría

                return (
                    <div key={cat} className="categoria-bloque">
                        <h3 className="categoria-titulo">
                            {cat.replace("-", " ").toUpperCase()}
                        </h3>

                        <div className="grid-productos">
                            {lista.map(producto => (
                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="producto-grid"
                                    key={producto.id}
                                >
                                    <div className="img-producto">
                                        <img src={process.env.PUBLIC_URL + producto.imagen} alt={producto.nombre} />
                                    </div>

                                    <div className="texto-producto">
                                        <h4>{producto.nombre}</h4>
                                        <p className="descripcion">
                                            {producto.descripcion}
                                        </p>
                                        <p className="precio">
                                            ${producto.precio.toLocaleString("es-CO")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
