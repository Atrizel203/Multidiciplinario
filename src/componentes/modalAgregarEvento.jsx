import React, { useState } from 'react';
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/impustEspeciales.jsx";
import Style from "../css/modalAgregarEvento.module.css";
import swal from 'sweetalert';

function ModalAgregarEvento({ onClose }) {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [tituloEvento, setTituloEvento] = useState("");
    const [asunto, setAsunto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [tituloFeedback, setTituloFeedback] = useState("");
    const [asuntoFeedback, setAsuntoFeedback] = useState("");
    const [fechaFeedback, setFechaFeedback] = useState("");

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

    const handleGuardar = () => {
        if (tituloEvento === "" || asunto === "" || fechaNacimiento === "") {
            if (tituloEvento === "") {
                setTituloFeedback("¡Requiere rellenar el título del evento!");
            }
            if (asunto === "") {
                setAsuntoFeedback("¡Requiere seleccionar un asunto!");
            }
            if (fechaNacimiento === "") {
                setFechaFeedback("¡Requiere seleccionar una fecha!");
            }
            swal({
                title: "Por favor, rellena los campos importantes antes de guardar.",
                icon: "error",
              });
        } else {
            swal({
                title: "Los datos se han guardado correctamente.",
                icon: "success",
              });
        }
    };

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

            <ImputAgregar texto="Titulo de evento" tipo="text" value={tituloEvento} onChange={setTituloEvento} />
            {!tituloEvento && <div className="feedback">{tituloFeedback}</div>}
            <ImputAgregar texto="Asunto" tipo="select" options={opcionesEvento} value={asunto} onChange={setAsunto} />
            {!asunto && <div className="feedback">{asuntoFeedback}</div>}
            <ImputAgregar texto="Descripcion" tipo="textarea" className={Style.descripcion} value={descripcion} onChange={setDescripcion} />
            <ImputAgregar texto="Fecha A Terminar" tipo="date" value={fechaNacimiento} onChange={setFechaNacimiento}/>
            {!fechaNacimiento && <div className="feedback">{fechaFeedback}</div>}
            <div className={Style.guardar} onClick={handleGuardar}>
                <BotonGuardar />
            </div>

        </div>
    );
}

export default ModalAgregarEvento;