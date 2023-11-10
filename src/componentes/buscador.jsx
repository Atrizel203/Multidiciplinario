import React from 'react';
import "../css/buscador.css"
import Icons from "../atomos/icons";

function buscador(props) {
    return (
        <div className="input-search">
            <input className='input-color' placeholder="Buscar" />
            <label className='boton'> <Icons iconName="buscar" /></label>
            
        </div> 
    );
}

export default buscador;