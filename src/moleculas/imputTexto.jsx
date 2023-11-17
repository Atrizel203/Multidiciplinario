import React from "react";
import Style from "../css/imputTexto.module.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    let { texto, iconName } = props;

    return (

        <div className={Style.input_group}>
            <input required type="text" name="text" autoComplete="off"className={Style.input} />
            <label className={Style.user_label}>
                {texto}
                <Icons iconName={iconName} className={Style.iconinput} />
            </label>
        </div>

    );
}

export default ImputTexto;
