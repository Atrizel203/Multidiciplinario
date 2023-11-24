import React, { useState } from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil";
import ModalEvento from "../componentes/modalAgregarEvento";
import ModalCalendario from '../componentes/modalCalendar';
import swal from 'sweetalert';
import { borradoLogico } from "../api/borrarEntidades/borrarBovino";
import { useNavigate } from "react-router-dom";

function BotonesPerfil() {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEvento, setShowModalEvento] = useState(false);
    const [showModalCalendario, setShowModalCalendario] = useState(false);
    const navigator = useNavigate();

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

    const handleBorrar = () => {
        swal({
            title: "¿Estás seguro de borrar la información de este bovino?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    borradoLogico(localStorage.getItem("idBovino"));
                    swal("La informacion del bovino fue borrada", {
                        icon: "success",
                    });
                    navigator("/bovinos-opciones");
                } else {
                    swal("¡La información sigue donde siempre!");
                }
            });
    };

    const handleDescargar = () => {
        swal({
            title: "El archivo se ha descargado correctamente.",
            icon: "success",
        });
    };


    return (
        <div className="Botones-contenedor">
            <div onClick={handleBorrar}>
                <Borrar />
            </div>
            <div onClick={handleDescargar}>
                <Descargar />
            </div>
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
