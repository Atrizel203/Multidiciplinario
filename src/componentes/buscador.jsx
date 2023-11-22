import React, { useState, useEffect } from 'react';
import '../css/buscador.css';
import Icons from '../atomos/icons';
import { useNavigate } from 'react-router-dom';
import ObtenerDatosApi from "../api/buscador.js" // Ajusta la ruta según tu estructura

function Buscador() {
    const navigate = useNavigate();
    const [infoBovinos, setInfoBovinos] = useState([]);
    const [filtradoDatos, setFiltrado] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ObtenerDatosApi();
                setInfoBovinos(data);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error.message);
            }
        }

        fetchData();
    }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez al montar el componente

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
        )/* .slice(0, 5) */;
        setFiltrado(filteredData);

        console.log("filtrmos", filteredData);
    };

    const Salir = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('correo');
        navigate('/');
    };

    return (
        <div className='NavComp'>
            <form className="form">
                <button>
                    <Icons iconName="buscar" />
                </button>
                <input className="input" placeholder="Escribe el Nombre o el Arete" required type="text" onChange={handleChange} />
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

            <div className="salirBoton">
                <Icons iconName="notificacion" />
            </div>
        </div>
    );
}

export default Buscador;
