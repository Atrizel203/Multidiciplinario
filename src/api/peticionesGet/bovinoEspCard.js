import axios from 'axios';

const bovinoEspCard = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(`http://localhost:3003/bovinos/${id}`, config);

        if (response.status === 200) {
            console.log(response.data.vaca);
            return response.data.vaca;
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

export default bovinoEspCard;