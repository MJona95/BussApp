import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Header from '../components/Header'

import * as Animatable from 'react-native-animatable';

import { useRef, useCallback } from 'react';

import { useFocusEffect } from 'expo-router';

export default function Nosotros(){

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
      ref={viewRef}
      style={styles.containerinfo}
      >
        <View style={styles.seccion}>
          <Text style={styles.title}>Quienes somos</Text>
          <Text style={styles.parrafo }>Somos una pequeña startup creada hace aproximadamente 5 años, todos los integrantes somos originarios de la ciudad de Somoto, hemos participado en ferias tecnologicas como el hackathon 2 años consecutivos, algunos de nuestros integrantes han participado como speaker en ferias como la expo pyme 2020 ademas de trabajar a tiempo completo como desarrolladores de aplicaciones en distintas plataformas ademas del diseño de paginas y aplicaciones web</Text>
        </View>
        <View style={styles.seccion}>
          <Text style={styles.title}>¿Que es este proyecto?</Text>
          <Text style={styles.parrafo }>Este proyecto nacio como una respuesta a la necesidad de terner a la mano la infomacion actualizada necesaria para viajar hacia la ciudad de Somoto haciendo uso del transporte publico y privado</Text>
        </View>
        <View style={styles.seccion}>
          <Text style={styles.title}>Y ahora que sigue</Text>
          <Text style={styles.parrafo }>Si esta aplicacion es de ayuda para nuestros usuarios estaremos mejorando la experiencia al momento de utilizarla ademas de desarrollar aplicaciones de esta misma indole con el objetivo de mejorar la experiencia de actividades cotidianas</Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerinfo: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    marginTop: '10%',
    paddingTop: '15%',
    paddingBottom: '23%'
  },
  seccion: {
    margin: 15
  },
  title: {
    color: '#CBBDF0',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  parrafo: {
    margin: 12,
    textAlign: 'center'
  }
})