import React, { useState } from 'react';
import Leftvar from '../componentes/leftVar';
import { useNavigate } from 'react-router-dom';
import Buscador from '../componentes/buscador';
import FiltroEstados from '../componentes/filtroEstados';
const App = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Leftvar />
            <Buscador />
            <div>
                <FiltroEstados />
            </div>  


        </div>
    );
}

export default App;
