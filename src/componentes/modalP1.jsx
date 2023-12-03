import React from 'react';
import NuevaImagenVaca from '../img/Vaca2.jpg';
import '../css/perfilChico.css';
import { useNavigate } from 'react-router-dom';


const App = (InfoPerfilMini) => {
    const navigate = useNavigate();

    const VistaDatos = () => {
        localStorage.setItem("idBovino", id_bovino);
        navigate('/vista-datos');
    };

    const {nombreDeVaca, id_bovino, imagen, arete} = InfoPerfilMini;

    return (
        <div className="perfil-container" onClick={VistaDatos}>
            <img src={imagen || NuevaImagenVaca} alt="vaca" className="perfil-image" />

            <div className='infoEspPerfil'>

                <div className="perfil-details">
                    <div className="perfil-detailNomr">
                        <span className={`text-container`}>Arete: {arete}</span>
                    </div>
                    <div className="perfil-detailImp">
                        <span className={`text-container`}>Nombre: {nombreDeVaca}</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;