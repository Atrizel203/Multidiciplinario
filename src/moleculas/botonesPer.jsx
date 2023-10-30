import React from 'react';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar"
import Descargar from "../atomos/botonDescarga"
import Calendario from "../atomos/botonCalendario"
import Editar from "../atomos/botonEditar"

function BotonesPerfil(props) {
    return (
        <div className="Botones-contenedor">
        <Borrar/>
        <Descargar/>
        <Calendario/>
        <Editar/>
        </div>
    );
}

export default BotonesPerfil;