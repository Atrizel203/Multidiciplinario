import React from 'react';
import Leftvar from "../componentes/leftVar";
import CardDatos from '../componentes/cardDatos';
import Buscador from "../componentes/buscador";
import CardPadres from "../componentes/CardPadres";
import Botones from "../moleculas/botonesPer";

import ObtenerDatosApi from "../api/buscador.js";


function Vistadatos() {

    const dataBovinosAll = ObtenerDatosApi();

    return (
        <div>
            <Leftvar/>
            <Buscador infoBovinos={dataBovinosAll}/>
            <div style={{display:"flex"}}>
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
