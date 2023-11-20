import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/leftvar.css"
import OpcionesLeftVar from "../moleculas/opcionesNav.jsx"
import Logo from "../img/logoNuevo.png"

function Leftvar(props) {

    const navigate = useNavigate();

    const Inicio = () => {
        navigate('/Principal');
    };


    const VerAgregar = () => {
        navigate('/AgregarBovino');
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
                <div >
                    <OpcionesLeftVar texto="Graficas" icono="graficas" />
                </div>
                <div onClick={VerAgregar}>
                    <OpcionesLeftVar texto="Agregar" icono="agregar" />
                </div>

            </div>
        </div>
    );
}

export default Leftvar;
