import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';

import { useFetchData } from '../hooks/useFetchData';

import UtInfo from '../components/subcomponents/UtInfo';

import * as Animatable from 'react-native-animatable';

import { useRef, useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from 'expo-router';

export default function Intinerario(){

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

  const viewRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      viewRef.current.fadeInUpBig();
      return () => {
        
      }
    }, [])
  );

  return(
    <ScrollView style={styles.container}>

      <Header title="Intinerario de" />
      
      <Animatable.View 
        style={styles.containerinfo}
        ref={viewRef}
        >
        <View style={styles.containerseccion}>
          <Text style={styles.titleseccion}> Expresos a Managua - Esteli </Text>
          <View style={styles.seccion}>
        
          {
            expressbus.map((info, index) => <UtInfo key={index} iconb={info.iconb} busnombre={info.  busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
          }

          </View> 
          <Text style={styles.titleseccion}> Servicio Ordinario Ocotal, Esteli y Managua</Text>
          <View style={styles.seccion}>
        
          {
            regularbus.map((info, index) => <UtInfo key={index} iconb={info.iconb} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} />)
          }

          </View> 

        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerinfo: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    marginTop: '10%',
    paddingTop: '12%',
    paddingBottom: '23%'
  },
  containerseccion: {
    marginTop: '10%',
    width: '80%',
    alignItems: 'center',
    justifyContent: "center"
  },
  titleseccion: {
    color: '#5D93D9',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  seccion: {
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})