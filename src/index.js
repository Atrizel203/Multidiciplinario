import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Principal from "./pages/Principal.jsx";
import PrimerFiltro from "./pages/primerFiltroV.jsx";
import VistaDatos from "./pages/VistaDatos.jsx";
import AgregarBovino from "./pages/agregerBovinoVista.jsx";
import Login from "./pages/loginVista.jsx"
import BovinosOpciones from "./pages/bovinosOpciones.jsx";
import Graficos from './pages/vistaGrafica.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/primer-filtro" element={<PrimerFiltro />} />
        <Route path="/vista-datos" element={<VistaDatos/>} />
        <Route path="/agregar-bovino" element={<AgregarBovino/>} />
        <Route path="/bovinos-opciones" element={<BovinosOpciones/>} />  
        <Route path="/graficos" element={<Graficos />} />

      </Routes>
    </Router>
);

reportWebVitals();