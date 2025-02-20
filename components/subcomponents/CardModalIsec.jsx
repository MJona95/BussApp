import { View, Text, StyleSheet, Dimensions } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window')

export default function CardModalIsec({ iconb, busnombre, iconhora, hora, coloricon }) {
  return (
    <View style={styles.infoseccion}>
        <FontAwesome5 style={styles.icon} name={iconb} size={width * 0.033} color='#fff' />
        <Text style={styles.infotext}>{busnombre}</Text>
        <FontAwesome5 style={styles.icon} name={iconhora} size={width * 0.033} color='#fff' />
        <Text style={styles.infotext}>{hora}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoseccion: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CBBDF0',
      marginVertical: height * 0.003,
      marginHorizontal: width * 0.01,
      borderRadius: width * 0.05,
      padding: width * 0.01,
    },
  infotext: {
      fontSize: width * 0.030,
      color: '#555',
      fontWeight: 'bold',
      marginHorizontal: width * 0.003
  },
  icon: {
    marginHorizontal: width * 0.012
  }
})
