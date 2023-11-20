import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    value: {
        fontSize: 14,
    },
});

const PdfDescarga = ({ nombre, arete, fechaNacimiento }) => {
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Información del Bovino</Text>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{nombre}</Text>
                    <Text style={styles.label}>Arete:</Text>
                    <Text style={styles.value}>{arete}</Text>
                    <Text style={styles.label}>Fecha de Nacimiento:</Text>
                    <Text style={styles.value}>{fechaNacimiento}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName="informacion_bovino.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Cargando documento...' : 'Descargar PDF'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PdfDescarga;
