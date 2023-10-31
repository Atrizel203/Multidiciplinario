import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';

import ModalModificarPerfil from './componentes/modalModificarPerfil.jsx';
import LeftVar from "./componentes/leftVar.jsx";
import Buscador from "./componentes/buscador.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <VistaAgregarBovino />
    </div>

  </React.StrictMode>
);


reportWebVitals();