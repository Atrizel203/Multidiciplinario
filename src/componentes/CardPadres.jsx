import React from 'react';
import "../css/cardPadres.css";
import Vaca from "../img/VacaPerfil.jpg";
import Icons from "../atomos/icons";


function CardPadres() {
    return (
        <div className="Card">

            <div className='cont-titulo'>
            <h1 className='titulo'>Padres</h1>
            </div>
            <div className='padres'>
            <div className='madre'> 
            <div className='icn'>
        <h1>Nombre Arete</h1>
        <Icons iconName="hembra" className="icon" />
    </div>
    <div className='imagen-container'>
        <img className='imagen' src={Vaca} alt="Perfil de la vaca" />
    </div>
</div>
<div className='padre'> 
    <div className='icn'>
        <h1>Nombre Arete</h1>
        <Icons iconName="macho" className="icon" />
    </div>
    <div className='imagen-container'>
        <img className='imagen' src={Vaca} alt="Perfil de la vaca" />
    </div>
</div>
</div>
        </div>
    );
}

export default CardPadres;