import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow,BsCameraFill,BsTrashFill, BsDownload, BsPencilSquare} from "react-icons/bs";
import {AiFillTag,AiFillCloseCircle}from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {FaSave} from "react-icons/fa";
import Vaca from "../img/vaca.svg";
import Toro from "../img/toro.svg";
import {BsFillBandaidFill} from "react-icons/bs";
import {BsFillHeartFill} from "react-icons/bs";


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
        "benda": <BsFillBandaidFill/>,
        "heart": <BsFillHeartFill/>
    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;