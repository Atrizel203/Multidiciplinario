import React, { useState, useEffect } from "react";
import Logo from "../img/logoNuevoText.png";
import "../css/imgTexto.css";

function ImgTexto(proms) {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    // Alternar entre el primer y el segundo div cada 5000 milisegundos (5 segundos)
    const intervalId = setInterval(() => {
      setShowSecondDiv((prev) => !prev);
    }, 5000);

    // Limpieza del intervalo para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, está vacío para que solo se ejecute una vez al montar el componente.

  return (
    <div>
      <img className="logNuevo" src={Logo} alt="logo login" />
      <div className={`text ${showSecondDiv ? 'fadeOut' : ''}`}>
        "BOVINSOFT es una plataforma web intuitiva y poderosa diseñada para ayudarte a organizar y gestionar toda tu información de manera efectiva"
      </div>
      {showSecondDiv && (
        <div className="text fadeIn">
          "Se adapta a tus necesidades y te permite mantener todo en un solo lugar, accesible desde cualquier dispositivo con conexión a Internet."
        </div>
      )}
    </div>
  );
}

export default ImgTexto;
