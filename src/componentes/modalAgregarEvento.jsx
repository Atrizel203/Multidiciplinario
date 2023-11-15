import React from "react";
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/impustEspeciales.jsx";
import "../css/modalAgregarEvento.css";

function ModalAgregarEvento(props) {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    let opcionesEvento = [
        { value: '', label: '' },
        { value: 'Vacuna', label: 'Vacuna' },
        { value: 'Enferma', label: 'Enferma' },
        { value: "Aborto", label: "Aborto" },
        { value: "Muerta", label: "Muerta" },
        { value: 'Cargada', label: 'Cargada/Inseminada' },
        { value: 'Otros', label: 'Otros' },
    ];
    return (

        <div className="contenedor">
            <div className="cerrar">
                <h1>
                    Agregar evento al Bovino
                    <Icons iconName="calendario" />
                </h1>
                <div onClick={handleClose}>
                <Icons iconName="cerrar" />
                </div>
            </div>

            <ImputAgregar texto="Titulo de evento" tipo="text" />
            <ImputAgregar texto="Asunto" tipo="select" options={opcionesEvento} />


            <ImputAgregar texto="Descripcion" tipo="textarea" className="descripcion" />
            <ImputAgregar texto="Fecha naciemiento" tipo="date" />

            <div className="guardar">
                <BotonGuardar />
            </div>

        </div>
    );
}

export default ModalAgregarEvento;