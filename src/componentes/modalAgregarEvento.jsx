import React, { useState } from 'react';
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/impustEspeciales.jsx";
import Style from "../css/modalAgregarEvento.module.css";

function ModalAgregarEvento({ onClose }) {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const closeModal = () => {
      if (onClose) {
        onClose();
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

        <div className={Style.contenedor}>
            <div className={Style.cerrar}>
                <h1>
                    Agregar evento al Bovino
                    <Icons iconName="calendario" />
                </h1>
                <div onClick={closeModal}>
                <Icons iconName="cerrar" />
                </div>
            </div>

            <ImputAgregar texto="Titulo de evento" tipo="text" />
            <ImputAgregar texto="Asunto" tipo="select" options={opcionesEvento} />


            <ImputAgregar texto="Descripcion" tipo="textarea" className={Style.descripcion} />
            <ImputAgregar texto="Fecha A Terminar" tipo="date" />

            <div className={Style.guardar}>
                <BotonGuardar />
            </div>

        </div>
    );
}

export default ModalAgregarEvento;