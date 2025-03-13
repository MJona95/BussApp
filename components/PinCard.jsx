import { StyleSheet, View, Text, Image, useWindowDimensions, PixelRatio } from "react-native";

import { useMemo } from "react";

export default function PinCard({estacion}) {

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const styles = useMemo(
    () => StyleSheet.create({
      card: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: height * 0.015,
        right: width * 0.02,
        left: width * 0.02,
        borderRadius: width*0.05,
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
        fontSize: getFontSize(15),
        fontWeight: 900
      },
      descripcion: {
        fontSize: getFontSize(11),
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
        fontSize: getFontSize(10),
        marginHorizontal: width*0.05
      },
      precioE: {
        fontSize: getFontSize(10),
        marginHorizontal: width*0.01
      },
      descTE:{
        fontSize: getFontSize(9),
        marginHorizontal: width*0.05
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
  )

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