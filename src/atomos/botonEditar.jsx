import React from "react";
import "../css/botonEditar.css";
import Icons from "./icons";

function BotonEditar(props) {
    return (
        <button className='button-Editar'>
                <Icons iconName="editar" />
            </button>
    );
}

export default BotonEditar;