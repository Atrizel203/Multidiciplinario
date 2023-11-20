import React from 'react';
import Leftvar from '../componentes/leftVar';
import Buscador from '../componentes/buscador';
import FiltroEstados from '../componentes/filtroEstados';
import CoruselEventos from '../componentes/coruselEventos.jsx';
const App = () => {
    const eventosEjemplo = [
        {
            titulo: 'Conferencia de Agricultura',
            asunto: 'Discusión sobre las últimas tendencias en agricultura',
            fecha_Reporte: '2023-11-20',
            descripcion: 'Únete a nosotros para una conferencia sobre las últimas tendencias en agricultura y cómo aplicarlas en tu negocio.',
            fecha_Reinsidio: '2023-11-25T12:00:00Z',
        },
        {
            titulo: 'Webinar de Ganadería Sostenible',
            asunto: 'Aprende sobre prácticas de ganadería sostenible',
            fecha_Reporte: '2023-11-21',
            descripcion: 'Participa en nuestro webinar donde expertos en ganadería sostenible compartirán consejos y mejores prácticas para mejorar la productividad y reducir el impacto ambiental.',
            fecha_Reinsidio: '2023-11-24T18:30:00Z',
        },
        {
            titulo: 'Exposición de Maquinaria Agrícola',
            asunto: 'Descubre las últimas innovaciones en maquinaria agrícola',
            fecha_Reporte: '2023-11-22',
            descripcion: 'Ven a nuestra exposición y descubre las últimas innovaciones en maquinaria agrícola. Podrás ver de cerca los equipos más avanzados y hablar con los fabricantes.',
            fecha_Reinsidio: '2023-11-26T10:00:00Z',
        },
        {
            titulo: 'Exposición de Maquinaria Agrícola',
            asunto: 'Descubre las últimas innovaciones en maquinaria agrícola',
            fecha_Reporte: '2023-11-22',
            descripcion: 'Ven a nuestra exposición y descubre las últimas innovaciones en maquinaria agrícola. Podrás ver de cerca los equipos más avanzados y hablar con los fabricantes.',
            fecha_Reinsidio: '2023-11-26T10:00:00Z',
        },
    ];

    return (
        <div>
            <Leftvar />
            <Buscador />
            <div>
                <FiltroEstados />
                <CoruselEventos eventos={eventosEjemplo} />
            </div>
        </div>
    );
}

export default App;
