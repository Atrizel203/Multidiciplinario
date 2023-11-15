import React, { useState } from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil"; 

function BotonesPerfil(props) {
    const [showModalEditar, setShowModalEditar] = useState(false);

    const openModalEditar = () => {
        setShowModalEditar(true);
    };

    const closeModalEditar = () => {
        setShowModalEditar(false);
    };

    return (
        <div className="Botones-contenedor">
            <Borrar/>
            <Descargar />
            <Calendario/>
            <div onClick={openModalEditar}>
            <Editar />
            </div >
            {showModalEditar && <ModalEditar onClose={closeModalEditar} />}
        </div>
    );
}

export default BotonesPerfil;
