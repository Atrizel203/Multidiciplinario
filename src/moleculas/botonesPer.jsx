import React, { useState } from 'react';
import { Document,Page,pdfjs, PDFDownloadLink } from 'react-pdf';
import "../css/botonesPer.css";
import Borrar from "../atomos/botonBorrar";
import Descargar from "../atomos/botonDescarga";
import Calendario from "../atomos/botonCalendario";
import Editar from "../atomos/botonEditar";
import ModalEditar from "../componentes/modalModificarPerfil"; 
import ModalEvento from "../componentes/modalAgregarEvento";
import ModalCalendario from '../componentes/modalCalendar';
import swal from 'sweetalert';
import { pdf } from '@react-pdf/renderer';
import DocuPDF from '../api/pdfDescarga';

function BotonesPerfil(props) {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEvento, setShowModalEvento] = useState(false);
    const [showModalCalendario, setShowModalCalendario] = useState(false);

    const openModalEditar = () => {
        setShowModalEditar(true);
    };

    const closeModalEditar = () => {
        setShowModalEditar(false);
    };

    const openModalEvento = () => {
        setShowModalEvento(true);
        setShowModalCalendario(true); 
    };

    const closeModalEvento = () => {
        setShowModalEvento(false); 
        setShowModalCalendario(false); 
    }
    
    const openModalCalendario = () => {
        setShowModalEvento(true);
        setShowModalCalendario(true); 
    };

    const closeModalCalendario = () => {
        setShowModalEvento(false); 
        setShowModalCalendario(false); 
    };

    const handleBorrar = () => {
        swal({
            title: "¿Estas seguro de borrar la informacion de este bovino?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("La informacion del bovino fue borrada", {
                    icon: "success",
                });
            } else {
                swal("¡La informacion sigue donde siempre!");
            }
        });
    };

    const handleDescargar = async () => {
        
        const vaca = {
            nombre: 'Manuela',
            arete: 'abcd1234',
            fechaNacimiento: '2023-11-20'
          };

        const blob = await pdf(<DocuPDF vaca={vaca} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'informacion_bovino.pdf';
        link.click();
      
        swal({
            title: "El archivo se ha descargado correctamente.",
            icon: "success",
        });
    };


    return (
        <div className="Botones-contenedor">
            <div onClick={handleBorrar}>
            <Borrar/>
            </div>
            
            <div onClick={handleDescargar}>
            <Descargar />
            </div>
            <div onClick={openModalEvento}>
                <Calendario />
            </div>
            <div onClick={openModalCalendario}>
            </div>
            <div onClick={openModalEditar}>
                <Editar />
            </div>
            {showModalEditar && <ModalEditar onClose={closeModalEditar} />}
            {showModalEvento && <ModalEvento onClose={closeModalEvento} />}
            {showModalCalendario && <ModalCalendario onClose={closeModalCalendario} />}
        </div>
    );
}

export default BotonesPerfil;
