import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useState } from "react";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        telefono: "",
        email: "",
        mensaje: ""
    });

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado (modo demostración)."); 
    };

    return (
        <section className="page-contacto">
            <h1>CONTÁCTENOS</h1>
            <p className="subtexto-contacto">
                Completa el siguiente formulario y cuéntanos en qué podemos ayudarte.
                En Klik Store te responderemos pronto para ofrecerte la mejor solución tecnológica.
            </p>

            <div className="contacto-formulario">
                <form onSubmit={handleSubmit}>
                    <label>Nombres:</label>
                    <input 
                        type="text" 
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        required
                    />

                    <label>Apellidos:</label>
                    <input 
                        type="text" 
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required
                    />

                    <label>Teléfono:</label>
                    <input 
                        type="text" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />

                    <label>e-mail:</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Mensaje:</label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
