import React from "react";
import "../css/botonGuardar.css";
import Icons from "./icons";

function BotonGuardar(props) {
    const textoBoton = props.texto || "Guardar";
    const iconName = props.texto === "Buscar" ? "buscar" : "guardar";

    return (
        <button className="botonGuardar">
            {textoBoton}
            <Icons iconName={iconName} />
        </button>
    );
}

export default BotonGuardar;