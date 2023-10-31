import React from 'react';
import "../css/cardDatos.css";
import Vaca from "../img/VacaPerfil.jpg";
import LabelTexto from '../moleculas/labelTexto';

function CardDatos(props) {
    return (
        <div className="Card-contenedor">
            <div className='Datos'>
                <img className='imagen' src={Vaca} alt="Perfil de la vaca" />
                <LabelTexto texto="Nombre" />
                <LabelTexto texto="Genero" iconName="genero" />
                <LabelTexto texto="Arete" iconName="tag" />
                <LabelTexto texto="Fecha de nacimiento" iconName="calendario" />
                <LabelTexto texto="Raza" iconName="tag" />
            </div>
        </div>
    );
}

export default CardDatos;
