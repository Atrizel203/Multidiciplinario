import React from "react";
import "../css/botonBorrar.css";
import Icons from "./icons";

function BotonBorrar(props) {
    return (
        <button className='button-borrar'>
                <Icons iconName="eliminar" />
            </button>
    );
}

export default BotonBorrar;