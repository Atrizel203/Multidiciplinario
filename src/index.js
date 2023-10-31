import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';

import ModalModificarPerfil from './componentes/modalModificarPerfil.jsx';
import LeftVar from "./componentes/leftVar.jsx";
import Buscador from "./componentes/buscador.jsx";
import CardDatos from "./componentes/cardDatos.jsx";
import BotonesPerfil from './moleculas/botonesPer.jsx';
import CardPadres from './componentes/CardPadres.jsx';
import Acordion from "./moleculas/acordion.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <LeftVar/>
      <Buscador/>
      <CardPadres/>
      <Acordion/>
    </div>

  </React.StrictMode>
);


reportWebVitals();