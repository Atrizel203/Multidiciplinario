import React from 'react';
import Leftvar from "../componentes/leftVar";
import CardDatos from '../componentes/cardDatos';
import Buscador from "../componentes/buscador";
import CardPadres from "../componentes/CardPadres";
import Botones from "../moleculas/botonesPer";
import Grid from '@mui/material/Grid';
import Acordion from "../moleculas/acordion.jsx"


function Vistadatos() {


    return (
        <div>
            <Leftvar />
            <Buscador/>
            <div style={{ display: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <div style={{marginTop: "-10px" ,marginLeft: "45%"}}>
                            <CardDatos />
                            <div style={{ marginTop: "20px" , marginLeft: "2%" }}>
                            <Botones />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <div style={{ marginTop: "20px"}}> 
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
