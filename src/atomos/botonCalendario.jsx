import React from "react";
import "../css/botonCalendario.css";
import Icons from "./icons";

function BotonCalendario(props) {
    return (
        <div className='button-calendario' >
                <Icons iconName="calendario" />
            </div>
    );
}

export default BotonCalendario;