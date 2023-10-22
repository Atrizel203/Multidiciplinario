import React from "react";
import "../css/imputTexto.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    let { texto, iconName } = props;

    return (

        <div className="input-group">
            <input required type="text" name="text" autoComplete="off" className="input" />
            <label className="user-label">
                {texto}
                <Icons iconName={iconName} className="iconinput" />
            </label>
        </div>

    );
}

export default ImputTexto;
