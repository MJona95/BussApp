import { StyleSheet, View, Text } from 'react-native';

import { useState, useEffect } from 'react';
import { useFetchData } from '../hooks/useFetchData';

import CardModalIsec from './subcomponents/CardModalIsec';

export default function CardModalI() {

  const [expressbus, setExpresBus] = useState([]);
  const [regularbus, setRegularBus] = useState([]);
  
  const data = useFetchData('expressbus')
  const data2 = useFetchData('regularbus')

  useEffect(() => {
    if (data && data.length > 0) {
      setExpresBus(data); // Actualizamos el estado solo cuando los datos están disponibles
    }

    if (data2 && data2.length > 0) {
      setRegularBus(data2); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data, data2]);
  
  return (
    <View style={styles.container} >
      <Text style={styles.title} > Intinerario de viaje </Text>
        <Text style={styles.titleinfo}>Expresos a Managua - Esteli</Text>
      <View style={styles.informacion} >
         {
            expressbus.map((info, index) => <CardModalIsec key={index} iconb={info.iconb} busnombre={info.busnombre} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
         }
      </View>
      <Text style={styles.titleinfo}>Ordinarios a Managua</Text>
      <View style={styles.informaciond} >
         {
            regularbus.map((info, index) => <CardModalIsec key={index} iconb={info.iconb} busnombre={info.busnombre} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
         }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    title: {
      color: '#5D93D9',
      fontWeight: 'bold',
      fontSize: 25,
      margin: 5,
      textAlign: 'center'
    },
    informacion: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    informaciond: {
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    titleinfo: {
      fontSize: 15,
      color: '#5D93D9',
      margin: 5,
      fontWeight: 'bold'
    },
    infotext: {
      marginHorizontal: 5,
      fontSize: 12.5
    }
})