import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../img/logoNuevo.png";
import ValidarLog from "../api/login.js";

function Login(props) {
    const navigate = useNavigate();
    const [Correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleInicio = async () => {
        // Validar que los campos de Correo y contraseña no estén vacíos
        if (Correo.trim() === '' || contrasena.trim() === '') {
            console.error('Por favor, ingrese Correo y contraseña');
            return;
        }

        /* agregar alertas y validaciones de front */

        try {
            const params = {
                correo: Correo,
                password: contrasena
            };

            const autenticacionExitosa = await ValidarLog(params);

            if (autenticacionExitosa) {
                /* alerta de inicio de secion exitosa */
                navigate('/Principal');
            } else {
                /* alerta de credenciales incorrectas */
                console.error('Credenciales incorrectas');
            }
        } catch (error) {
                /* error externo de el back */
            console.error('Error al iniciar sesión:', error.message);
        }
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
                        Correo:  
                    </div>
                    <input
                        className="input-dis"
                        placeholder="Correo"
                        value={Correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <div className="desc">
                        Contraseña:  
                    </div>
                    <input
                        type="password"
                        className="input-dis"
                        placeholder="Contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>
                <div className="boton-ini" onClick={handleInicio} >Iniciar</div>
            </div>
        </div>
    );
}

export default Login;
