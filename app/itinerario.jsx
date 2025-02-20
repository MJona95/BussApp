import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Header from '../components/Header';
import CardAnimated from '../components/subcomponents/CardAnimated';

import { useFetchData } from '../hooks/useFetchData';


import * as Animatable from 'react-native-animatable';

import { useRef, useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Itinerario(){

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
    <View style={styles.container}>
      <Header title="Itinerario de" />
      <ScrollView>
        <Animatable.View 
          style={styles.containerinfo}
          ref={viewRef}
        >
        <View style={styles.containerseccion}>
          <Text style={styles.titleseccion}> Expresos a Managua - Esteli </Text>
          <View style={styles.seccion}>
  
          {
            expressbus.map((info, index) => <CardAnimated key={index} iconb={info.iconb} image={info.image} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} ruta={info.ruta} />)
          }

        </View> 
        <Text style={styles.titleseccion}> Servicio Ordinario Ocotal, Esteli y Managua</Text>
        <View style={styles.seccion}>
  
        {
          regularbus.map((info, index) => <CardAnimated key={index} iconb={info.iconb} image={info.image} busnombre={info.busnombre} tel={info.tel} numasiento={info.numasiento} iconhora={info.iconh} hora={info.hora} coloricon={info.coloricon} ruta={info.ruta} />)
        }


        </View> 

        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerinfo: {
    backgroundColor: 'white',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    alignItems: 'center',
    marginTop: '10%',
    paddingTop: '12%',
    paddingBottom: '23%'
  },
  containerseccion: {
    marginTop: '10%',
    width: '80%',
    alignItems: 'center',
    justifyContent: "center",
  },
  titleseccion: {
    color: '#5D93D9',
    fontWeight: 'bold',
    fontSize: width * 0.055,
    textAlign: 'center',
    marginBottom: '4%'
  },
  seccion: {
    justifyContent: 'center',
  },
  image: {
    width: '44.5%',
    aspectRatio: 1,
}
})