import "../assets/css/style.css";

export default function BtnWts() {

    const mensaje = encodeURIComponent(
        "Hola, vengo de la página web y estoy interesado en un producto o servicio."
    );

    const telefono = "573242111830";

    return (
        <a
            href={`https://wa.me/${telefono}?text=${mensaje}`}
            className="btn-wts"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="/icon/social.png" alt="WhatsApp" />
        </a>
    );
}
