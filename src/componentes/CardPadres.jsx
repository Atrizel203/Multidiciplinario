import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Vaca from "../img/VacaPerfil.jpg";
import Icons from "../atomos/icons";
import PadresBovino from '../api/peticionesGet/padresBovino';

function CardPadres() {
    const [bovinoData, setBovinoData] = useState(null);

    useEffect(() => {
        const fetchBovinoData = async () => {
            try {
                const data = await PadresBovino(localStorage.getItem("idBovino"));
                setBovinoData(data);
            } catch (error) {
                console.error('Error al obtener datos del bovino:', error);
            }
        };
        fetchBovinoData();
    }, []);

    const padre = bovinoData && bovinoData.padre;
    const madre = bovinoData && bovinoData.madre;

    const handleCardClick = (idBovino) => {
        localStorage.setItem("idBovino", idBovino);
        window.location.reload();
    };

    return (
        <Box sx={{ boxShadow: '0px 0px 10px 0px #5AA257', width: 570, height: 260, bgcolor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mt: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: '#5AA257', borderRadius: 2, fontFamily: 'Almarai', color: '#FFFFFF', fontSize: 20, justifyContent: 'center', width: '80%', lineHeight: 1, p: 1, textAlign: 'center', mt: 2 }}>Padres</Typography>
            </Box>
            <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around', mt: 1 }}>
                {padre && Object.keys(padre).length > 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleCardClick(padre.idBovino)}>
                        <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30 }}>{padre.nombre} - {padre.areteBovino}</Typography>
                        <Box sx={{ mt: -3, ml: '68%', color: '#FFFFFF' }}>
                            <Icons iconName={padre.genero} />
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop: "8px" }} src={padre.foto || Vaca} alt="Perfil del padre" />
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 60 }}>Padre no relacionado o inexistente</Typography>
                    </Box>
                )}
                {madre && Object.keys(madre).length > 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleCardClick(madre.idBovino)}>
                        <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30 }}>{madre.nombre} - {madre.areteBovino}</Typography>
                        <Box sx={{ mt: -3, ml: '68%', color: '#FFFFFF' }}>
                            <Icons iconName={madre.genero} />
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop: "8px" }} src={madre.foto || Vaca} alt="Perfil de la madre" />
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 60 }}>Madre no relacionada o inexistente</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default CardPadres;
