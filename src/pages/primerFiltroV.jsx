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
    );
}

export default PerfilVaca;