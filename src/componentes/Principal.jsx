import React, { useState } from 'react';
import Leftvar from './leftVar';
import '../css/botonesPrincipal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../css/carrusel.css";
import "../css/botonesPrincipal.css";


function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { evento: 'Evento 1', vaca: 'Lucky', fecha: '00:00:00' },
        { evento: 'Evento 2', vaca: 'Bruno', fecha: '00:00:00' },
        { evento: 'Evento 3', vaca: 'Machine', fecha: '00:00:00' },
    ]; 

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <Leftvar />
            <div className="carouselContainer">
                <button onClick={goToPreviousSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <div className="slide">
                    <h2>NUEVO EVENTO</h2>
                    <p>Nombre de la vaca: {slides[currentSlide].vaca}</p>
                    <p>Nombre del evento: {slides[currentSlide].evento}</p>
                    <p>{slides[currentSlide].fecha}</p>
                </div>
                <button onClick={goToNextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className="buttonContainer">
                <div className="buttonWrapper" style={{top: '35%', left: '40%'}}>
                    <button className="customButton">VACAS</button>
                </div>
                <div className="buttonWrapper" style={{top: '35%', left: '65%'}}>
                    <button className="customButton">TOROS</button>
                </div>
                <div className="buttonWrapper" style={{top: '70%', left: '40%'}}>
                    <button className="customButton">BECERROS</button>
                </div>
                <div className="buttonWrapper" style={{top: '70%', left: '65%'}}>
                    <button className="customButton">TORITOS</button>
                </div>
            </div>
        </div>
    );
}

export default App;
