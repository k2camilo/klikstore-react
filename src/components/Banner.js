import "../assets/css/style.css";

export default function Banner(){
    return(
        <div className="img-banner-producto">
            <img src={process.env.PUBLIC_URL + "/img/banner_productos.jpg"}/>
        </div>
    );
}