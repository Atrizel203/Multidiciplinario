import React, { useState } from "react";
import Style from "../css/imputTexto.module.css";
import Icons from "../atomos/icons";

function ImputTexto(props) {
    let { texto, iconName, value, onChange } = props;

    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (event) => {
      onChange(event.target.value);
      setIsValid(true);
    };

    const handleBlur = () => {
      let valid = value ? value.trim() !== "" : false;
      setIsValid(valid);
    };
    
    
    return (
        <div className={Style.input_group}>
            <input 
            required 
            type="text" 
            name="text" 
            autoComplete="off"
            className={`${Style.input} ${isValid ? "" : Style.invalid}`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            />

            <label className={Style.user_label}>
                {texto}
                <Icons iconName={iconName} className={Style.iconinput} />
            </label>
        </div>
    );
}

export default ImputTexto;
