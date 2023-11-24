import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow,BsCameraFill,BsTrashFill,BsSearch, BsDownload, BsPencilSquare} from "react-icons/bs";
import {AiFillTag,AiFillCloseCircle,AiOutlineMan,AiOutlineWoman} from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {FaSave} from "react-icons/fa";
import Vaca from "../img/vaca.svg";
import Toro from "../img/toro.svg";
import {MdTitle} from "react-icons/md";
import {BsFill1SquareFill,BsGenderAmbiguous} from "react-icons/bs";
import {BsFillBandaidFill} from "react-icons/bs";
import {BsFillHeartFill} from "react-icons/bs";
import {BsCalendar2EventFill} from "react-icons/bs";
import { PiUserCircleThin } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiSad } from "react-icons/bi";
import "./svg.css"
function Icons(props) {
    const {iconName}=props;


    const Icons={
        "home":<BsFillHouseFill/>,
        "tag":<AiFillTag/>,
        "agregar":<BsPlusCircleFill/>,
        "graficas":<BsGraphUpArrow/>,
        "salir":<BiLogOut/>,
        "documentos":<IoDocumentText/>,
        "camara":<BsCameraFill/>,
        "cerrar":<AiFillCloseCircle/>,
        "eliminar":<BsTrashFill/>,
        "buscar":<BsSearch/>,
        "descargar":<BsDownload/>,
        "guardar":<FaSave/>,
        "editar":<BsPencilSquare/>,
        "genero":<BsGenderAmbiguous/>,
        "Macho":<AiOutlineMan/>,
        "Hembra":<AiOutlineWoman/>,
        "vaca": <img src={Vaca} alt="vaca" />,
        "toro": <img src={Toro} alt="toro" />,
        "titulo":<MdTitle/>,
        "calendario":<BsCalendar2EventFill/>,
        "icono":<BsFill1SquareFill/>,
        "benda": <BsFillBandaidFill/>,
        "heart": <BsFillHeartFill/>,
        "usuario": <PiUserCircleThin/>,
        "notificacion": <CiBellOn/>,
        "regresar": <BsArrowReturnLeft/>,
        "Nada":<BiSad/>

    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;