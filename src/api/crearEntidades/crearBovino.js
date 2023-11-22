import axios from 'axios';

const crearBovino = async (bovino) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        console.log(bovino);
        await axios.post('http://localhost:3003/bovinos/', bovino, config);
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

export default crearBovino;
