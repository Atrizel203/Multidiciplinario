import React, { useEffect, useState } from 'react';
import NuevaImagenVaca from '../img/Vaca2.jpg';
import '../css/perfilChico.css';
import { useNavigate } from 'react-router-dom';


const App = (InfoPerfilMini) => {
    const navigate = useNavigate();

    const VistaDatos = () => {
        localStorage.setItem("idBovino", idBovino);
        navigate('/vista-datos');
    };

    let { arete,nombreDeVaca, idBovino} = InfoPerfilMini;

    const [shouldAnimateArete, setShouldAnimateArete] = useState(false);
    const [shouldAnimateNombre, setShouldAnimateNombre] = useState(false);

    useEffect(() => {
        if (arete.length > 15) {
            setShouldAnimateArete(true);
        }

        if (nombreDeVaca.length > 12) {
            setShouldAnimateNombre(true);
        }
    }, [arete, nombreDeVaca]);



    return (
        <div className="perfil-container" onClick={VistaDatos}>
            <img src={NuevaImagenVaca} alt="vaca" className="perfil-image" />

            <div className='infoEspPerfil'>

                <div className="perfil-details">
                    <div className="perfil-detailNomr">
                        <span className={`text-container ${shouldAnimateArete ? 'animate' : ''}`}>Arete: {arete}</span>
                    </div>
                    <div className="perfil-detailImp">
                        <span className={`text-container ${shouldAnimateNombre ? 'animate' : ''}`}>Nombre: {nombreDeVaca}</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;