import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../img/logoNuevo.png";
import ValidarLog from "../api/login.js";
import swal from 'sweetalert';

function Login(props) {
    const navigate = useNavigate();
    const [Correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [CorreoFeedback, setCorreoFeedback] = useState("");
    const [ContrasenaFeedback, setContrasenaFeedback] = useState("");

    const mostrarAlerta = (mensaje, icono) => {
        swal({
            title: mensaje,
            icon: icono,
        });
    };

    const handleInicio = async () => {
        if (Correo.trim() === '' || contrasena.trim() === '') {
            if (Correo === "") {
                setCorreoFeedback("¡Necesita un correo!");
            }
            if (contrasena === "") {
                setContrasenaFeedback("¡Necesita una contraseña!");
            }
        } else {
            try {
                const params = {
                    correo: Correo,
                    password: contrasena
                };

                const autenticacionExitosa = await ValidarLog(params);

                if (autenticacionExitosa) {
                    
                    mostrarAlerta('Inicio de sesión exitoso', 'success');
                    navigate('/principal');
                } else {
                    mostrarAlerta('Credenciales incorrectas', 'error');
                }
            } catch (error) {
                mostrarAlerta('Error al iniciar sesión: ' + error.message, 'error');
            }
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
                    {!Correo && <div className="feedback">{CorreoFeedback}</div>}
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
                    {!contrasena && <div className="feedback">{ContrasenaFeedback}</div>}
                </div>
                <div className="boton-ini" onClick={handleInicio} >Iniciar</div>
            </div>
        </div>
    );
}

export default Login;
