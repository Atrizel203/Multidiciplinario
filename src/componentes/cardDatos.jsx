import React, { useEffect, useState } from 'react';
import "../css/cardDatos.css";
import Vaca from "../img/VacaPerfil.jpg";
import LabelTexto from '../moleculas/labelTexto';
import bovinoEspCard from "../api/peticionesGet/bovinoEspCard.js";

function CardDatos() {
    const [bovinoData, setBovinoData] = useState(null);

    useEffect(() => {
        const fetchBovinoData = async () => {
            try {
                const id = localStorage.getItem("idBovino");
                const data = await bovinoEspCard(id);
                setBovinoData(data);
            } catch (error) {
                console.error('Error al obtener datos del bovino:', error);
            }
        };

        fetchBovinoData();
    }, []);

    return (
        <div className="Card-contenedor">
            {bovinoData && (
                <div className='Datos'>
                    <img className='imag' src={Vaca} alt="Perfil de la vaca" />
                    <LabelTexto texto={`Nombre: ${bovinoData.nombre}`} />
                    <LabelTexto texto={`Genero: ${bovinoData.genero}`} iconName={bovinoData.genero} />
                    <LabelTexto texto={`Arete: ${bovinoData.areteBovino}`} iconName="tag" />
                    <LabelTexto texto={`Fecha de nacimiento: ${new Date(bovinoData.fechaNacimiento).toLocaleDateString()}`} iconName="calendario" />
                    <LabelTexto texto={`Raza: ${bovinoData.raza}`} iconName="tag" />
                </div>
            )}
        </div>
    );
}

export default CardDatos;
