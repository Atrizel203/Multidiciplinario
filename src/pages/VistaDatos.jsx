import React from 'react';
import Leftvar from "../componentes/leftVar";
import CardDatos from '../componentes/cardDatos';
import Buscador from "../componentes/buscador";
import CardPadres from "../componentes/CardPadres";
import Botones from "../moleculas/botonesPer";

import obtenerDatosApi from "../api/buscador.js";


function Vistadatos(props) {

        /* AQUI ES NECESARIO PASAR EL URL DEL LA DB QUE ESTA EN LA NUBE QUE LE PERTENECE AL USUARIO*/
    /* const url = "https://bovinosapp.herokuapp.com" */;/* ejemplo */
    const dataBovinosAll = obtenerDatosApi(/* url */);

    return (
        <div>
            <Leftvar/>
            <Buscador infoBovinos={dataBovinosAll}/>
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
