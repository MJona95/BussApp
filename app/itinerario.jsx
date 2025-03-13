import { View, Text, StyleSheet, ScrollView, useWindowDimensions, PixelRatio } from 'react-native';

import Header from '../components/Header';
import CardAnimated from '../components/subcomponents/CardAnimated';

import { useFetchData } from '../hooks/useFetchData';


import * as Animatable from 'react-native-animatable';

import { useRef, useCallback, useState, useEffect, useMemo } from 'react';
import { useFocusEffect } from 'expo-router';


export default function Itinerario(){

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const [expressbus, setExpresBus] = useState([]);
  const [regularbus, setRegularBus] = useState([]);
    
    const data = useFetchData('expressbus')
    const data2 = useFetchData('regularbus')
  
    useEffect(() => {
      if (data && data.length > 0) {
        setExpresBus(data); // Actualizamos el estado solo cuando los datos están disponibles
      }
  
      if (data2 && data2.length > 0) {
        setRegularBus(data2); // Actualizamos el estado solo cuando los datos están disponibles
      }
    }, [data, data2]);

  const viewRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      viewRef.current.fadeInUpBig();
      return () => {
        
      }
    }, [])
  );

  const styles = useMemo(
    () => StyleSheet.create({
      container: {
        flex: 1,
      },
      containerinfo: {
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.1,
        borderTopRightRadius: width * 0.1,
        alignItems: 'center',
        marginTop: height*0.045,
        paddingTop: height*0.055,
        paddingBottom:  height*0.11
      },
      containerseccion: {
        marginTop: height*0.05,
        width: width*0.8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleseccion: {
        color: '#5D93D9',
        fontWeight: 'bold',
        fontSize: getFontSize(23),
        textAlign: 'center',
        marginBottom: height*0.02
      },
      seccion: {
        justifyContent: 'center',
      },
    })
  )

  return(
    <View style={styles.container}>
      <Header title="Itinerario de" />
      <ScrollView>
        <Animatable.View 
          style={styles.containerinfo}
          ref={viewRef}
        >
        <View style={styles.containerseccion}>
          <Text style={styles.titleseccion}> Expresos a Managua - Esteli </Text>
          <View style={styles.seccion}>
  
          {
            expressbus.map((info, index) => <CardAnimated key={index} iconb={info.iconb} image={info.image} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} ruta={info.ruta} />)
          }

        </View> 
        <Text style={styles.titleseccion}> Servicio Ordinario Ocotal, Esteli y Managua</Text>
        <View style={styles.seccion}>
  
        {
          regularbus.map((info, index) => <CardAnimated key={index} iconb={info.iconb} image={info.image} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} ruta={info.ruta} />)
        }


        </View> 

        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
}