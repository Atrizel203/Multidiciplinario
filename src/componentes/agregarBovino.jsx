import React, { useState } from "react";
import BotonGuardar from "../atomos/botonGuardar.jsx";
import ImputAgregarEspecial from "../moleculas/impustEspeciales.jsx";
import ImputAgregarNormal from "../moleculas/imputTexto.jsx"
import ImputImg from "../moleculas/imputImg.jsx";
import "../css/agregarBovino.css";
import swal from 'sweetalert';
import crearBovino from "../api/crearEntidades/crearBovino.js";

function AgregarBovino() {

    const [Nombre, setNombre] = useState("");
    const [Raza, setRaza] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [TipoNacimiento, setTipoNacimiento] = useState("");
    const [Genero, setGenero] = useState("");
    const [NombreFeedback, setNombreFeedback] = useState("");
    const [RazaFeedback, setRazaFeedback] = useState("");
    const [fechaFeedback, setFechaFeedback] = useState("");
    const [fechaTipoFeedback, setFechaTipoFeedback] = useState("");
    const [GeneroFeedback, setGeneroFeedback] = useState("");
    const [areteBovino, setAreteBovino] = useState("");
    const [areteToro, setAreteToro] = useState("");
    const [areteVaca, setAreteVaca] = useState("");
    const [siniiga, setSiniiga] = useState("");
/*     const [fotoBovino, setFotoBovino] = useState("");
    const [fotoPedigri, setFotoPedigri] = useState(""); */

    const handleGuardar = () => {
        if (Nombre === "" || Raza === "" || fechaNacimiento === "" || TipoNacimiento === "" || Genero === "") {
            if (Nombre === "") {
                setNombreFeedback("¡Requiere poner un nombre!");
            }
            if (Raza === "") {
                setRazaFeedback("¡Requiere seleccionar una raza!");
            }
            if (fechaNacimiento === "") {
                setFechaFeedback("¡Requiere seleccionar una fecha!");
            }
            if (TipoNacimiento === "") {
                setFechaTipoFeedback("¡Requiere seleccionar un tipo de nacimiento!");
            }
            if (Genero === "") {
                setGeneroFeedback("¡Requiere seleccionar un Genero!");
            }
        } else {
            let bovino = {
                "nombre": Nombre,
                "raza": Raza,
                "fechaNacimiento": fechaNacimiento,
                "tipoNacimiento": TipoNacimiento,
                "genero": Genero,
                "areteBovino": areteBovino,
                "areteToro": areteToro,
                "areteVaca": areteVaca,
                "siniiga": siniiga,
/*                 "fotoBovino": fotoBovino,
                "fotoPedigri": fotoPedigri */
                "idAdminResult": localStorage.getItem("correo"),
            }
            crearBovino(bovino);
            swal({
                title: "Los datos se han guardado correctamente.",
                icon: "success",
            });
        }
    };
    
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
    let tipoNacimiento = [
        { value: '', label: '' },
        { value: 'CargaManual', label: 'Carga Manual' },
        { value: 'Inseminada', label: 'Inseminada'},
        { value: 'CompraEmbrion', label: 'Compra de Embrion'},
        { value: 'CompraOvulo', label: 'Compra de Ovulo'},
        { value: 'CompraSemen', label: 'Compra de Semen'}
    ];

    return (

        <div className="containerAgregarBovino">
            <div className="containerInfo">
                <div className="infoImportant">
                    <h1>Informacion Importante</h1>
                    <div className="opciones">
                        <ImputAgregarNormal texto="Nombre" value={Nombre} onChange={setNombre}/>
                        {!Nombre && <div className="feedback">{NombreFeedback}</div>}
                        <ImputAgregarEspecial texto="Raza" tipo="select" options={razas} value={Raza} onChange={setRaza}/>
                        {!Raza && <div className="feedback">{RazaFeedback}</div>}
                        <ImputAgregarEspecial texto="Fecha de Nacimiento" tipo="date" value={fechaNacimiento} onChange={setFechaNacimiento}/>
                        {!fechaNacimiento && <div className="feedback">{fechaFeedback}</div>}
                        <ImputAgregarEspecial texto="Tipo de nacimiento" tipo="select" options={tipoNacimiento} value={TipoNacimiento} onChange={setTipoNacimiento}/>
                        {!TipoNacimiento && <div className="feedback">{fechaTipoFeedback}</div>}
                        <ImputAgregarEspecial texto="Genero" tipo="select" options={genero} value={Genero} onChange={setGenero} />
                        {!Genero && <div className="feedback">{GeneroFeedback}</div>}
                    </div>
                    <ImputImg texto="Foto del Bovino" className="espacioImg" />
                </div>

                <div className="infoExtra">
                    <h1>Informacion Relacionada</h1>
                    <div className="opciones">
                        <ImputAgregarNormal texto="Arete del Bovino" iconName="tag" onChange={setAreteBovino} />
                        <ImputAgregarNormal texto="Arete del Toro" iconName="tag" onChange={setAreteToro} />
                        <ImputAgregarNormal texto="Arete del Vaca" iconName="tag" onChange={setAreteVaca} />
                        <ImputAgregarNormal texto="Siniiga" iconName="documentos" onChange={setSiniiga} />
                    </div>

                    <ImputImg texto="Foto del Pedigri" className="espacioImg" />
                </div>

            </div>
            <div className="botonGuardarAgregar" onClick={handleGuardar}>
                <BotonGuardar />
            </div>
        </div>
    );
}

export default AgregarBovino;