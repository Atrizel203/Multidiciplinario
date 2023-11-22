import React, { useState } from "react";
import Style from "../css/imputTextoEspecifico.module.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    const { texto, iconName, tipo, options, value, onChange } = props;
    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (event) => {
      onChange(event.target.value);
      setIsValid(true);
    };
  
    const handleBlur = () => {
      let valid;
    
      if (tipo === "textarea") {
        valid = value !== "";
      } else if (tipo === "select") {
        valid = value !== ""; // Requiere que se haya seleccionado una opción
      } else {
        valid = value !== "";
      }
    
      setIsValid(valid);
    };
    
    
    return (
        <div className={Style.input_group}>
        {tipo === "textarea" ? (
          <textarea
            required
            name="text"
            autoComplete="off"
            className={Style.input}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : tipo === "select" ? (
            <select
              required
              name="text"
              className={`${Style.input} ${isValid ? "" : "invalid"}`}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            ) : (
                <input
            required
            type={tipo}
            name="text"
            autoComplete="off"
            className={`${Style.input} ${isValid ? "" : Style.invalid}`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            )}
            <label className={Style.user_label}>
                {texto}
                <Icons iconName={iconName} className={Style.iconinput} />
            </label>
        </div>
    );
}

export default ImputTexto;
