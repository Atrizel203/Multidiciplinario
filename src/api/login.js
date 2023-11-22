import axios from "axios";

const ValidarLog = async (params) => {
    const { correo, password } = params;

    const info = {
        "correo": correo,
        "password": password
    }

    try {
        const response = await axios.post("http://localhost:3003/administradores/login", info);
        if (response.data.token) {
            localStorage.setItem("token",  response.data.token);
            localStorage.setItem("correo", params.correo);
            console.log("Token guardado correctamente");
            return true; // Autenticación exitosa
        } else {
            console.error("La respuesta no contiene un token:", response.data);
            return false; // Autenticación fallida
        }
    } catch (error) {
        if (error.response) {
            console.error("Error en la respuesta del servidor:", error.response.data);
        } else if (error.request) {
            console.error("Error de red o el servidor no responde");
        } else {
            console.error("Error al realizar la solicitud:", error.message);
        }
        return false; // Autenticación fallida
    }
}

export default ValidarLog;
