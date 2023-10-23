import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
/* import Leftvar from "./componentes/leftVar.jsx"
 */
import Calendario from './componentes/modalCalendar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div> 
    <Calendario />
  </div>
  </React.StrictMode>
);


reportWebVitals();
