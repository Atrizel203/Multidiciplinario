import React from 'react';
import { BsFillHeartFill, BsFillBandaidFill } from "react-icons/bs";
import NuevaImagenVaca from '../img/Vaca2.jpg';

function Perfil() {
    const arete = "0000"; 
    const nombreDeVaca = "Lucky";

    return (
        <div style={{ width: '300px', border: '1px solid black', borderRadius: '10px', padding: '0px', backgroundColor: 'white', overflow: 'hidden', marginTop:'10%' }}>
            <img src={NuevaImagenVaca} alt="vaca" style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius:'10%', borderBottomRightRadius:'10%' }} />
            <div style={{ color: '#000000', padding: '5px' }}>
                <div>
                    Arete: {arete}
                </div>
                <div>
                    Nombre: {nombreDeVaca}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-30px', marginLeft:'50px' }}>
                <BsFillHeartFill color="#008000" size="30px" style={{marginLeft:'30px'}}  />
                <BsFillBandaidFill color="#D182BC" size="30px" style={{marginLeft:'20px'}}/>
            </div>
        </div>
    );
}

export default Perfil;
