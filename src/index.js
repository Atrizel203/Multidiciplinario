import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from "./pages/Principal.jsx";
import PrimerFiltro from "./pages/primerFiltroV.jsx";
import VistaDatos from "./pages/VistaDatos.jsx";
import AgregarBovino from "./pages/agregerBovinoVista.jsx";
import Login from "./pages/loginVista.jsx"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/primerFiltroV" element={<PrimerFiltro />} />
        <Route path="/Vistadatos" element={<VistaDatos/>} />
        <Route path="/AgregarBovino" element={<AgregarBovino/>} />
      </Routes>
    </Router>
);

reportWebVitals();