import React, { useEffect, useState } from 'react';
import LeftVar from "../componentes/leftVar.jsx";
import MiniPerfiles from "../componentes/modalP1.jsx";
import BotonCirculo from "../atomos/botonCirculo.jsx";
import realizarOperacionBovinos from "../api/peticionesGet/bovinosOpcions4.js";
import Buscador from "../componentes/buscador.jsx";

import './css/primerFiltro.css';

const PerfilVaca = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const infoBovino = localStorage.getItem("InfoBovino");
                const response = await realizarOperacionBovinos(infoBovino);
                setProfiles(response || []); // Manejar el caso de response siendo null o undefined
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        cargarDatos();
    }, []);

    const perPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil((profiles || []).length / perPage); // Manejar el caso de profiles siendo null o undefined

    return (
        <div>
            <LeftVar />
            <Buscador />
            <div className="contenedor-principal">
                <div className="organismVacas">
                    <div className="contenido-derecho">
                        {(profiles || [])
                            .slice((currentPage - 1) * perPage, currentPage * perPage)
                            .map((profile, index) => (
                                <MiniPerfiles key={index} arete={profile.areteBovino} nombreDeVaca={profile.nombre} idBovino={profile.idBovino}/>
                            ))}
                    </div>
                    <div className="pagination">
                        {[...Array(totalPages).keys()].map((page) => (
                            <BotonCirculo
                                key={page}
                                texto={page + 1}
                                onClick={() => setCurrentPage(page + 1)}
                                style={page + 1 === currentPage ? { backgroundColor: "#FFFFFF", color: "#5AA257" } : {}}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfilVaca;
