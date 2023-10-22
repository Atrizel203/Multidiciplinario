import React from 'react';
import { BsFillHouseFill,BsPlusCircleFill,BsGraphUpArrow } from "react-icons/bs";
import {AiFillTag}from "react-icons/ai";
import {BiLogOut}from "react-icons/bi";




function Icons(props) {
    const {iconName}=props;

    Icons={
        "home":<BsFillHouseFill/>,
        "tag":<AiFillTag/>,
        "agregar":<BsPlusCircleFill/>,
        "graficas":<BsGraphUpArrow/>,
        "salir":<BiLogOut/>
    }

    return(
        <div>
            {Icons[iconName]}
        </div>
    );
}
export default Icons;