import { View, Text, StyleSheet, useWindowDimensions, PixelRatio } from 'react-native';

import { useMemo } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function CardModalIsec({ iconb, busnombre, iconhora, hora, coloricon }) {

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const styles = useMemo(
    () => StyleSheet.create({
      infoseccion: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CBBDF0',
          marginVertical: height * 0.003,
          marginHorizontal: width * 0.01,
          borderRadius: width * 0.05,
          paddingHorizontal: width * 0.012,
          paddingVertical: height * 0.0018
        },
      infotext: {
          fontSize: getFontSize(12),
          color: '#555',
          fontWeight: 700,
          marginHorizontal: width * 0.003
      },
      icon: {
        marginHorizontal: width * 0.012
      }
    })
  )

  return (
    <View style={styles.infoseccion}>
        <FontAwesome5 style={styles.icon} name={iconb} size={width * 0.033} color='#fff' />
        <Text style={styles.infotext}>{busnombre}</Text>
        <FontAwesome5 style={styles.icon} name={iconhora} size={width * 0.033} color='#fff' />
        <Text style={styles.infotext}>{hora}</Text>
    </View>
  )
}

