import React from 'react';
import '../css/bovinosOpciones.css';

const CardBovinosSimp = () => {


    return (
        <div className="ContenedorOpcionesImg">

            <div className="cardBovinos">
                <div className="cardBovinos-imgToro"></div>
                <div className="cardBovinos-info">
                    <div className="cardBovinos-text">
                        <p className="text-title">Toros</p>
                        <p className="text-subtitle">Ver Toros de la finca</p>
                    </div>
                    <div className="cardBovinos-icon">
                        <svg viewBox="0 0 28 25" className="icon">
                            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="cardBovinos">
                <div className="cardBovinos-imgVaca"></div>
                <div className="cardBovinos-info">
                    <div className="cardBovinos-text">
                        <p className="text-title">Vacas</p>
                        <p className="text-subtitle">Ver Vacas de la finca</p>
                    </div>
                    <div className="cardBovinos-icon">
                        <svg viewBox="0 0 28 25" className="icon">
                            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="cardBovinos">
                <div className="cardBovinos-imgTorito"></div>
                <div className="cardBovinos-info">
                    <div className="cardBovinos-text">
                        <p className="text-title">Toritos</p>
                        <p className="text-subtitle">Ver Toros no mayores de edad de la finca</p>
                    </div>
                    <div className="cardBovinos-icon">
                        <svg viewBox="0 0 28 25" className="icon">
                            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="cardBovinos">
                <div className="cardBovinos-imgBecerrito"></div>
                <div className="cardBovinos-info">
                    <div className="cardBovinos-text">
                        <p className="text-title">Becerros</p>
                        <p className="text-subtitle">Ver Becerros de la finca</p>
                    </div>
                    <div className="cardBovinos-icon">
                        <svg viewBox="0 0 28 25" className="icon">
                            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
            );
};

            export default CardBovinosSimp;
