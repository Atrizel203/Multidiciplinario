import React, { useRef, useState } from "react";
import Icons from "../atomos/icons";
import "../css/imputImg.css";
import axios from 'axios';

function ImputImg({ texto }) {
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = async (e) => {
        try {
            const selectedFile = e.target.files[0];

            if (!selectedFile) {
                return;
            }

            setIsLoading(true);
            const imageUrl = await subirImagen(selectedFile);
            setIsLoading(false);

            const lowerCaseText = texto.toLowerCase();

            if (lowerCaseText === "Foto del Bovino") {
                localStorage.setItem('fotoPerfil', imageUrl);
            } else if (lowerCaseText === "Foto del Pedigri") {
                localStorage.setItem('fotoPedigri', imageUrl);
            }

        } catch (error) {
            setIsLoading(false);
            console.error("Error al subir la imagen:", error.message);
        }
    };

    const subirImagen = async (file) => {
        const data = new FormData();
        data.append("file", file);

        const uploadPreset = "bovino";
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dbznph6hj/image/upload?upload_preset=${uploadPreset}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (response.data && response.data.secure_url) {
            return response.data.secure_url;
        } else {
            throw new Error(`Error al subir la imagen: ${JSON.stringify(response.data)}`);
        }
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
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            {isLoading && <div className="loader">Cargando...</div>}
        </div>
    );
}

export default ImputImg;
