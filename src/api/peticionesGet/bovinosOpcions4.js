import axios from 'axios';

const realizarOperacionBovinos = async (endpoint) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        console.log(endpoint);
        const response = await axios.get(`http://localhost:3003/bovinos/${endpoint}`, config);

        if (response.status === 200) {
            if (endpoint === 'toros') {
                console.log(response.data.toros);
                return response.data.toros;
            }
            if (endpoint === 'vacas') {
                console.log(response.data.vacas);
                return response.data.vacas;
            }
            if (endpoint === 'novillos') {
                console.log(response.data.novillos);
                return response.data.novillos;
            }
            if (endpoint === 'novillas') {
                console.log(response.data.novillas);
                return response.data.novillas;
            }
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

export default realizarOperacionBovinos;