import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Vaca from "../img/VacaPerfil.jpg";
import Icons from "../atomos/icons";

export default function BasicAccordion() {
  return (
    <div>
     <Accordion sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#8FD182', borderRadius: 2, mt: 2  }}
        >
          <Typography sx={{ color: '#FFFFFF',fontFamily: 'Almarai', fontSize: 17 }}> Hijos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Contenedor con altura limitada y desbordamiento vertical */}
          <Box sx={{ maxHeight: '200px', overflowY: 'auto', width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card sx={{ marginBottom: '10px', backgroundColor: '#ffffff',height: '90%' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-7px" }}>
                  <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', justifyContent: 'space-around', mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30}}>Nombre Arete</Typography>
                    <Box sx={{ mt: -4, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="hembra" />
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
                </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
              <Card sx={{ marginBottom: '10px', backgroundColor: '#ffffff',height: '90%' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-7px"}}>
                  <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', justifyContent: 'space-around', mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30}}>Nombre Arete</Typography>
                    <Box sx={{ mt: -4, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="hembra" />
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
                </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
              <Card sx={{ marginBottom: '10px', backgroundColor: '#ffffff',height: '90%' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:"-7px"}}>
                  <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', justifyContent: 'space-around', mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30}}>Nombre Arete</Typography>
                    <Box sx={{ mt: -4, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="hembra" />
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
                </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
              <Card sx={{ marginBottom: '10px', backgroundColor: '#ffffff',height: '90%' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-7px" }}>
                  <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', justifyContent: 'space-around', mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30}}>Nombre Arete</Typography>
                    <Box sx={{ mt: -4, ml: '68%', color: '#FFFFFF' }}>
                        <Icons iconName="hembra" />
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                    </Box>
                </Box>
                </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

