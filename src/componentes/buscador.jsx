import React from 'react';
import "../css/buscador.css"
import BotonBuscar from '../atomos/botonBuscar';

function buscador(props) {
    return (
        <div className="input-search">
            <input className='input-color' placeholder="Buscar" />
            
        </div>
    );
}

export default buscador;