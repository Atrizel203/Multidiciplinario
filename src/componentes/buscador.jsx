import React, { useState } from 'react';
import "../css/buscador.css"
import Icons from "../atomos/icons";

function buscador(props) {
    // const [filtradoNombre, setFiltrado] = useState([])
    // const arr = []
    // const handleChange = ({target}) => {
    //     setFiltrado(arr.filter(({nombre}) => {
    //         nombre.include(target.value)
    //     }))
    // }
    return (
        <div className="input-search">
            <input className='input-color' placeholder="Buscar"/*  onChange={handleChange} list='x' *//>
            <label className='boton'> 
            <div className='icon-buscar' > 
            <Icons  iconName="buscar" />
                </div>
                </label>
          {/* <datalist id='x'>
            {filtradoNombre.map(() => (<option>a</option>))}
            </datalist>   */}
        </div> 
    );
}

export default buscador;
