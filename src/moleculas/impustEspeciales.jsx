import React from "react";
import Style from "../css/imputTextoEspecifico.module.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    let { texto, iconName, tipo , options} = props;

    return (
        <div className={Style.input_group}>
            {tipo === "textarea" ? (
                <textarea required name="text" autoComplete="off" className={Style.input} textarea />
            ) : tipo === "select" ? (
                <select required name="text" className={Style.input} select>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            ) : (
                <input required type={tipo} name="text" autoComplete="off" className={Style.input} />
            )}
            <label className={Style.user_label}>
                {texto}
                <Icons iconName={iconName} className={Style.iconinput} />
            </label>
        </div>
    );
}



export default ImputTexto;
