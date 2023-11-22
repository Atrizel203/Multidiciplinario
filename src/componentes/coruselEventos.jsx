import React, { useState, useEffect } from 'react';
import '../css/coruselEventos.css';
import BotonBorrar from '../atomos/botonBorrar';
import PrincipalEventos from '../api/peticionesGet/principalEventos.js';
import {terminarEvento, borrarEventoLogico} from '../api/borrarEntidades/borrarEvento.js';

const CoruselEventos = () => {
    const [eventos, setEventos] = useState([]);
    const eventosPorPagina = 3;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await PrincipalEventos();
                setEventos(data);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error.message);
            }
        }

        fetchData();
    }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez al montar el componente

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
                        idEvento={evento.idEvento}
                        titulo={evento.titulo}
                        asunto={evento.asunto}
                        fecha_Reporte={evento.fecha_Reporte}
                        descripcion={evento.descripcion}
                        fecha_Reinsidio={evento.fecha_Reinsidio}
                        areteBovino={evento.areteBovino}
                        nombreBovino={evento.nombreBovino}
                    />
                ))}
            </div>
            <div className="paginationButtons">
                <div className='paginationButtons-colors' onClick={goToFirstPage} disabled={currentPage === 1}>« Primera</div>
                <div className='paginationButtons-colors' onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>‹ Anterior</div>
                <span>{`${currentPage} de ${totalPages}`}</span>
                <div className='paginationButtons-colors' onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente ›</div>
                <div className='paginationButtons-colors' onClick={goToLastPage} disabled={currentPage === totalPages}>Última »</div>
            </div>
        </div>
    );
};

const CardEvento = ({ idEvento ,titulo, asunto, fecha_Reporte, descripcion, fecha_Reinsidio , areteBovino, nombreBovino}) => {
    const [countdown, setCountdown] = useState('');

    const handleTerminarEvento = () => {
        console.log(idEvento);
        terminarEvento(idEvento);
        /* pante una alerta insana */
    };

    const handleBorrarEvento = () => {
        borrarEventoLogico(idEvento);
        /* pante una alerta insana */
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
            <p><strong>Arete:</strong> {areteBovino}</p>
            <p><strong>Nombre:</strong> {nombreBovino}</p>
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
