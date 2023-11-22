import React from 'react';
import Leftvar from '../componentes/leftVar';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Style from "../css/graficas.module.css"

const profiles = [
    { arete: "1234", nombreDeVaca: "1234", evento: 'Vacuna' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Enferma' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Enferma' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Enferma' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Aborto' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Muerta' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Muerta' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Cargada' },
    { arete: "1234", nombreDeVaca: "1234", evento: 'Cargada' },
];

const data = [
    { name: 'Vacuna', vacunadas: profiles.filter(profile => profile.evento === 'Vacuna').length },
    { name: 'Enferma', enferma: profiles.filter(profile => profile.evento === 'Enferma').length },
    { name: 'Aborto', aborto: profiles.filter(profile => profile.evento === 'Aborto').length },
    { name: 'Muerta', muerta: profiles.filter(profile => profile.evento === 'Muerta').length },
    { name: 'Cargada', cargada: profiles.filter(profile => profile.evento === 'Cargada').length },
];

function VistaGrafica() {
    return (
        <div>
            <Leftvar />
            <div className={Style.chartContainer}>
                <BarChart width={700} height={600} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickCount={4} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vacunadas" fill="#87b8ea" barSize={80} />
                    <Bar dataKey="enferma" fill="#7bd34e" barSize={80} />
                    <Bar dataKey="aborto" fill="#a9e37c" barSize={80} />
                    <Bar dataKey="muerta" fill="#e4181b" barSize={80} />
                    <Bar dataKey="cargada" fill="#d0ae8b" barSize={80} />
                </BarChart>
            </div>
        </div>
    );
}

export default VistaGrafica;
