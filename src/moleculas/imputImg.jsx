import React, { useRef } from "react"; 
import Icons from "../atomos/icons";
import "../css/imputImg.css";

function ImputImg(props) {
    const fileInputRef = useRef(null);
    const { texto } = props;

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Obtiene el primer archivo seleccionado
        // Puedes realizar acciones con el archivo seleccionado aquí, como subirlo a un servidor o mostrar una vista previa.
        console.log("Archivo seleccionado:", selectedFile);
    };

    return (
        <div className="containerImg">
            <p>{texto}</p>
            <label htmlFor="fileInput">
                <Icons iconName="camara" />
            </label>

            <input
                id="fileInput"
                type="file"
                accept="image/*" 
                style={{ display: "none"}}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ImputImg;
