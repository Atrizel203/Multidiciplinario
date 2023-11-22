import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/leftvar.css"
import OpcionesLeftVar from "../moleculas/opcionesNav.jsx"
import Logo from "../img/logoNuevo.png"

function Leftvar(props) {

    const navigate = useNavigate();

    const Inicio = () => {
        navigate('/principal');
    };


    const VerAgregar = () => {
        navigate('/agregar-bovino');
    };

    const Graficos = () => {
        navigate('/graficos')
    };

    const PrimerFiltro = () => {
        navigate('/bovinos-opciones');
    };


    return (
        <div className="navContainer">
            <div>
                <div className='logoNombre'>
                    <img className="Logonuevo2" src={Logo} alt="Logo" />
                    <div className="Bovinsoft" >BOVINSOFT</div>
                </div>

                <div className='opciones' />
                <div onClick={Inicio}>
                    <OpcionesLeftVar texto="Inicio" icono="home" />
                </div>
                <div onClick={Graficos} >
                    <OpcionesLeftVar texto="Graficas" icono="graficas" />
                </div>
                <div onClick={VerAgregar}>
                    <OpcionesLeftVar texto="Agregar" icono="agregar" />
                </div>
                <div onClick={PrimerFiltro}>
                    <OpcionesLeftVar texto="Bovinos" icono="tag" />
                </div>

            </div>
        </div>
    );
}

export default Leftvar;
