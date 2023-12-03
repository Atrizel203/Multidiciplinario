import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet , Image} from '@react-pdf/renderer';
import bovinoEspCard from './peticionesGet/bovinoEspCard';
import HijosBovino from './peticionesGet/hijosBovino';
import PadresBovino from './peticionesGet/padresBovino';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    marginBottom: 6
  }
});

const PdfDescarga = () => {
  const [datosVaca, setDatosVaca] = useState(null);
  const [hijos, setHijos] = useState(null);
  const [padres, setPadres] = useState(null);
  const id = localStorage.getItem('idBovino');

  async function fetchData() {
    try {
      const data = await bovinoEspCard(id);
      const data2 = await PadresBovino(id);
      const data3 = await HijosBovino(id);
      setDatosVaca(data);
      setPadres(data2);
      setHijos(data3);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Section = ({ title, content }) => (
    <View style={styles.section}>
      <Text style={styles.heading}>{title}</Text>
      {content}
    </View>
  );

  function textoHijos() {
    return hijos?.length === 0 ? 'Este bovino no tiene hijos' : 'Hijos:';
  }

  function textoPadre() {
    return padres?.padre ? 'Padre:' : 'Este bovino no tiene padre';
  }

  function textoSiniiga() {
    return datosVaca?.siniiga === null ? 'Siniiga: Este bovino no tiene siniiga' : 'Siniiga:';
  }

  function textoMadre() {
    return padres?.madre ? 'Madre:' : 'Este bovino no tiene madre';
  }


  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <Document>
      <Page size="A4" style={styles.page} >
      <Image src={datosVaca?.foto_perfil} border="0" width="100" height="100" />
        <Section
          title="Información del Bovino"
          content={
            <>
              <Text style={styles.text}>Nombre: {datosVaca?.nombre}</Text>
              <Text style={styles.text}>Género: {datosVaca?.genero}</Text>
              <Text style={styles.text}>Arete: {datosVaca?.arete_bovino}</Text>
              <Text style={styles.text}>
                Fecha de Nacimiento: {formatDate(datosVaca?.fecha_nacimiento)}
              </Text>
              <Text style={styles.text}>Raza: {datosVaca?.raza}</Text>
              <Text style={styles.text}> {textoSiniiga()}{datosVaca?.siniiga}</Text>
            </>
          }
        />
        <Section
          title="Padres del Bovino"
          content={
            <>
              <Text style={styles.subHeading}>{textoPadre()}</Text>
              <Text style={styles.text}>{padres?.padre?.areteBovino}</Text>
              <Text style={styles.subHeading}>{textoMadre()}</Text>
              <Text style={styles.text}>{padres?.madre?.areteBovino}</Text>
            </>
          } 
        />
        <Section
          title="Hijos del Bovino"
          content={
            <>
              <Text style={styles.subHeading}>{textoHijos()}</Text>
              {hijos?.map((hijo) => (
                <Text key={hijo?.id_bovino} style={styles.text}>
                  Arete: {hijo?.arete_bovino}
                </Text>
              ))}
            </>
          }
        />
      </Page>
    </Document>
  );
};

export default PdfDescarga;
