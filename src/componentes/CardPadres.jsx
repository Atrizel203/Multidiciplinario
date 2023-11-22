import React from 'react';
import { Box, Typography } from '@mui/material';
import Vaca from "../img/VacaPerfil.jpg";
import Icons from "../atomos/icons";

function CardPadres() {
    return (
        <Box sx={{ boxShadow: '0px 0px 10px 0px #5AA257', width: 570, height: 260, bgcolor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mt: 2, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: '#5AA257', borderRadius: 2, fontFamily: 'Almarai', color: '#FFFFFF', fontSize: 20, justifyContent: 'center', width: '80%', lineHeight: 1, p: 1, textAlign: 'center', mt: 2 }}>Padres</Typography>
            </Box>
            <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', justifyContent: 'space-around', mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30 }}>Nombre Arete</Typography>
                    <Box sx={{ mt: -3, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="hembra" />
                    </Box>
                    <Box sx={{ mt: .5 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30 }}>Nombre Arete</Typography>
                    <Box sx={{ mt: -3, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="macho" />
                    </Box>
                    <Box sx={{ mt: .5 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CardPadres;
