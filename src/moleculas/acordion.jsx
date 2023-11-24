import React, { useEffect, useState } from 'react';
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

import HijosBovino from '../api/peticionesGet/hijosBovino';

export default function BasicAccordion() {
  const [bovinoData, setBovinoData] = useState(null);

  useEffect(() => {
      const fetchBovinoData = async () => {
          try {
              const data = await HijosBovino(localStorage.getItem("idBovino"));
              setBovinoData(data);
          } catch (error) {
              console.error('Error al obtener datos del bovino:', error);
          }
      };

      fetchBovinoData();
  }, []);

  const handleCardClick = (idBovino) => {
    localStorage.setItem("idBovino", idBovino);
    window.location.reload();
  };

  return (
    <div>
     <Accordion sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#8FD182', borderRadius: 2, mt: 2 , height:10 }}
        >
          <Typography sx={{ color: '#FFFFFF',fontFamily: 'Almarai', fontSize: 17 }}>Hijos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Contenedor con altura limitada y desbordamiento vertical */}
          <Box sx={{ maxHeight: '200px', overflowY: 'auto', width: '100%' }}>
            <Grid container spacing={2}>
              {/* mapea empezando aqui */}
              {bovinoData && bovinoData.length > 0 ? (
                bovinoData.map((bovino) => (
                  <Grid item xs={6} key={bovino.idBovino}>
                    <Card sx={{ marginBottom: '10px', backgroundColor: '#ffffff',height: '90%' }} onClick={() => handleCardClick(bovino.idBovino)}>
                      <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-7px" }}>
                        <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mt: 1 }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography sx={{ wordSpacing: 2, fontFamily: 'Almarai', bgcolor: '#8FD182', borderRadius: 2, color: '#FFFFFF', fontSize: 19, width: 240, height: 30}}>{bovino.nombre} - {bovino.areteBovino}</Typography>
                            <Box sx={{ mt: -4, ml: '68%', color: '#FFFFFF' }}>
                              <Icons iconName={bovino.genero}/>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                              <img style={{ display: 'block', width: 210, borderRadius: 3, marginTop:"8px" }} src={Vaca} alt="Perfil de la vaca" />
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: 'var(--tercer-color)', 
                    fontFamily: 'Almarai', 
                    marginTop:"20px",
                    marginLeft:"30px",
                    width: '90%',  
                    height: '100%', 
                    borderRadius: '5px', 
                    border: '2px solid var(--cuarto-color)', 
                    color: 'var(--primary-color)'
                }}>
                    No tiene ningún hijo relacionado
                </Typography>
              )}
              {/* hasta aqui */}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
);

}
