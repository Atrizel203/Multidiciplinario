import React from 'react';
import Leftvar from '../componentes/leftVar';
import Buscador from '../componentes/buscador';
import FiltroEstados from '../componentes/filtroEstados';
import CoruselEventos from '../componentes/coruselEventos.jsx';
const App = () => {


    return (
        <div>
            <Leftvar />
            <Buscador />
            <div>
                <FiltroEstados />
                <CoruselEventos />
            </div>
        </div>
    );
}

export default App;
