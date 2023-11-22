import React, { useState } from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil"; 
import ModalEvento from "../componentes/modalAgregarEvento";
import swal from 'sweetalert';


function BotonesPerfil(props) {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEvento, setShowModalEvento] = useState(false); 

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

    const handleBorrar = () => {
        swal({
            title: "¿Estas seguro de borrar la informacion de este bovino?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("La informacion del bovino fue borrada", {
                    icon: "success",
                });
            } else {
                swal("¡La informacion sigue donde siempre!");
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
            <Borrar/>
            </div>
            
            <div onClick={handleDescargar}>
            <Descargar />
            </div>
            
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
