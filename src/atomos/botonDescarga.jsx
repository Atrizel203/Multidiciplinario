import React from "react";
import "../css/botonDescarga.css";
import Icons from "./icons";

function BotonDescargar(props) {
    return (
        <button className='button-descarga'>
                <Icons iconName="descargar" />
            </button>
    );
}

export default BotonDescargar;