import axios from 'axios';

const obtenerDatosApi = async (params) => {
    try {
        const { dblink } = params;
        const datalink = dblink || "http://localhost:3003";
        
        if (typeof datalink !== 'string' || datalink.trim() === '') {
            throw new Error('La URL de la base de datos no es válida.');
        }

        const response = await axios.get(`${datalink}/bovinos/buscador`);

        if (response.status === 200) {
            return response.data;
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

export default obtenerDatosApi;
