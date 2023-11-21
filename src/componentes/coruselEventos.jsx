import React, { useState, useEffect } from 'react';
import '../css/coruselEventos.css';
import BotonBorrar from '../atomos/botonBorrar';

const CoruselEventos = ({ eventos }) => {
    const eventosPorPagina = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(eventos.length / eventosPorPagina);
    const startIndex = (currentPage - 1) * eventosPorPagina;
    const endIndex = startIndex + eventosPorPagina;
    const eventosActuales = eventos.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div>
            <div className='cardsEventos'>
                {eventosActuales.map((evento, index) => (
                    <CardEvento
                        key={index}
                        titulo={evento.titulo}
                        asunto={evento.asunto}
                        fecha_Reporte={evento.fecha_Reporte}
                        descripcion={evento.descripcion}
                        fecha_Reinsidio={evento.fecha_Reinsidio}
                    />
                ))}
            </div>
            <div className="paginationButtons">
                <button onClick={goToFirstPage} disabled={currentPage === 1}>« Primera</button>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>‹ Anterior</button>
                <span>{`${currentPage} de ${totalPages}`}</span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente ›</button>
                <button onClick={goToLastPage} disabled={currentPage === totalPages}>Última »</button>
            </div>
        </div>
    );
};

const CardEvento = ({ titulo, asunto, fecha_Reporte, descripcion, fecha_Reinsidio }) => {
    const [countdown, setCountdown] = useState('');

    const handleTerminarEvento = () => {
    };

    const handleBorrarEvento = () => {
        alert('Evento borrado');
    };

    const showCountdown = () => {
        const reinicioDate = new Date(fecha_Reinsidio);
        const currentDate = new Date();

        const timeDifference = reinicioDate.getTime() - currentDate.getTime();

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setCountdown(`Tiempo restante: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`);
        } else {
            setCountdown('El tiempo ha expirado');
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            showCountdown();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    
    return (
        <div className="card">
            <h5>{titulo}</h5>
            <p><strong>Asunto:</strong> {asunto}</p>
            <p><strong>Fecha de Reporte:</strong> {fecha_Reporte}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
{/*             <p><strong>Fecha de Reinsidio:</strong> {fecha_Reinsidio}</p>
 */}            <p>{countdown}</p>

            <div className="buttonContainer">
                <button onClick={handleTerminarEvento}>Terminar Evento</button>
                <div onClick={handleBorrarEvento}>
                    <BotonBorrar />
                </div>
            </div>
        </div>
    );
};

export default CoruselEventos;
