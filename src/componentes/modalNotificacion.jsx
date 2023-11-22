import React from 'react';
import Modal from 'react-modal';
import Style from "../css/modalNotificacion.module.css";
import Icons from '../atomos/icons';

function NotificacionesModal({ modalIsOpen, setModalIsOpen }) {
    const eventosEjemplo = [
        {
            titulo: 'Próximo evento: Conferencia de Agricultura',
        },
        {
            titulo: 'Próximo evento: Webinar de Ganadería Sostenible',
        },
        {
            titulo: 'Próximo evento: Exposición de Maquinaria Agrícola'
        },
    ];

    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className={Style.Modal}
        >
            <div>
                <h2>Notificaciones de Eventos</h2>
                <div className={Style.cerrar} onClick={() => setModalIsOpen(false)} style={{ cursor: 'pointer' }}>
                    <Icons iconName="cerrar" />
                </div>
            </div>
            {eventosEjemplo.map((evento) => (
                <p key={evento.id}>{evento.titulo}</p>
            ))}
        </Modal>
    );
}

export default NotificacionesModal;
