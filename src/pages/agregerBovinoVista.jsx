import React from "react";
import LeftVar from "../componentes/leftVar.jsx"
import AgregarBovino from "../componentes/agregarBovino.jsx"
import Buscador from "../componentes/buscador";
import obtenerDatosApi from "../api/buscador.js";
function agregarBovinoVista(params) {
    /* AQUI ES NECESARIO PASAR EL URL DEL LA DB QUE ESTA EN LA NUBE QUE LE PERTENECE AL USUARIO*/
    /* const url = "https://bovinosapp.herokuapp.com" */;/* ejemplo */
    const dataBovinosAll = obtenerDatosApi(/* url */);
    

    return (
        <div >
            <LeftVar />
            <Buscador infoBovinos={dataBovinosAll} />
            <div className="modalSpaw">
                <AgregarBovino />
            </div>
        </div>

    );

}

export default agregarBovinoVista;