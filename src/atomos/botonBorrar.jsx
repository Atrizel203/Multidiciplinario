import React from "react";
import "../css/botonBorrar.css";
import Icons from "./icons";

function BotonBorrar(props) {
    return (
        <div className='button-borrar'>
                <Icons iconName="eliminar" />
            </div>
    );
}

export default BotonBorrar;