import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
    Hidden,
    IconButton,
    Modal,
    Switch,
    FormControlLabel,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import Eventos from "@mui/icons-material/EventNote";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Logo from '../img/logoNuevo.png';
import "../css/leftvar.css"
import { Checkbox} from '@mui/material';


function Leftvar(props) {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [bovineStates, setBovineStates] = useState({
        cargada: false,
        enferma: false,
        esperInseminar: false,
        nacimientoEsp: false,
        lecionada: false,
        fueraFinca: false,
        favorito: false,
        vendido: false,
        muerta: false,
    });

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const navigateTo = (path) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    const handleSwitchChange = (state) => {
        setBovineStates((prevState) => ({ ...prevState, [state]: !prevState[state] }));
    };

    const saveBovineStates = () => {
        // Agregar lógica para guardar los estados bovinos
        console.log('Estados Bovinos guardados:', bovineStates);
        toggleModal();
    };



    const menuItems = [
        { text: 'Inicio', icon: <HomeIcon />, onClick: () => navigateTo('/principal') },
        { text: 'Graficas', icon: <BarChartIcon />, onClick: () => navigateTo('/graficos') },
        { text: 'Agregar Bovino', icon: <AddIcon />, onClick: () => navigateTo('/agregar-bovino') },
        { text: 'Bovinos', icon: <LocalOfferIcon />, onClick: () => navigateTo('/bovinos-opciones') },
        { text: 'Estados Bovinos', icon: <BookmarkIcon />, onClick: toggleModal },
        { text: 'Eventos sin Terminar', icon: <Eventos />, onClick: () => navigateTo('/Tareas')}
    ];

    return (
        <div>
            <Hidden lgUp>
                {/* Botón para mostrar el menú en dispositivos móviles */}
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMobileMenu}>
                    <MenuIcon />
                </IconButton>
            </Hidden>

            {/* Menú lateral */}
            <Hidden mdDown>
                <Drawer /* PaperProps={{ style: { width: '210px' } }}  agregar dependiendo el ancho de la pantalla*/ variant="permanent" anchor="left" open>
                    <Box sx={{ p: 2 }}>
                        <div className="logoNombre">
                            <img className="Logonuevo2" src={Logo} alt="Logo" />
                            <Typography variant="h6" className="Bovinsoft">
                                BOVINSOFT
                           </Typography>
                        </div>
                    </Box>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={item.onClick}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>

            {/* Menú lateral para dispositivos móviles */}
            <Hidden lgUp>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <div className="logoNombre">
                            <img className="Logonuevo2" src={Logo} alt="Logo" />
                            <Typography variant="h6" className="Bovinsoft">
                                BOVINSOFT
                            </Typography>
                        </div>
                    </Box>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={item.onClick}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>

            {/* Modal de Estados Bovinos */}
           
<Modal open={modalOpen} onClose={toggleModal}>
    <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
        }}
    >
        <Typography variant="h6" gutterBottom sx={{ color:"#8FD182" }}>
            Estados Bovinos
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
            <Typography variant="subtitle1" sx={{ color:"#4C9680 ", mx: 2 }}>
                Estados de Salud
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <FormControlLabel
                control={<Checkbox checked={bovineStates.enferma} onChange={() => handleSwitchChange('enferma')} />}
                label="Enferma"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.lecionada} onChange={() => handleSwitchChange('lecionada')} />}
                label="Lecionada"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.muerta} onChange={() => handleSwitchChange('muerta')} />}
                label="Muerta"
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
            <Typography variant="subtitle1" sx={{ color:"#4C9680 ", mx: 2 }}>
            Estados de Fertilización
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <FormControlLabel
                control={<Checkbox checked={bovineStates.cargada} onChange={() => handleSwitchChange('cargada')} />}
                label="Cargada"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.esperInseminar} onChange={() => handleSwitchChange('esperInseminar')} />}
                label="Esper Inseminar"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.nacimientoEsp} onChange={() => handleSwitchChange('nacimientoEsp')} />}
                label="Nacimiento Esp"
            />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
            <Typography variant="subtitle1" sx={{ color:"#4C9680 ", mx: 2 }}>
                Otros estados
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: '#4C9680', height: '2px' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <FormControlLabel
                control={<Checkbox checked={bovineStates.fueraFinca} onChange={() => handleSwitchChange('fueraFinca')} />}
                label="Fuera Finca"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.favorito} onChange={() => handleSwitchChange('favorito')} />}
                label="Favorito"
            />
            <FormControlLabel
                control={<Checkbox checked={bovineStates.vendido} onChange={() => handleSwitchChange('vendido')} />}
                label="Vendido"
            />
        </Box>

        <Button sx={{  margin: 'auto' }} variant="contained" onClick={saveBovineStates}>
            Guardar
        </Button>
    </Box>
</Modal>
        </div>
    );
}
export default Leftvar;
