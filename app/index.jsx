import { View, StyleSheet, ScrollView, Text, useWindowDimensions, PixelRatio } from 'react-native';

import * as Animatable from 'react-native-animatable';

import Header from '../components/Header'
import Ipresentation from '../components/Ipresentation';
import Card from '../components/Card';

import { useRef, useCallback, useState, useEffect, useMemo } from 'react';

import { useFocusEffect } from 'expo-router';

import { useFetchData } from '../hooks/useFetchData';

export default function home() {

  const { width, height } = useWindowDimensions();

   // ✅ Función para calcular el tamaño de la fuente con PixelRatio
   const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const [ Cards, setCards ] = useState([]);
  const viewRef = useRef(null);

  const data = useFetchData('indexcards');

  useEffect(() => {
    if (data && data.length > 0) {
      setCards(data); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      viewRef.current.fadeInUpBig();
      return () => {
        
      }
    }, [])
  );

  // ✅ Se recalcula solo cuando `width` o `height` cambian
  const styles = useMemo(
    () => StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          marginTop: height * 0.090,
          alignItems: 'center',
          marginBottom: height * -0.055,
        },
        textimage: {
          color: '#CBBDF0',
          fontSize: getFontSize(14),
          marginTop: height * 0.010,
          fontWeight: 'bold',
          paddingHorizontal: width * 0.058,
          textAlign: 'center'
        },
        containercard: {
          backgroundColor: 'white',
          borderTopLeftRadius: width * 0.15,
          borderTopRightRadius: width * 0.15,
          alignItems: 'center',
          paddingBottom: height * 0.117
        }
      }),
    [width, height] // ✅ Solo se actualiza cuando `width` o `height` cambian
  );

  return (
    <View style={styles.container}>
      <Header title='Bienvenidos a' />
      <ScrollView>
        <Animatable.View 
          ref={viewRef}
          style={styles.containercard}
        >
          <View style={styles.image}>
            <Ipresentation/>
          </View>
          <Text style={styles.textimage}>
             Te brindamos informacion durante tu viaje a la capital de la amistad 
          </Text>
            {
              Cards.map((info, index) => <Card key={index} image={info.image} icon={info.iconh} title={info.title} texto={info.texto} spam={info.spam} iconf={info.iconf} modal={info.modal} />)
            }
        </Animatable.View>
      </ScrollView>
    </View>
    
  )
}