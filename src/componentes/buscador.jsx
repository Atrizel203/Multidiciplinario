import React, { useState, useEffect, useRef } from 'react';
import '../css/buscador.css'; // Asegúrate de tener un archivo CSS con los estilos necesarios
import Icons from '../atomos/icons';
import { useNavigate } from 'react-router-dom';
import NotificacionesModal from './modalNotificacion';
import ObtenerDatosApi from "../api/peticionesGet/buscador.js"; // Ajusta la ruta según tu estructura

function Buscador() {
    const navigate = useNavigate();
    const [infoBovinos, setInfoBovinos] = useState([]);
    const [filtradoDatos, setFiltrado] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const node = useRef();

    useEffect(() => {
        // Función para manejar los clics fuera del componente
        const handleClickOutside = (e) => {
            if (node.current.contains(e.target)) {
                // Dentro del clic, no hacemos nada
                return;
            }
            // Fuera del clic, limpiamos los datos filtrados
            setFiltrado([]);
        };

        // Agregar el detector de eventos de clic al documento
        document.addEventListener("mousedown", handleClickOutside);

        // Limpiar el detector de eventos al desmontar
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleChange = ({ target }) => {
        const searchTerm = target.value ? target.value.toLowerCase() : '';

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
        localStorage.removeItem('token');
        localStorage.removeItem('correo');
        navigate('/');
    };

    const handleSelectBovino = (IdBovino) => {
        localStorage.setItem("idBovino", IdBovino);
        const currentLocation = window.location.pathname;
        if (currentLocation === '/vista-datos') {
            window.location.reload();
        } else {
            navigate('/vista-datos');
        }
    };


    return (
        <div className='NavComp' ref={node}>
            <form className="form">
                <button>
                    <Icons iconName="buscar" />
                </button>
                <input
                    className="input"
                    placeholder="Escribe el Nombre o el Arete"
                    required
                    type="text"
                    onChange={handleChange}
                    list='x'
                />
                <button className="reset" type="reset">
                    <Icons iconName="cerrar" />
                </button>
                {filtradoDatos.length > 0 && (
                    <div className='optionL' id='x'>
                        {filtradoDatos.map((bovino, index) => (
                            <div
                                style={{ background: "#8FD182" }}
                                key={index}
                                className={"option"}
                                onClick={() => handleSelectBovino(bovino.idBovino)}>
                                <span>Nombre:{bovino.nombre} </span>
                                <span>Arete:{bovino.areteBovino}</span>
                            </div>
                        ))}
                    </div>
                )}
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
                            </ul>
                        </div>
                    )}
                </div>

                <div className="salirBoton" onClick={() => setModalIsOpen(true)}>
                    <Icons iconName="notificacion" />
                </div>
            <NotificacionesModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </div>
    );
}

export default Buscador;
