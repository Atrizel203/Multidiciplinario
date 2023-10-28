import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow,BsCameraFill,BsTrashFill, BsDownload, BsPencilSquare, BsCalendar2EventFill} from "react-icons/bs";
import {AiFillTag,AiFillCloseCircle}from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {FaSave} from "react-icons/fa";
import Vaca from "../img/vaca.svg";
import Toro from "../img/toro.svg";
import {MdTitle} from "react-icons/md";
import {BsFill1SquareFill} from "react-icons/bs";

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
        "toro": <img src={Toro} alt="toro" />,
        "titulo":<MdTitle/>,
        "calendario":<BsCalendar2EventFill/>,
        "icono":<BsFill1SquareFill/>,
    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;