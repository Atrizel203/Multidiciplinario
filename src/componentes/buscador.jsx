import React, { useState } from 'react';
import '../css/buscador.css'; // Asegúrate de tener tus estilos CSS importados correctamente
import Icons from '../atomos/icons';
import { useNavigate } from 'react-router-dom';

function Buscador(props) {
    /*     const { infoBovinos } = props; */   
    const navigate = useNavigate();
    const [filtradoDatos, setFiltrado] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

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
        ).slice(0, 5);
        setFiltrado(filteredData);
    };

    
    const Salir = () => {
        navigate('/');
    };

    const infoBovinos = [
        { "idBovino": 1, "areteBovino": "abcd1234", "nombre": "Manuela" },
        { "idBovino": 2, "areteBovino": "efgh5678", "nombre": "Carlos" },
        { "idBovino": 3, "areteBovino": "ijkl9101", "nombre": "Luisa" },
        { "idBovino": 4, "areteBovino": "mnop1122", "nombre": "Ana" },
        { "idBovino": 5, "areteBovino": "qrst3344", "nombre": "Pedro" }
    ];

    return (
        <div className='NavComp'>
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




            <div className="dropdown">
                <div className="salirBoton" onClick={toggleMenu}>
                    <Icons iconName="usuario" />
                </div>
                {showMenu && (
                    <div className="dropdown-content">
                        <ul>
                            <li onClick={Salir}>
                                <Icons iconName="salir" />
                                Cerrar sesión
                            </li>
                            <li>Ver correo electrónico</li>
                        </ul>
                    </div>
                )}
            </div>


            <div  className="salirBoton">
                <Icons iconName="notificacion" />
            </div>

        </div>
    );
}

export default Buscador;
