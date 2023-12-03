import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import Modal from 'react-modal';
import esLocale from '@fullcalendar/core/locales/es'; 
import Style from '../css/modalCalendario.module.css';
import Icons from '../atomos/icons';
import ObetnerCalendario from '../api/peticionesGet/obtenerCalendario.js';

Modal.setAppElement('#root'); 

function ModalCalendario() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventosEjemplo, setInfoBovinos] = useState([]);

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event);
  };

  const backToCalendar = () => {
    setSelectedEvent(null);
  };

  useEffect(() => {
    async function fetchData() {
        try {
            const data = await ObetnerCalendario(localStorage.getItem('idBovino'));
            setInfoBovinos(data);
        } catch (error) {
            console.error('Error al obtener datos de la API:', error.message);
        }
    }

    fetchData();
}, []); 

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
                <input type="text" value={selectedEvent.extendedProps.fecha_reporte} readOnly />
              </label>
              <label>
                Descripción:
                <textarea value={selectedEvent.extendedProps.descripcion} readOnly />
              </label>
              <label>
                Fecha de Reinsidio:
                <input type="text" value={selectedEvent.extendedProps.fecha_reinsidio} readOnly />
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
                title: e.titulo ,
                start: new Date(e.fecha_reporte),
                end: new Date(e.fecha_reinsidio),
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
