import { StyleSheet, View, Text } from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { Linking } from "react-native";

export default function UtInfo({ iconb, busnombre, tel, numasiento, iconhora, hora, coloricon }) {

  const handleCallPress = async () => {
     await Linking.openURL(`tel: ${tel}`)
  }

  const handleWhatsAppPress = async () => {
    await Linking.openURL(`https://wa.me/${tel}?text=Hola ¿que tal?, queria hacer la consulta si aun tiene boletos disponibles`)
  }

  const handleSmsPress = async () => {
    await Linking.openURL(`sms:${tel}?body=Hola ¿que tal?, queria hacer la consulta si aun tiene boletos disponibles`)
  }

  return (
    <View style={styles.infoseccion}>
        <FontAwesome5 style={styles.icon} name={iconb} size={20} color={coloricon} />
        <Text style={styles.titleut}>{busnombre}</Text>
        <View style={styles.infosecond}>
          <Text style={styles.texttel} onPress={() => {handleCallPress()}}>{tel}</Text>
          <Text style={styles.textasiento}>capacidad hasta {numasiento} pasajeros</Text>
          <View style={styles.icons}> 
            <FontAwesome5 style={styles.iconc} onPress={() => {handleCallPress()}} name="phone" size={18} color='#fff' />
            <FontAwesome5 style={styles.iconc} onPress={() => {handleWhatsAppPress()}} name="whatsapp" size={20} color='#fff' />
            <FontAwesome5 style={styles.iconc} onPress={() => {handleSmsPress()}} name="comments" size={18} color='#fff' />
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoseccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#CBBDF0',
    borderRadius: 25
    },
  icon: {
    color: '#fff',
    marginTop: 2,
    marginHorizontal: 3
  },
  iconc: {
    marginHorizontal: 5
  },
  titleut: {
    fontSize: 20,
    marginHorizontal: 5,
    color: '#666',
    fontWeight: 'bold'
  },
  infosecond: {
    paddingHorizontal: 15
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  texttel: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555'
  },
  textasiento: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555'
  }
})
