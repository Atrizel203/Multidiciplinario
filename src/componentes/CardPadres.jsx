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
            <h1>Nombre Arete</h1>
            <div className='icon-genero'>
        <Icons iconName="hembra"  />
    </div>
    <div className='imagen-container'>
        <img className='imagen' src={Vaca} alt="Perfil de la vaca" />
    </div>
</div>
<div className='padre'> 
<div>
<h1>Nombre Arete</h1>
</div>
    <div className='icon-genero'>
        <Icons iconName="macho"/>
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