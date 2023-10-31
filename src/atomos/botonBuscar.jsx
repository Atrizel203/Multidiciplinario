import React from "react";
import "../css/botonBuscar.css";
import Icons from "./icons";

function BotonBuscar(props) {
    return (
        <button className='input-button'>
            
                <Icons iconName="buscar" />
            </button>

    );
}

export default BotonBuscar;