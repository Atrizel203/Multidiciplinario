import React, { useState } from 'react';
import "../css/buscador.css";
import Icons from '../atomos/icons';

function Buscador(props) { 
    const [filtradoNombre, setFiltrado] = useState([]);
    const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];  

    const handleChange = ({ target }) => {
        const filtered = arr.filter((nombre) => nombre.includes(target.value));
        setFiltrado(filtered);
    };
    
    return (
        <form className="form">
            <button>
                <Icons iconName="buscar"/>
            </button>
            <input className="input" placeholder="Escribe el Nombre o el Arete" required type="text" onChange={handleChange} list='x'  />
            <button className="reset" type="reset">
                <Icons iconName="cerrar"/>
            </button>
            <datalist id='x'>
                {filtradoNombre.map((nombre, index) => (
                    <option key={index} value={nombre} />
                ))}
            </datalist>
        </form>
    );
}

export default Buscador;
