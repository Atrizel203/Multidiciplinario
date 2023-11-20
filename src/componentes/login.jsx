import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../img/logoNuevo.png";
import ValidarLog from "../api/login.js";

function Login(props) {
    const navigate = useNavigate();
    const [Correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    /* esto es agregado del amigo */
    const mostrarAlerta = (mensaje) => {
        alert(mensaje);
    };

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
                /* esto es agregado del amigo */
                mostrarAlerta('Inicio de sesión exitoso');
                navigate('/Principal');
            } else {
                /* esto es agregado del amigo */
                mostrarAlerta('Credenciales incorrectas');
            }
        } catch (error) {
            mostrarAlerta('Error al iniciar sesión: ' + error.message);
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
