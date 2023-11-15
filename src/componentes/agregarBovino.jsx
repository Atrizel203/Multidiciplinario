import React from "react";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregarEspecial from "../moleculas/impustEspeciales.jsx";
import ImputAgregarNormal from "../moleculas/imputTexto.jsx"
import ImputImg from "../moleculas/imputImg.jsx";
import "../css/agregarBovino.css";


function AgregarBovino() {
    let razas = [
        { value: '', label: '' },
        { value: 'SuizoAmericano', label: 'Suizo Americano' },
        { value: 'SuizoEuropeo', label: 'Suizo Europeo' },
        { value: 'Jersey', label: 'Jersey' },
        { value: 'Holstein', label: 'Holstein' },
        { value: 'Angus', label: 'Angus' },
        { value: 'Brahman', label: 'Brahman' },
        { value: 'Brangus', label: 'Brangus' },
        { value: 'Braford', label: 'Braford' },
        { value: 'Hereford', label: 'Hereford' },
        { value: 'Limousin', label: 'Limousin' },
        { value: 'Nelore', label: 'Nelore' },
        { value: 'Senepol', label: 'Senepol' },
        { value: 'Otros', label: 'Otros' },
    ];
    let genero = [
        { value: '', label: '' },
        { value: 'Macho', label: 'Macho' },
        { value: 'Hembra', label: 'Hembra' },
    ];

    return (

        <div className="containerAgregarBovino">
            <div className="containerInfo">
                <div className="infoImportant">
                    <h1>Informacion Importante</h1>
                    <div className="opciones">
                        <ImputAgregarNormal texto="Nombre" />
                        <ImputAgregarEspecial texto="Raza" tipo="select" options={razas} />
                        <ImputAgregarEspecial texto="Fecha de Nacimiento" tipo="date" />
                        <ImputAgregarEspecial texto="Genero" tipo="select" options={genero} />
                    </div>
                    <ImputImg texto="Foto del Bovino" className="espacioImg" />
                </div>

                <div className="infoExtra">
                    <h1>Informacion Relacionada</h1>
                    <div className="opciones">
                        <ImputAgregarNormal texto="Arete del Bovino" iconName="tag" />
                        <ImputAgregarNormal texto="Arete del Toro" iconName="tag" />
                        <ImputAgregarNormal texto="Arete del Vaca" iconName="tag" />
                        <ImputAgregarNormal texto="Siniiga" iconName="documentos" />
                    </div>

                    <ImputImg texto="Foto del Pedigri" className="espacioImg" />
                </div>

            </div>
            <div className="botonGuardarAgregar">
                <BotonGuardar />
            </div>
        </div>
    );
}

export default AgregarBovino;