import React from "react";
import "../css/botonDescarga.css";
import Icons from "./icons";

function BotonDescargar(props) {
    return (
        <div className='button-descarga'>
                <Icons iconName="descargar" />
            </div>
    );
}

export default BotonDescargar;