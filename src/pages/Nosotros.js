import "../assets/css/style.css";
import "../assets/css/responsive.css";

export default function Nosotros() {
    return (
        <section className="nosotros-page">

            {/* Logo */}
            <div className="nosotros-logo">
                <img src={process.env.PUBLIC_URL + "/img/klik-store.jpg"} alt="Logo Klik Store" />
            </div>

            {/* Texto principal */}
            <div className="nosotros-texto">
                <p>
                    En <strong>Klik Store</strong> nos apasiona la tecnología y creemos que cada dispositivo puede
                    reflejar tu estilo. Somos una tienda especializada en la venta de accesorios, periféricos 
                    y servicio técnico profesional para celulares y computadores.
                </p>

                <p>
                    Nuestro propósito es ofrecer soluciones tecnológicas confiables y accesibles, combinando calidad,
                    diseño y atención personalizada. Contamos con un equipo técnico capacitado que brinda diagnósticos
                    precisos, mantenimiento especializado y reparaciones con garantía.
                </p>
            </div>

            {/* Contacto + Mapa */}
            <div className="nosotros-contacto">

                <div className="contacto-info">
                    <h2>Visita y contáctate con Klik Store</h2>
                    <p><strong>Bogotá, Puente Aranda Calle 2 No. 56 a - 07</strong></p>
                    <p><strong>+57 3242111830</strong></p>
                    <p><strong>myklikstore@gmail.com</strong></p>
                </div>

                <div className="mapa-container">
                    <iframe
                        title="Ubicación Klik Store"
                        src={`https://www.google.com/maps?q=4.6169722,-74.12275&z=19&output=embed`}
                        width="100%"
                        height="350"
                        style={{ border: 0, borderRadius: 8 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

        </section>
    );
}
