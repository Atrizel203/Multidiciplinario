import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import '../css/modalCalendario.css'; 

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
            text: 'Cargadas',
            click: function() {
              alert('Clicked Cargadas!');
            }
          },
          Vacunas: {
            text: 'Vacunas',
            click: function() {
              alert('Clicked Vacunas!');
            }
          },
          NotasExtra: {
            text: 'Notas extra',
            click: function() {
              alert('Clicked Notas extra!');
            }
          }
        }}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        events={[
          { title: 'Evento 1', date: '2023-10-01' },
          { title: 'Evento 2', start: '2023-10-07', end: '2023-10-10' },
          { title: 'Evento 3', start: '2023-10-09T12:30:00' }
        ]}
        height={"90vh"}
      />
    </div>
  );
}

export default DemoApp;
