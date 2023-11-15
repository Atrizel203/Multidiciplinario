import React from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../img/logoNuevo.png"


function Login(props) {
    const navigate = useNavigate();

    const Inicio = () => {
        navigate('/Principal');
    };

    return (
        <div className="login-contenedor">
            <div className="input-cont">
            <div className="titulo-login">
                    INICIAR SESIÓN
                </div>
                <img className='log' src={Logo} alt="logo login" />
                <div className="input-pos" >
                <div className="desc">
                  Usuario:  
                </div>
                <input className="input-dis" placeholder="Usuario" />
                <div className="desc">
                  Contraseña:  
                </div>
                <input className="input-dis" placeholder="Contraseña" />
                </div>
                <div className="boton-ini" onClick={Inicio} >Iniciar</div>
            </div>
        </div>
    );
}

export default Login;