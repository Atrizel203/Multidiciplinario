import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
/* import Leftvar from "./componentes/leftVar.jsx"
 */
import ModalModificarPerfil from './componentes/modalModificarPerfil.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <ModalModificarPerfil />
    </div>

  </React.StrictMode>
);


reportWebVitals();
