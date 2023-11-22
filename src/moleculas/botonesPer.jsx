import React, { useState } from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil"; 
import ModalEvento from "../componentes/modalAgregarEvento";
import ModalCalendario from '../componentes/modalCalendar';

function BotonesPerfil(props) {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEvento, setShowModalEvento] = useState(false);
    const [showModalCalendario, setShowModalCalendario] = useState(false);

    const openModalEditar = () => {
        setShowModalEditar(true);
    };

    const closeModalEditar = () => {
        setShowModalEditar(false);
    };

    const openModalEvento = () => {
        setShowModalEvento(true);
        setShowModalCalendario(true); 
    };

    const closeModalEvento = () => {
        setShowModalEvento(false); 
        setShowModalCalendario(false); 
    }
    
    const openModalCalendario = () => {
        setShowModalEvento(true);
        setShowModalCalendario(true); 
    };

    const closeModalCalendario = () => {
        setShowModalEvento(false); 
        setShowModalCalendario(false); 
    };

    return (
        <div className="Botones-contenedor">
            <Borrar />
            <Descargar />
            <div onClick={openModalEvento}>
                <Calendario />
            </div>
            <div onClick={openModalCalendario}>
            </div>
            <div onClick={openModalEditar}>
                <Editar />
            </div>
            {showModalEditar && <ModalEditar onClose={closeModalEditar} />}
            {showModalEvento && <ModalEvento onClose={closeModalEvento} />}
            {showModalCalendario && <ModalCalendario onClose={closeModalCalendario} />}
        </div>
    );
}

export default BotonesPerfil;
