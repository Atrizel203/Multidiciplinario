import React from "react";
import Icons from "../atomos/icons";
import "../css/opcionesLeftvar.css"

function OpcionesNav(props) {
    const { icono, texto } = props;




    return (
        <div className="opcionSpacio">
            <div className="espacioIcon" >
                <div >
                    <Icons iconName={icono} />
                </div>
            </div>
            <div className="textOpcion" >
                {texto}
            </div>
        </div>
    );

}
export default OpcionesNav;
