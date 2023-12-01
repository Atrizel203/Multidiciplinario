import React from "react";
import Icons from "./icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDescarga from "../api/pdfDescarga";
import "../css/botonDescarga.css";

function BotonDescargar(props) {
    return (
        <div className='button-descarga'>
                <PDFDownloadLink document={<PdfDescarga/>} fileName={"pdfDescarga"}>
                  <Icons iconName="descargar"/> 
                </PDFDownloadLink>
            </div>
    );
}

export default BotonDescargar;