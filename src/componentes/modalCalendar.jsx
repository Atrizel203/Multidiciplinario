import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import '../css/modalCalendario.css'; 
import esLocale from '@fullcalendar/core/locales/es'; // Importar el locale español


function DemoApp() {
  return (
    <div>
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'today Cargadas Vacunas NotasExtra',
          center: 'title prev next',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        customButtons={{
          Cargadas: {
            text: 'Cargadas'
           
          },
          Vacunas: {
            text: 'Vacunas'
          },
          NotasExtra: {
            text: 'Notas extra',
          }
        }}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        events={[
          { title: 'Evento 1', date: '2023-10-01' },
          { title: 'Evento 2', start: '2023-10-07', end: '2023-10-10' },
          { title: 'Evento 3', start: '2023-10-09T12:30:00' }
        ]}
        height={"90vh"}

        locale={esLocale} // Establecer el locale a español
      />
    </div>
  );
}

export default DemoApp;
