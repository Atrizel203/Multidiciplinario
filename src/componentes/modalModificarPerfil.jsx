import React from "react";
import ImputEditar from "../moleculas/imputTexto.jsx"
import "../css/modalModificarPerfil.css";
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputImg from "../moleculas/imputImg.jsx";
function ModalModificarPerfil(props) {
    return (


        <div className="contenedor">
            <div className="cerrar">
                <h1>
                    Modificar Perfil
                    <Icons iconName="editar" />
                </h1>
                <Icons iconName="cerrar" />
            </div>

            <ImputEditar texto="Arete del Bovino" iconName="tag" />
            <ImputEditar texto="Arete del Toro" iconName="toro" />
            <ImputEditar texto="Arete del Vaca" iconName="vaca" />
            <ImputEditar texto="Siniiga" iconName="documentos" />

            <div className="fotos">
                <ImputImg texto="Foto del Bovino"/>
                <ImputImg texto="Foto del Pedigri"/>
            </div>

            <BotonGuardar />


        </div>
    );
}

export default ModalModificarPerfil;