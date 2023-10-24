import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import ModalModificarPerfil from './componentes/modalAgregarEvento.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <ModalModificarPerfil />
    </div>

  </React.StrictMode>
);


reportWebVitals();
