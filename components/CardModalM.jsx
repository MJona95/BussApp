import { StyleSheet, View, Text, Image, useWindowDimensions, PixelRatio } from 'react-native';

import { useMemo } from 'react';

import PinOrigen from "../assets/PinOrigen.png";
import pinEstacionUno from "../assets/PinEstacion1.png";
import pinDestino from "../assets/PinDestino.png";   

import Fontisto from '@expo/vector-icons/Fontisto';

export default function CardModalM() {

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
      },
      title: {
        color: '#5D93D9',
        fontSize: getFontSize(23),
        fontWeight: 'bold',
        marginVertical: height*0.02
      },
      seccion: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: height*0.015,
        paddingHorizontal: width*0.085,
  
      },
      image: {
        width: width*0.131,
        height: height*0.085,
        marginHorizontal: width*0.01,
        marginBottom: height*0.01
      },
      descripcion: {
        marginHorizontal: width*0.025,
        fontSize: getFontSize(14),
        textAlign: 'center'
      }
  })
  )

  return (
    <View style={styles.container} >
      <Text style={styles.title} > Iconos usados en el mapa </Text>
      <View style={styles.seccion} >
        <Image style={styles.image} source={PinOrigen}/>
          <Text style={styles.descripcion} >
            Con este pin se representara el Origen, Partiendo desde la ciudad de Somoto especificamente desde la terminal.
          </Text>
     </View>
      <View style={styles.seccion} >
        <Image style={styles.image} source={pinEstacionUno}/>
          <Text style={styles.descripcion} >
            Con este pin se representara las estaciones en las que la unidad de transporte se detiene siempre con un tiempo aproximado de 5 a 10 minutos.
          </Text> 
      </View>
      <View style={styles.seccion} >
        <Image style={styles.image} source={pinDestino}/>
          <Text style={styles.descripcion} >
            Con este pin se representara el destino del viaje, los posibles destinos son Ocotal, Esteli y Managua de estos destinos los ultimos dos cuentan con el servicio de viaje expreso.
          </Text>
      </View>
      <View style={styles.seccion} >
          <Fontisto name="map" size={40} color="#5D93D9" />
          <Text style={styles.descripcion} >
            El mapa tambien cuenta con botones al hacer click en uno de ellos se trasara la ruta desde la ciudad de Somoto 
          </Text>
      </View>
    </View>
  )
  }