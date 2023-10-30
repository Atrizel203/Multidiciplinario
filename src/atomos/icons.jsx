import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow,BsCameraFill,BsTrashFill, BsDownload, BsPencilSquare,BsSearch,BsGenderAmbiguous,BsCalendar3} from "react-icons/bs";
import {AiFillTag,AiFillCloseCircle,AiOutlineMan,AiOutlineWoman}from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {FaSave} from "react-icons/fa";
import Vaca from "../img/vaca.svg";
import Toro from "../img/toro.svg";
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
        "buscar":<BsSearch/>,
        "genero":<BsGenderAmbiguous/>,
        "calendario":<BsCalendar3/>,
        "macho":<AiOutlineMan/>,
        "hembra":<AiOutlineWoman/>,
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