import React from "react";
import LeftVar from "../componentes/leftVar.jsx"
import AgregarBovino from "../componentes/agregarBovino.jsx"

function agregarBovinoVista(params) {
    return (
        <div >
            <LeftVar />
            <div className="modalSpaw">
                <AgregarBovino />
            </div>
        </div>

    );

}

export default agregarBovinoVista;