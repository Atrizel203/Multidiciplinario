import React, { useState } from "react";
import LeftVar from "../componentes/leftVar.jsx";
import MiniPerfiles from "../componentes/modalP1.jsx";
import BotonCirculo from "../atomos/botonCirculo.jsx";
import "./css/primerFiltro.css";

function PerfilVaca() {
    const profiles = [
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
        { arete: "1234", nombreDeVaca: "1234" },
    ];

    const perPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(profiles.length / perPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="contenedor-principal">
            <LeftVar />
            <div className="organismVacas">
                <div className="contenido-derecho">
                    {profiles
                        .slice((currentPage - 1) * perPage, currentPage * perPage)
                        .map((profile, index) => (
                            <MiniPerfiles key={index} arete={profile.arete} nombreDeVaca={profile.nombreDeVaca} />
                        ))}
                    
                </div>

                <div className="pagination">
                        {currentPage > 1 && (
                            <BotonCirculo
                                texto={currentPage - 1}
                                onClick={handlePrevPage}
                            />
                        )}
                        {[...Array(totalPages).keys()].map((page) => (
                            <BotonCirculo
                                key={page}
                                texto={page + 1}
                                selected={page + 1 === currentPage} // Resalta la página actual
                                onClick={() => setCurrentPage(page + 1)}
                            />
                        ))}
                        {currentPage < totalPages && (
                            <BotonCirculo
                                texto={currentPage + 1}
                                onClick={handleNextPage}
                            />
                        )}
                    </div>
            </div>
        </div>
    );
}

export default PerfilVaca;
