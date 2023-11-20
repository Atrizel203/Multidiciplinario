import React from "react";
import Login from "../componentes/login"
import Logo from "../moleculas/imgTexto"

function LoginVista(params) {
    return (
        <div style={{display:"flex"}} >
        <Logo/>
        <Login/>
        </div>
    );

}

export default LoginVista;