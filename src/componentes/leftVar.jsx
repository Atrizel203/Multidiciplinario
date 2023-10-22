import React from 'react';
import "../css/leftvar.css"
import OpcionesLeftVar from "../moleculas/opcionesNav.jsx"
import Logo from "../img/logoNuevo.png"

function leftvar(props) {
    return (
        <div className="navContainer">
            <div>
                <div className='logoNombre'>
                    <img className="Logonuevo2" src={Logo} alt="Logo" />
                    <div className="Bovinsoft" >BOVINSOFT</div>
                </div>

                <div className='opciones'>
                    <OpcionesLeftVar texto="Inicio" icono="home"/>
                    <OpcionesLeftVar texto="Graficas" icono="graficas"/>
                    <OpcionesLeftVar texto="Agregar" icono="agregar"/>
                </div>

                <div className='salir'>
                    <OpcionesLeftVar texto="Salir" icono="salir"/>
                </div>


            </div>
        </div>
    );
}

export default leftvar;
