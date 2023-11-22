import axios from 'axios';

const realizarOperacionBovinos = async (endpoint) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(`http://localhost:3003/bovinos/${endpoint}`, config);

        if (response.status === 200) {
            console.log(response.data.bovinos);
            return response.data.bovinos;
        } else {
            throw new Error(`Error en la respuesta del servidor: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const { status, data } = error.response;
                throw new Error(`Error ${status}: ${data.message}`);
            } else if (error.request) {
                throw new Error('No se recibió respuesta del servidor');
            } else {
                throw new Error(`Error de solicitud: ${error.message}`);
            }
        } else {
            throw new Error(`Error desconocido: ${error.message}`);
        }
    }
};

export const obtenerToros = async () => {
    return realizarOperacionBovinos('toros');
};

export const obtenerVacas = async () => {
    return realizarOperacionBovinos('vacas');
};

export const obtenerNovillos = async () => {
    return realizarOperacionBovinos('novillos');
};

export const obtenerNovillas = async () => {
    return realizarOperacionBovinos('novillas');
};
