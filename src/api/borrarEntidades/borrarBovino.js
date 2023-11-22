import axios from 'axios';

const realizarOperacionB = async (idBovino, endpoint) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.patch(`http://localhost:3003/bovinos/${endpoint}/${idBovino}`, null, config);

        if (response.status === 200) {
            console.log(response.data.eventos);
            return response.data.eventos;
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

export const borradoLogico = async (idEvento) => {
    return realizarOperacionB(idEvento, 'borradoLogico');
};

export const restaurarLogico = async (idEvento) => {
    return realizarOperacionB(idEvento, 'restaurarLogico');
};

export const borrarbovino = async (idEvento) => {
    return realizarOperacionB(idEvento, 'borrado');
};
