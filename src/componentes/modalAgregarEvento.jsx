import React from "react";
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/imputTexto.jsx"
import "../css/modalAgregarEvento.css";

function ModalAgregarEvento(params) {
    return (

        <div className="contenedor">
            <div className="cerrar">
                <h1>
                    Agregar evenento al Bovino
                    <Icons iconName="calendario" />
                </h1>
                <Icons iconName="cerrar" />
            </div>

            <ImputAgregar texto="Titulo de evento"/>
            <ImputAgregar texto="Asunto" />
            <ImputAgregar texto="Descripcion" />
            <ImputAgregar texto="Fecha naciemiento"  />
        <div className="guardar">
            <BotonGuardar />
        </div>

        </div>
    );
}

export default ModalAgregarEvento;