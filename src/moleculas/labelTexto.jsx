import React from "react";
import "../css/labelTexto.css";
import Icons from "../atomos/icons";

function LabelTexto(props) {
    let { texto, iconName } = props;

    return (

        <div className="contenido">
            
            <label className='contenido-label'>
                {texto}
                <div className="icon">
                <Icons iconName={iconName}  />
                </div>
            </label>
        </div>

    );
}

export default LabelTexto;