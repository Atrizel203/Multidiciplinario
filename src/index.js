import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Leftvar from "./componentes/leftVar.jsx"
 */
//import Calendario from './componentes/modalCalendar.jsx';
//import Perfil from './moleculas/Perfil1.jsx';
import Principal from './componentes/Principal.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div> 
    <Principal />
  </div>
  </React.StrictMode>
);


reportWebVitals();
