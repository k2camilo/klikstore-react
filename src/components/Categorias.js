import "../assets/css/componentes.css";
import "../assets/css/pages.css";

export default function Categorias(){
    return (
        <section class="container categorias">
            <div class = "contenedor-categorias">
                <div class = "caja item1">
                    <img class="img-item1" src="/img/categoria-celular.png" alt=""/>
                    <div class="caja-texto1">
                        <h1>Accesorios para Celular</h1>
                        <p>Fundas, Audifonos, cables, cargadores, soportes...</p>
                        <button class="btn-enviar">Ver más</button>
                    </div>
                    <h2>Refleja tu estilo</h2>
                </div>
                <div class = "caja item2">
                    <img class="img-item2" src="/img/categoria-curiosidades2.png" alt=""/>
                    <div class="caja-texto2">
                        <h1>Solo para fans</h1>
                        <p>Lo más curioso y coleccionable está aquí</p>
                        <button class="btn-enviar">Ver más</button>
                    </div>
                </div>
                <div class = "caja item3">
                    <img class="img-item3" src="/img/categoria-peluches.png" alt=""/>
                    <div class="caja-texto3">
                        <h1>Para regalar sonrisas</h1>
                        <p>Encuentra el regalo ideal.</p>
                        <button class="btn-enviar">Ver más</button>
                    </div>
                </div>
                <div class = "caja item4">
                    <img class="img-item4" src="/img/categoria-kawaii.png" alt=""/>
                    <div class="caja-texto4">
                        <h1>Pequeños caprichos</h1>
                        <p>Todo lo kawaii está aquí.</p>
                        <button class="btn-enviar">Ver más</button>
                    </div>
                </div>
                <div class = "caja item5">
                    <img class="img-item5" src="/img/categoria-papeleria.png" alt=""/>
                    <div class="caja-texto5">
                        <h1>Todo en Papelería</h1>
                        <p>Fundas, Audifonos, cables, cargadores, soportes...</p>
                        <button class="btn-enviar">Ver más</button>
                    </div>
                </div>
            </div>
            <div class="contenedor-pc">
                <div class="caja-pc pc1">
                    <p>Todo lo que necesitas</p>
                    <h1>COMBOS PERRIFERICOS</h1>
                    <p>Teclado + Mouse + Diadema + Mouse pad</p>
                </div>
                <div class="caja-pc pc2">
                    <p>Los mejores</p>
                    <h2>Accesorios</h2>
                    <p>Equipa tu computador con accesorios que combinan funcionalidad, estilo y rendimiento</p>
                    <button class="btn-enviar">Arma tu combo</button>
                </div>
            </div>
        </section>
    );
}