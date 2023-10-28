import React from "react";
import "../css/botonGuardar.css";
import Icons from "./icons";

function BotonGuardar(props) {
    return (
        <button className="botonGuardar">
            Guardar
            <Icons iconName="guardar" />
        </button>
    );
}

export default BotonGuardar;