import React from "react";
import "../css/botonCirculo.css";

function BotonCirculo(props) {
    const buttonStyle = {
        backgroundColor: props.style.backgroundColor || "#5AA257",  
        color: props.style.color || "#FFFFFF", 
    };

    return (
        <div className="botonCirculo" onClick={props.onClick} style={buttonStyle}>
            <span>{props.texto}</span>
        </div>
    );
}

export default BotonCirculo;
