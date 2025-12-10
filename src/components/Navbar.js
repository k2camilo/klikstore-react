import {Link} from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [open, setOpen] = useState(false);

    function toggle(){
        setOpen(!open);
    }

    function closeMenu(){
        setOpen(false);
    }

    return (
        <nav className="menu">
            <div className="logo-redes">
                <div className="logo">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <img src="/img/klik-store-trp-300px.png" alt="logo-klikStore"/>
                    </Link>
                </div>
                <div className="redes">
                    <a href="https://www.instagram.com/myklikstore" className="redes-link" target="_blank">
                        <img src="/icon/instagram-bln.png" alt="logo-instagram" className="redes-logo"/>
                    </a>
                    <a href="https://www.tiktok.com/@myklikstore" className="redes-link" target="_blank">
                        <img src="/icon/tik-tok-bln.png" alt="logo-tiktoc" className="redes-logo"/>
                    </a>
                </div>
            </div>

            <button className={`menu-btn ${open ? "is-open" : ""}`}
                aria-expanded={open ? "true" : "false"}
                aria-controls="menu-lista"
                aria-label={open ? "Cerrar menu" : "Abrir menu"}
                onClick={toggle}>
                ☰
            </button>

            <div className="contenedor-menu">
                <ul id="menu-lista" className={`lista ${open ? "is-open" : ""}`}>
                    <li className="lista-opcion"><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                    <li className="lista-opcion"><Link to="/catalogo" onClick={closeMenu}>Catalogo</Link></li>
                    <li className="lista-opcion"><Link to="/catalogo" onClick={closeMenu}>Servicios</Link></li>
                    <li className="lista-opcion"><Link to="/blog" onClick={closeMenu}>Blog</Link></li>                    
                    <li className="lista-opcion"><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
                    <li className="lista-opcion"><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;