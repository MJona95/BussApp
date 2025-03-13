import { View, Text, StyleSheet, useWindowDimensions, PixelRatio } from 'react-native';
import { useMemo } from 'react';

export default function CardModalAbaut({ title, paragraph, link }) {

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const styles = useMemo(
    () => StyleSheet.create({
      infoseccion: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * 0.003,
        marginHorizontal: width * 0.01,
        borderRadius: width * 0.05,
        paddingHorizontal: width * 0.01,
        paddingVertical: height*0.0020
      }, 
      title: {
        fontSize: getFontSize(20),
        color: '#5D93D9',
        fontWeight: 'bold',
        marginVertical: height * 0.015
      },
      paragraph: {
        color: '#777',
        fontSize: getFontSize(13.2),
        fontWeight: 'bold',
        textAlign: 'center'
      }
    })
  )

  return (
    <View style={styles.infoseccion}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{paragraph}</Text>
        <Text>{link}</Text>
    </View>
  )
}