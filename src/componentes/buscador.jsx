import React from 'react';
import "../css/buscador.css"
import Icons from '../atomos/icons';

function buscador(props) { 
    return (
        <form className="form">
            <button>
                    <Icons iconName="buscar"/>
            </button>
            <input className="input" placeholder="Escribe el Nombre o el Arete" required type="text" />
            <button className="reset" type="reset">
                <Icons iconName="cerrar"/>
            </button>
        </form>
    );
}


export default buscador;
