import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow,BsCameraFill,BsTrashFill,BsSearch, BsDownload, BsPencilSquare} from "react-icons/bs";
import {BiLogOut}from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {FaSave} from "react-icons/fa";
import Vaca from "../img/vaca.svg";
import Toro from "../img/toro.svg";
import {MdTitle} from "react-icons/md";
import {BsFill1SquareFill} from "react-icons/bs";
import {BsFillBandaidFill} from "react-icons/bs";
import {BsFillHeartFill, BsCalendar3} from "react-icons/bs";
import {BsCalendar2EventFill, BsGenderAmbiguous,} from "react-icons/bs";
import {AiOutlineMan, AiOutlineWoman, AiFillTag, AiFillCloseCircle} from "react-icons/ai";
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
        "buscar":<BsSearch/>,
        "descargar":<BsDownload/>,
        "guardar":<FaSave/>,
        "editar":<BsPencilSquare/>,
        "buscar":<BsSearch/>,
        "genero":<BsGenderAmbiguous/>,
        "calendario":<BsCalendar3/>,
        "macho":<AiOutlineMan/>,
        "hembra":<AiOutlineWoman/>,
        "vaca": <img src={Vaca} alt="vaca" />,
        "toro": <img src={Toro} alt="toro" />,
        "titulo":<MdTitle/>,
        "calendario":<BsCalendar2EventFill/>,
        "icono":<BsFill1SquareFill/>,
        "benda": <BsFillBandaidFill/>,
        "heart": <BsFillHeartFill/>,
    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;