import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useEffect, useRef, useState } from "react";

export default function Carrusel(){

    console.log("✅ Carrusel montado");

    const baners = [
        process.env.PUBLIC_URL + "/img/Banner1.jpg",
        process.env.PUBLIC_URL + "/img/Banner2.jpg",
        process.env.PUBLIC_URL + "/img/Banner3.jpg"
    ];

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(()=>{
        resetTimeout();
        timeoutRef.current = setTimeout(()=>{
            setIndex((prev) => (prev + 1) % baners.length);
        }, 4000);

        return () => resetTimeout();
    }, [index]);

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    };

    function siguiente (){
        resetTimeout();
        setIndex((i)=> (i+1) % baners.length);
    };

    function anterior (){
        resetTimeout();
        setIndex((i) => (i === 0 ? baners.length - 1 : i - 1));
    };

    return(
        <section className="carrusel">
            <div className="carrusel-slide" style={{ transform: `translateX(-${index * 100}%)` }}>
                {baners.map((src, i) => (
                    <div className="banner" key={i}>
                        <img src={src} alt={`banner_${i + 1}`} />
                    </div>
                ))}
            </div>

            <button className="flecha izquierda" onClick={anterior} aria-label="Anterior">◄</button>
            <button className="flecha derecha" onClick={siguiente} aria-label="Siguiente">►</button>
        </section>
    );
};
