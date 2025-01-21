import { View, Text, StyleSheet } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function CardModalIsec({ iconb, busnombre, iconhora, hora, coloricon }) {
  return (
    <View style={styles.infoseccion}>
        <FontAwesome5 style={styles.icon} name={iconb} size={9.5} color='#fff' />
        <Text style={styles.infotext}>{busnombre}</Text>
        <FontAwesome5 style={styles.icon} name={iconhora} size={9.5} color='#fff' />
        <Text style={styles.infotext}>{hora}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoseccion: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor: '#CBBDF0',
      margin: 3,
      borderRadius: 7,
      padding: 2,
      width: '43.8%',
    },
  infotext: {
      fontSize: 11.5,
      color: '#555',
      marginTop: '2%',
      fontWeight: 'bold'
  },
  icon: {
    marginTop: 3,
    marginHorizontal: 3
  }
})
