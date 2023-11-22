import React, { useState } from 'react';
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregar from "../moleculas/impustEspeciales.jsx";
import Style from "../css/modalAgregarEvento.module.css";
import swal from 'sweetalert';
import crearEventos from '../api/crearEntidades/crearEvento.js';

function ModalAgregarEvento({ onClose }) {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [tituloEvento, setTituloEvento] = useState("");
    const [asunto, setAsunto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaTerminar, setFechaTerminar] = useState("");
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
        if (tituloEvento === "" || asunto === "" || fechaTerminar === "") {
            if (tituloEvento === "") {
                setTituloFeedback("¡Se requiere rellenar el título del evento!");
            }
            if (asunto === "") {
                setAsuntoFeedback("¡Se requiere seleccionar un asunto!");
            }
            if (fechaNacimiento === "") {
                setFechaFeedback("¡Se requiere seleccionar una fecha!");
            }
            swal({
                title: "Por favor, rellena los campos importantes antes de guardar.",
                icon: "error",
            });
        } else {

            let eventoObetnido = {
                "idBovino": localStorage.getItem("idBovino"),
                "tituloEvento": tituloEvento,
                "asunto": asunto,
                "descripcion": descripcion,
                "fechaTerminar": fechaTerminar,
                "created_bySub": localStorage.getItem("correo"),
                "fecha_Reporte": new Date().toISOString()
            }

            crearEventos(eventoObetnido);

            console.log(eventoObetnido);
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

            <ImputAgregar texto="Título de evento" tipo="text" value={tituloEvento} onChange={setTituloEvento} />
            {!tituloEvento && <div className="feedback">{tituloFeedback}</div>}
            <ImputAgregar texto="Asunto" tipo="select" options={opcionesEvento} value={asunto} onChange={setAsunto} />
            {!asunto && <div className="feedback">{asuntoFeedback}</div>}
            <ImputAgregar texto="Descripcion" tipo="textarea" className={Style.descripcion} value={descripcion} onChange={setDescripcion} />
            <ImputAgregar texto="Fecha A Terminar" tipo="date" value={fechaTerminar} onChange={setFechaTerminar} />
            {!fechaTerminar && <div className="feedback">{fechaFeedback}</div>}
            <div className={Style.guardar} onClick={handleGuardar}>
                <BotonGuardar />
            </div>

        </div>
    );
}

export default ModalAgregarEvento;
