import { View, Text, StyleSheet, ScrollView, useWindowDimensions, PixelRatio, Linking, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';
import { useRef, useCallback, useState, useEffect, useMemo } from 'react';
import { useFocusEffect } from 'expo-router';

import { FontAwesome5 } from '@expo/vector-icons';

import CardAnimated from '../components/subcomponents/CardAnimated';
import { useFetchData } from '../hooks/useFetchData';

export default function Privado() {

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const [privatetransport, setPrivateTransport] = useState([]);

  const data = useFetchData('privatetransport');

  useEffect(() => {
    if (data && data.length > 0) {
      setPrivateTransport(data); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data]);

  const viewRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      viewRef.current?.fadeInUpBig();
    }, [])
  );
  
      const handleCallPress = async () => {
          await Linking.openURL(`tel:+50557533791`);
      }
  
      const handleWhatsAppPress = async () => {
          await Linking.openURL(`https://wa.me/+50557533791?text=Hola ¿qué tal?, quería hacer una consulta sobre boletos disponibles`);
      }

      const handleWeb = async () => {
        await Linking.openURL(`https://devtoolsystems.github.io/web/es/`);
    }

    const styles = useMemo(
      () => StyleSheet.create({
        container: {
          flex: 1,
        },
        containerinfo: {
          backgroundColor: 'white',
          borderTopLeftRadius: width*0.1,
          borderTopRightRadius: width*0.1,
          alignItems: 'center',
          marginTop: height * 0.05,
          paddingTop: height*0.075,
          paddingBottom: height*0.125,
        },
        seccion: {
          marginHorizontal: width * 0.045,
        },
        title: {
          color: '#5D93D9',
          fontSize: getFontSize(23),
          fontWeight: 'bold',
          paddingVertical: height * 0.03,
          textAlign: 'center',
        }, 
        subtitle: {
          fontSize: getFontSize(16),
          color: '#888',
          textAlign: 'center',
          paddingBottom: height * 0.02,
          fontWeight: 400
        },
        titleview: {
          borderColor: '#666',
          borderBottomWidth: width * 0.001,
          borderTopWidth: width * 0.001,
          marginVertical: height * 0.04
        },
        contacts: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        contact: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: width * 0.020,
          paddingHorizontal: width * 0.015,
          borderWidth: 0.18,
          borderRadius: width * 0.05,
          marginHorizontal: width * 0.005
        },
        telefono: {
          color: '#666',
          marginHorizontal: width * 0.02,
          fontSize: getFontSize(12.2)
        },
      })
    )

  return (
    <View style={styles.container}>
      <Header title='Transporte Privado' />
      <ScrollView>
        <Animatable.View ref={viewRef} style={styles.containerinfo}>
          <View style={styles.seccion}>
              <Text style={styles.title}>¿Necesita un transporte privado?</Text>
              <Text style={styles.subtitle}>En esta seccion podra ver algunos transportes privados y sus contactos para consultas y contrataciones</Text>
          </View>
          <View style={styles.seccion}>
            {
              privatetransport.map((info, index) => <CardAnimated key={index} iconb={info.iconb} image={info.image} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} ruta={info.ruta} />)
            }
          </View>
          <View style={styles.seccion}>
            <View style={styles.titleview}>
              <Text style={styles.title}>Anuncio Importante anuncia tu negocio aqui</Text>
            </View>
            <Text style={styles.subtitle}>Puedes contactarte con nosotros para poder anunciar tu transporte en esta aplicacion </Text>
            
            <View style={styles.contacts}>
            <TouchableOpacity style={styles.contact} onPress={() => {handleCallPress()}} >
                <FontAwesome5 style={styles.iconc} name="phone" size={width * 0.025} color='#5D93D9' />
                <Text style={styles.telefono}>+505 57533791</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contact} onPress={() => {handleWhatsAppPress()}} >
                <FontAwesome5 style={styles.iconc} name="whatsapp" size={width * 0.035} color='#5D93D9' />
                <Text style={styles.telefono}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contact} onPress={() => {handleWeb()}} >
                <FontAwesome5 style={styles.iconc} name="chrome" size={width * 0.035} color='#5D93D9' />
                <Text style={styles.telefono}>DevToolSystem</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>   
      </ScrollView>
    </View> 
  );
}