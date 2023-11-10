import React, { useState } from 'react';
import Leftvar from "../componentes/leftVar";
import CardDatos from '../componentes/cardDatos';
import Buscador from "../componentes/buscador";
import CardPadres from "../componentes/CardPadres";
import Botones from "../moleculas/botonesPer";


function Vistadatos(props) {
    return (
        <div>
            <Leftvar/>
            <Buscador/>
            <div style={{display:"flex"  }}>
            <div>
            <CardDatos/>
            </div>
            <div>
            <CardPadres/>
            </div>
            </div>
            <Botones/>
           
        </div>
    );
}

export default Vistadatos;
