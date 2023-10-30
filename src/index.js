import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import VistaAgregarBovino from './pages/agregerBovinoVista.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <VistaAgregarBovino />
    </div>

  </React.StrictMode>
);


reportWebVitals();