import React from "react";
import LeftVar from "../componentes/leftVar.jsx"
import ModalModificarPerfil from "../componentes/modalModificarPerfil.jsx"
import "./css/perfilVaca.css"

function perfilVaca(params) {
    return (
        <div >
            <LeftVar />
            <div className="modalSpaw">
                <ModalModificarPerfil />
            </div>
        </div>

    );

}

export default perfilVaca;