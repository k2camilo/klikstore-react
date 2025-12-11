import "../assets/css/style.css";
import "../assets/css/responsive.css";

export default function Blog(){
    return(
        <>
            <div className="img-banner-producto">
                <img src="/img/BANNER-BLOG.jpg" />
            </div>
            <h2 className="titulo-blog">Actualidad Tecnológica</h2>
            <div className="contenedor-noticias">
                <div className="caja-noticias">
                    <h3>Cómo alargar la vida útil de tu celular con simples hábitos</h3>
                    <p>Tu celular puede durar mucho más de lo que imaginas si aplicas buenos hábitos de uso. Evita exponerlo al calor, mantén el sistema actualizado y realiza limpiezas periódicas tanto físicas como de almacenamiento. Pequeños cuidados diarios prolongan el rendimiento y evitan reparaciones costosas.</p>
                </div>
                <div className="caja-noticias">
                    <h3>Cómo optimizar la batería de tu smartphone sin aplicaciones externas</h3>
                    <p>Las baterías actuales son más inteligentes, pero también más delicadas. Evita cargar tu celular toda la noche, usa el modo ahorro y cierra apps en segundo plano. Siguiendo estas prácticas simples, mejorarás el rendimiento y prolongarás la vida de la batería.</p>
                </div>
                <div className="caja-noticias">
                    <h3>¿Reparar o reemplazar? Qué hacer cuando tu equipo falla</h3>
                    <p>Cuando un dispositivo presenta fallas, la duda es inevitable: ¿reparar o comprar uno nuevo? Antes de decidir, evalúa el costo de reparación, la antigüedad del equipo y el tipo de daño. En muchos casos, una reparación profesional extiende la vida útil y evita gastos innecesarios.</p>
                </div>
                <div className="caja-noticias">
                    <h3>Señales de que tu computador necesita mantenimiento urgente</h3>
                    <p>Un equipo lento, con sobrecalentamiento o ruidos inusuales puede estar pidiendo mantenimiento. Detectar estos síntomas a tiempo evita fallos mayores. En Klik Store recomendamos realizar una revisión preventiva cada seis meses para mantener el sistema estable y evitar pérdidas de información.</p>
                </div>
                <div className="caja-noticias">
                    <h3>Actualizaciones de software: por qué son más importantes de lo que crees</h3>
                    <p>Actualizar tu sistema no solo agrega funciones nuevas; también corrige fallos y mejora la seguridad. Ignorar las actualizaciones puede dejar tu equipo vulnerable. Mantén siempre tu software al día para garantizar un mejor desempeño y protección frente a amenazas digitales.</p>
                </div>
                <div className="caja-noticias">
                    <h3>Seguridad digital: cómo proteger tus datos personales en línea</h3>
                    <p>Proteger tu información es más importante que nunca. Usa contraseñas seguras, evita redes Wi-Fi públicas y mantén activado el doble factor de autenticación. Con medidas simples puedes prevenir el robo de datos y navegar con mayor tranquilidad.</p>
                </div>
                <div className="caja-noticias">
                    <h3>Los accesorios que no pueden faltar en tu setup tecnológico</h3>
                    <p>Un buen mouse, teclado ergonómico, audífonos con cancelación de ruido y soporte para tu laptop pueden cambiar tu experiencia diaria. Estos accesorios no solo aportan comodidad, también aumentan tu productividad. En Klik Store encuentras las mejores opciones para crear tu espacio ideal.</p>
                </div>
            </div>
        </>
    );
}