import React, { useState } from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil"; 
import ModalEvento from "../componentes/modalAgregarEvento";

function BotonesPerfil(props) {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEvento, setShowModalEvento] = useState(false);  // Agrega estado para la nueva modal

    const openModalEditar = () => {
        setShowModalEditar(true);
    };

    const closeModalEditar = () => {
        setShowModalEditar(false);
    };

    const openModalEvento = () => {
        setShowModalEvento(true);
    };

    const closeModalEvento = () => {
        setShowModalEvento(false);
    };


    return (
        <div className="Botones-contenedor">
            <Borrar/>
            <Descargar />
            <div onClick={openModalEvento}>
            <Calendario/>
            </div>
            <div onClick={openModalEditar}>
            <Editar />
            </div >
            {showModalEditar && <ModalEditar onClose={closeModalEditar} />}
            {showModalEvento && <ModalEvento onClose={closeModalEvento} />}

        </div>
    );
}

export default BotonesPerfil;
