import React from "react";
import "../css/botonCalendario.css";
import Icons from "./icons";

function BotonCalendario(props) {
    return (
        <button className='button-calendario'>
                <Icons iconName="calendario" />
            </button>
    );
}

export default BotonCalendario;