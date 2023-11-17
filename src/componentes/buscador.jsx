import React, { useState } from 'react';
import "../css/buscador.css";
import Icons from '../atomos/icons';

function Buscador(props) {
/*     const { infoBovinos } = props;
 */    const [filtradoDatos, setFiltrado] = useState([]);

    const infoBovinos = [
        { "idBovino": 1, "areteBovino": "abcd1234", "nombre": "Manuela" },
        { "idBovino": 2, "areteBovino": "efgh5678", "nombre": "Carlos" },
        { "idBovino": 3, "areteBovino": "ijkl9101", "nombre": "Luisa" },
        { "idBovino": 4, "areteBovino": "mnop1122", "nombre": "Ana" },
        { "idBovino": 5, "areteBovino": "qrst3344", "nombre": "Pedro" }
    ]


    const handleChange = ({ target }) => {
        const searchTerm = target.value.toLowerCase();

        if (!Array.isArray(infoBovinos)) {
            setFiltrado([]);
            return;
        }

        const filteredData = infoBovinos.filter(
            (bovino) =>
                bovino.nombre.toLowerCase().includes(searchTerm) ||
                bovino.areteBovino.toLowerCase().includes(searchTerm)
        );
        setFiltrado(filteredData);
    };

    return (
        <form className="form">
            <button>
                <Icons iconName="buscar" />
            </button>
            <input className="input" placeholder="Escribe el Nombre o el Arete" required type="text" onChange={handleChange} list='x' />
            <button className="reset" type="reset">
                <Icons iconName="cerrar" />
            </button>
            <datalist id='x'>
                {filtradoDatos.map((bovino, index) => (
                    <option key={index} value={`${bovino.nombre} - ${bovino.areteBovino}`} />
                ))}
            </datalist>
        </form>
    );
}

export default Buscador;
