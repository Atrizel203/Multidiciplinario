import React from 'react';
import NuevaImagenVaca from '../img/Vaca2.jpg';
import '../css/perfilChico.css';
import { useNavigate } from 'react-router-dom';


const App = (InfoPerfilMini) => {
    const navigate = useNavigate();

    const VistaDatos = () => {
        localStorage.setItem("idBovino", idBovino);
        navigate('/vista-datos');
    };
    let {nombreDeVaca, idBovino} = InfoPerfilMini;

    return (
        <div className="perfil-container" onClick={VistaDatos}>
            <img src={NuevaImagenVaca} alt="vaca" className="perfil-image" />

            <div className='infoEspPerfil'>

                <div className="perfil-details">
                    <div className="perfil-detailNomr">
                        <span className={`text-container`}>Arete: {InfoPerfilMini.arete}</span>
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