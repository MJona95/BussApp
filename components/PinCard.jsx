import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function PinCard({estacion}) {

  return (
    <View style={styles.card}>
        <Image 
          source={{uri: `https://drive.google.com/uc?export=view&id=${estacion.image}`}} 
          style={styles.image} />
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
      bottom: height * 0.015,
      right: width * 0.02,
      left: width * 0.02,
      borderRadius: 15,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    image: {
      width: width * 0.42,
      aspectRatio: 1
    },
    cardInfo: {
      paddingVertical: height * 0.007,
      paddingHorizontal: width * 0.02,
      flex: 1,
      alignItems: 'center'
    },
    title: {
      fontSize: width * 0.045,
      fontWeight: 900
    },
    descripcion: {
      fontSize: width * 0.028,
      textAlign: 'center',
      fontWeight: 300
    },
    detalles: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: height * 0.004,
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
      marginTop: width * 0.01
    },
    textfooter: {
      fontSize: width * 0.024,
      textAlign: 'center',
      fontWeight: 500
    }
})