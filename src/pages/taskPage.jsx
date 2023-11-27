import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Leftvar from '../componentes/leftVar';
import { styled } from '@mui/system';
import obtenerEventos from '../api/peticionesGet/eventosPage';
import {
    terminarEvento,
    borrarEventoLogico,
} from '../api/borrarEntidades/borrarEvento';
import Buscador from '../componentes/buscador';

const ContenedorEstilizado = styled('div')({
    marginLeft: '18.5%',
    '@media (max-width: 1280px)': {
        marginLeft: '0%',
    },
    '@media (max-width: 600px)': {
        marginLeft: '0%',
    },
});


const MyDataGrid = () => {
    const [datosEventos, setDatosEventos] = useState([]);

    const columnas = [
        {
            field: 'acciones',
            headerName: 'Acciones',
            width: 150,
            renderCell: (params) => (
                <strong>
                    <button
                        onClick={() => handleTerminarEvento(params.row.id)}
                        style={{ color: 'green', cursor: 'pointer' }}
                    >
                        Terminar
                    </button>
                    <button
                        onClick={() => handleBorrarEvento(params.row.id)}
                        style={{ color: 'red', cursor: 'pointer' }}
                    >
                        Borrar
                    </button>
                </strong>
            ),
        },
        { field: 'areteBovino', headerName: 'Arete Bovino', width: 150 },
        { field: 'nombre', headerName: 'Nombre Bovino', width: 150 },
/*         { field: 'idBovino', headerName: 'ID Bovino', width: 120 },
 */        { field: 'titulo', headerName: 'Título', width: 200 },
        { field: 'asunto', headerName: 'Asunto', width: 150 },
        { field: 'descripcion', headerName: 'Descripción', width: 300 },
        { field: 'fecha_Reporte', headerName: 'Fecha de Reporte', width: 200 },
        { field: 'fecha_Reinsidio', headerName: 'Fecha A Terminar', width: 250 },
/*         { field: 'eventoTerminado', headerName: 'Evento Terminado', width: 180 },
 */
    ];

    const handleTerminarEvento = async (idEvento) => {
        try {
            await terminarEvento(idEvento);
            // Actualizar la lista de eventos después de terminar uno
            const nuevosDatos = await obtenerEventos();
            setDatosEventos(nuevosDatos);
        } catch (error) {
            console.error('Error al terminar el evento:', error.message);
        }
    };

    const handleBorrarEvento = async (idEvento) => {
        try {
            await borrarEventoLogico(idEvento);
            // Actualizar la lista de eventos después de terminar uno
            const nuevosDatos = await obtenerEventos();
            setDatosEventos(nuevosDatos);
        } catch (error) {
            console.error('Error al terminar el evento:', error.message);
        }
    }

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const datos = await obtenerEventos();
                setDatosEventos(datos);
            } catch (error) {
                console.error('Error al obtener los datos:', error.message);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div>
            <Leftvar />
            <Buscador />
            <div>
                <ContenedorEstilizado>
                    <Box sx={{ height: 400, width: '100%', marginTop: "5%", marginRight: "50%" }}>
                        <DataGrid
                            rows={datosEventos}
                            columns={columnas}
                            pageSize={5}
                            checkboxSelection={false} 
                            disableRowSelectionOnClick
                        />
                    </Box>
                </ContenedorEstilizado>
            </div>
        </div>
    );
};

export default MyDataGrid;
