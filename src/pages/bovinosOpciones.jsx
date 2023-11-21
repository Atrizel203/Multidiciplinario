import React from 'react';
import Leftvar from '../componentes/leftVar';
import Buscador from '../componentes/buscador';
import CardBovinosSimp from '../atomos/cardBovinosSimp.jsx';



const App = () => {
  return (
    <div>
      <Leftvar />
      <Buscador />
      <div>
        <CardBovinosSimp />
      </div>
    </div>
  );
};

export default App;
