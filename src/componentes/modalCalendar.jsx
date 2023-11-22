import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import Modal from 'react-modal';
import esLocale from '@fullcalendar/core/locales/es'; 
import Style from '../css/modalCalendario.module.css';
import Icons from '../atomos/icons';

Modal.setAppElement('#root'); 

const eventosEjemplo = [
  {
    titulo: 'Parto de vaca lucky',
    asunto: 'Preparación para la posible asistencia en dificultades del parto',
    fecha_Reporte: '2023-11-20',
    descripcion: 'Hay que estar preparados dias antes por si el parto llega a ser prematuro.',
    fecha_Reinsidio: '2023-11-25',
  },
  {
    titulo: 'Webinar de Ganadería Sostenible',
    asunto: 'Aprende sobre prácticas de ganadería sostenible',
    fecha_Reporte: '2023-11-21',
    descripcion: 'Participa en nuestro webinar donde expertos en ganadería sostenible compartirán consejos y mejores prácticas para mejorar la productividad y reducir el impacto ambiental.',
    fecha_Reinsidio: '2023-11-24',
  },
  {
    titulo: 'Exposición de Maquinaria Agrícola',
    asunto: 'Descubre las últimas innovaciones en maquinaria agrícola',
    fecha_Reporte: '2023-11-22',
    descripcion: 'Ven a nuestra exposición y descubre las últimas innovaciones en maquinaria agrícola. Podrás ver de cerca los equipos más avanzados y hablar con los fabricantes.',
    fecha_Reinsidio: '2023-11-26',
  }
];

function ModalCalendario() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event);
  };

  const backToCalendar = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Calendario Modal"
        className={Style.ModalCalendario}
      >
        {selectedEvent ? (
          <div className={Style.form_container}>
            <h2>Información del Evento</h2>
            <form>
              <label>
                Título:
                <input type="text" value={selectedEvent.title} readOnly />
              </label>
              <label>
                Asunto:
                <input type="text" value={selectedEvent.extendedProps.asunto} readOnly />
              </label>
              <label>
                Fecha de Reporte:
                <input type="text" value={selectedEvent.extendedProps.fecha_Reporte} readOnly />
              </label>
              <label>
                Descripción:
                <textarea value={selectedEvent.extendedProps.descripcion} readOnly />
              </label>
              <label>
                Fecha de Reinsidio:
                <input type="text" value={selectedEvent.extendedProps.fecha_Reinsidio} readOnly />
              </label>
            </form>
            <button onClick={backToCalendar}>
              <Icons iconName="regresar" />
            </button>
          </div>
        ) : (
          <div className={Style.calendar_container}>
            <FullCalendar
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'today',
                center: 'title prev next',
                right: 'dayGridMonth,timeGridDay,timeGridWeek'
              }}
              plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
              events={eventosEjemplo.map(e => ({
                title: e.titulo,
                start: e.fecha_Reporte,
                end: e.fecha_Reinsidio,
                extendedProps: e 
              }))}
              eventClick={handleEventClick}
              height={"90vh"}
              locale={esLocale}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ModalCalendario;
