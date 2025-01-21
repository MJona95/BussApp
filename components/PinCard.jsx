import { StyleSheet, View, Text, Image } from "react-native";

const image = require('../assets/prueba1.jpg');

const firstColor = "#5D93D9"
const secondColor = "#CBBDF0"

export default function PinCard({estacion}) {

  return (
    <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{estacion.title}</Text>
          <Text style={styles.descripcion}>{estacion.descripcion}</Text>
          <View style={styles.detalles}>
            <Text style={styles.descE}>{estacion.descE}</Text>
            <Text style={styles.precioE}>{estacion.precioE}</Text>
          </View>
          <View style={styles.detalles}>
            <Text style={styles.descE}>{estacion.descO}</Text>
            <Text style={styles.precioE}>{estacion.precioO}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.textfooter}>{estacion.footer}</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 10,
      right: 10,
      left: 10,
      borderRadius: 15,
      overflow: 'hidden',

      flexDirection: 'row',
    },
    image: {
      width: 165,
      aspectRatio: 1
    },
    cardInfo: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flex: 1,
      alignItems: 'center'
    },
    title: {
      paddingBottom: 2,
      fontSize: 15,
      fontWeight: 'bold'
    },
    descripcion: {
      fontSize: 10,
      textAlign: 'center'
    },
    detalles: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 5,
      justifyContent: 'center'
    },
    descE:{
      fontSize: 10,
      marginHorizontal: 5
    },
    precioE: {
      fontSize: 10,
      marginHorizontal: 5
    },
    descTE:{
      fontSize: 9,
      marginHorizontal: 5
    },
    footer: {
      marginTop: 5
    },
    textfooter: {
      fontSize: 9,
      textAlign: 'center'
    }
})