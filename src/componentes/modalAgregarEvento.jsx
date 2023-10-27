import React from "react";
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/impustEspeciales.jsx";
import "../css/modalAgregarEvento.css";

function ModalAgregarEvento(params) {
    let opcionesEvento = [
        { value: '', label: '' },
        { value: 'Vacuna', label: 'Vacuna' },
        { value: 'Cargada', label: 'Cargada/Inseminada' },
        { value: 'Otros', label: 'Otros' },
    ];
    return (

        <div className="contenedor">
            <div className="cerrar">
                <h1>
                    Agregar evenento al Bovino
                    <Icons iconName="calendario" />
                </h1>
                <Icons iconName="cerrar" />
            </div>

            <ImputAgregar texto="Titulo de evento" tipo="text" />
            <ImputAgregar texto="Asunto" tipo="select" options={opcionesEvento}/>

            
            <ImputAgregar texto="Descripcion" tipo="textarea" className="descripcion" />
            <ImputAgregar texto="Fecha naciemiento" tipo="date"/>

            <div className="guardar">
                <BotonGuardar />
            </div>

        </div>
    );
}

export default ModalAgregarEvento;