import { StyleSheet, View, Text, useWindowDimensions, PixelRatio } from 'react-native';

import { useState, useEffect, useMemo } from 'react';
import { useFetchData } from '../hooks/useFetchData';

import CardModalIsec from './subcomponents/CardModalIsec';

export default function CardModalI() {

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const styles = useMemo(
    () => StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: { 
        color: '#5D93D9',
        fontWeight: 'bold',
        fontSize: getFontSize(24),
        marginVertical: height * 0.002,
        textAlign: 'center'
      },
      informacion: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      informaciond: {
        flexWrap: 'wrap',
        alignItems: 'center',
      },
      titleinfo: {
        fontSize: getFontSize(17),
        color: '#5D93D9',
        marginVertical: height * 0.011,
        fontWeight: 'bold'
      },
      infotext: {
        marginHorizontal: width * 0.002,
      }
  })
  )

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
  
  return (
    <View style={styles.container} >
      <Text style={styles.title} > Itinerario de viaje </Text>
        <Text style={styles.titleinfo}>Expresos a Managua - Esteli</Text>
      <View style={styles.informacion} >
         {
            expressbus.map((info, index) => <CardModalIsec key={index} iconb={info.iconb} busnombre={info.busnombre} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
         }
      </View>
      <Text style={styles.titleinfo}>Ordinarios a Managua</Text>
      <View style={styles.informaciond} >
         {
            regularbus.map((info, index) => <CardModalIsec key={index} iconb={info.iconb} busnombre={info.busnombre} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
         }
      </View>
    </View>
  )
}