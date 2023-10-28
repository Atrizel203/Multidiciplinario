import React from "react";
import "../css/imputTextoEspecifico.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    let { texto, iconName, tipo , options} = props;

    return (
        <div className="input-group">
            {tipo === "textarea" ? (
                <textarea required name="text" autoComplete="off" className="input textarea" />
            ) : tipo === "select" ? (
                <select required name="text" className="input select">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            ) : (
                <input required type={tipo} name="text" autoComplete="off" className="input" />
            )}
            <label className="user-label">
                {texto}
                <Icons iconName={iconName} className="iconinput" />
            </label>
        </div>
    );
}



export default ImputTexto;
