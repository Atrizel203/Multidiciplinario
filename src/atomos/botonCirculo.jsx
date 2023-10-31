import React from "react";
import "../css/botonCirculo.css";
function BotonCirculo(props) {
    return (
        <div className="botonCirculo" onClick={props.onClick}>
            <span>{props.texto}</span>
        </div>
    );
}

export default BotonCirculo;