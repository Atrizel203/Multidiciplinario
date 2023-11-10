import React, { useState } from 'react';
import Icons from "./icons";
import "../css/botonEditar.css";
import ModalModificarPerfil from "../componentes/modalModificarPerfil";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <button className='button-Editar' onClick={openModal}><Icons iconName="editar" /></button>
            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="closeButton" onClick={closeModal}>&times;</span>
                        <h2>Contenido del Modal</h2>
                        <p>Este es el contenido del modal.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default App;
