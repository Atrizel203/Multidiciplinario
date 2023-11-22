import React from "react";
import LeftVar from "../componentes/leftVar.jsx"
import AgregarBovino from "../componentes/agregarBovino.jsx"
import Buscador from "../componentes/buscador";
function agregarBovinoVista(params) {

    return (
        <div >
            <LeftVar />
            <Buscador />
            <div className="modalSpaw">
                <AgregarBovino />
            </div>
        </div>

    );

}

export default agregarBovinoVista;