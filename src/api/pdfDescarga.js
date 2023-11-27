import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import bovinoEspCard from './peticionesGet/bovinoEspCard';
import HijosBovino from './peticionesGet/hijosBovino';
import PadresBovino from './peticionesGet/padresBovino';

// Crea estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PdfDescarga = ({ id }) => {
  const [datosVaca, setDatosVaca] = useState(null);
  const [hijos, setHijos] = useState(null);
  const [padres, setPadres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const datosVaca = await bovinoEspCard(id);
      const hijos = await HijosBovino(id);
      const padres = await PadresBovino(id);
      setDatosVaca(datosVaca);
      setHijos(hijos);
      setPadres(padres);
    };

    fetchData();
  }, [id]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Nombre: {datosVaca?.nombre}</Text>
          <Text>Arete: {datosVaca?.arete}</Text>
          <Text>Fecha de Nacimiento: {datosVaca?.fechaNacimiento}</Text>
          {/* Aquí puedes agregar más información sobre la vaca, sus hijos y padres */}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDescarga;
