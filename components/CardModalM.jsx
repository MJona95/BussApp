import { StyleSheet, View, Text, Image } from 'react-native';

import PinOrigen from "../assets/PinOrigen.png";
import pinEstacionUno from "../assets/PinEstacion1.png";
import pinDestino from "../assets/PinDestino.png";   

import Fontisto from '@expo/vector-icons/Fontisto';

export default function CardModalM() {
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

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    title: {
      color: '#5D93D9',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10
    },
    seccion: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizontal: 30,

    },
    image: {
      width: 50,
      height: 63,
      marginHorizontal: 10,
      marginBottom: 5
    },
    descripcion: {
      marginHorizontal: 10,
      textAlign: 'center'
    }
})