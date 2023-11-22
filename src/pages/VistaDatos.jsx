import React from 'react';
import Leftvar from "../componentes/leftVar";
import CardDatos from '../componentes/cardDatos';
import Buscador from "../componentes/buscador";
import CardPadres from "../componentes/CardPadres";
import Botones from "../moleculas/botonesPer";
import Acordion from "../moleculas/acordion.jsx"
import obtenerDatosApi from "../api/buscador.js";
import Grid from '@mui/material/Grid';

function Vistadatos(props) {

        /* AQUI ES NECESARIO PASAR EL URL DEL LA DB QUE ESTA EN LA NUBE QUE LE PERTENECE AL USUARIO*/
    /* const url = "https://bovinosapp.herokuapp.com" */;/* ejemplo */
    const dblink = "http://localhost:3003";/* ejemplo */
    const dataBovinosAll = obtenerDatosApi(dblink);

    return (
        <div>
            <Leftvar />
            <Buscador infoBovinos={dataBovinosAll} style={{ marginLeft: "45%"}}/>
            <div style={{ display: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <div style={{ marginLeft: "45%"}}>
                            <CardDatos />
                            <div style={{ marginTop: "20px" , marginLeft: "2%" }}>
                            <Botones />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <div> 
                            <CardPadres />
                        </div>
                        <div style={{ marginTop: "20px", width:"85%"}}>
                            <Acordion />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Vistadatos;
