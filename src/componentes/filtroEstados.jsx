import React from "react";
import "./css/FiltroEstados.css"
import Switch from '../atomos/switchFiltros';
import BotonBuscar from "../atomos/botonGuardar";

function FiltroEstados(params) {
    return (
        <div className="componetSwitch">
            <div className="containerSwitch">
                <Switch name="Enferma" />
                <Switch name="Cargada" />
                <Switch name="Para Inseminar" />
                <Switch name="Nacimineto especial" />
                <Switch name="Favorito" />
                <Switch name="En un evento" />
                <Switch name="Vendido" />
                <Switch name="Muerto" />
            </div>
            <div className="buscarFiltroBut">
                <BotonBuscar texto="Buscar" />
            </div>
        </div>

    );

}

export default FiltroEstados;