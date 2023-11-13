import React from 'react';
import "../css/buscador.css"
import Icons from "../atomos/icons";

function buscador(props) {
    return (
        <div className="input-search">
            <input className='input-color' placeholder="Buscar" />
            <label className='boton'> 
            <div className='icon-buscar' > 
            <Icons  iconName="buscar" />
                </div>
                </label>
            
        </div> 
    );
}

export default buscador;