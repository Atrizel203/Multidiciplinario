import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow } from "react-icons/bs";
import {AiFillTag}from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";




import "./svg.css"
function Icons(props) {
    const {iconName}=props;


    Icons={
        "home":<BsFillHouseFill/>,
        "tag":<AiFillTag/>,
        "agregar":<BsPlusCircleFill/>,
        "graficas":<BsGraphUpArrow/>,
        "salir":<BiLogOut/>,
        "documentos":<IoDocumentText/>,
        "camara":<BsCameraFill/>,
        "cerrar":<AiFillCloseCircle/>,
        "eliminar":<BsTrashFill/>,
        "descargar":<BsDownload/>,
        "guardar":<FaSave/>,
        "editar":<BsPencilSquare/>,
        "vaca": <img src={Vaca} alt="vaca" />,
        "toro": <img src={Toro} alt="toro" />
    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;