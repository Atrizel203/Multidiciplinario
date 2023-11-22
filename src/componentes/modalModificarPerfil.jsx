import React, { useState } from "react";
import ImputEditar from "../moleculas/imputTexto.jsx";
import "../css/modalModificarPerfil.css";
import Icons from "../atomos/icons.jsx";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputImg from "../moleculas/imputImg.jsx";
import swal from 'sweetalert';

function ModalModificarPerfil(props) {

    const [AreteBovino, setAreteBovino] = useState("");
    const [AreteToro, setAreteToro] = useState("");
    const [AreteVaca, setAreteVaca] = useState("");
    const [Siniiga, setSiniiga] = useState("");

    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleGuardar = () => {
        if (AreteBovino === "" && AreteToro === "" && AreteVaca === "" && Siniiga==="") {
            swal({
                title: "Por favor, rellena al menos uno de los campos antes de guardar.",
                icon: "error",
              });
        } else {
            swal({
                title: "Los datos se han actualizado correctamente.",
                icon: "success",
              });
        }
    };

    return (
        <div className="contenedorA">
            <div className="cerrarA">
                <h1>
                    Modificar Perfil
                    <Icons iconName="editar" />
                </h1>
                <div onClick={handleClose}>
                <Icons iconName="cerrar" />
                </div>
                
            </div>

            <ImputEditar texto="Arete del Bovino" iconName="tag"  value={AreteBovino} onChange={setAreteBovino} />
            <ImputEditar texto="Arete del Toro" iconName="toro"  value={AreteToro} onChange={setAreteToro} />
            <ImputEditar texto="Arete del Vaca" iconName="vaca"  value={AreteVaca} onChange={setAreteVaca}/>
            <ImputEditar texto="Siniiga" iconName="documentos"  value={Siniiga} onChange={setSiniiga} />

            <div className="fotosA">
                <ImputImg texto="Foto del Bovino" />
                <ImputImg texto="Foto del Pedigri" />
            </div>

            <div className="guardarBotonModalA" onClick={handleGuardar}>
            <BotonGuardar />
            </div>
        </div>
    );
}

export default ModalModificarPerfil;
