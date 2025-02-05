import { View, StyleSheet, ScrollView, Text } from 'react-native';

import * as Animatable from 'react-native-animatable';

import Header from '../components/Header'
import Ipresentation from '../components/Ipresentation';
import Card from '../components/Card';

import { useRef, useCallback, useState, useEffect } from 'react';

import { useFocusEffect } from 'expo-router';

import { useFetchData } from '../hooks/useFetchData';

export default function home() {

  const [ Cards, setCards ] = useState([]);
  const viewRef = useRef(null);

  const data = useFetchData('indexcards');

  useEffect(() => {
    if (data && data.length > 0) {
      setCards(data); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      viewRef.current.fadeInUpBig();
      return () => {
        
      }
    }, [])
  );

  return (
    <ScrollView style={styles.container}>

          <Header title='Bienvenidos a ' />
        
          <Animatable.View 
              ref={viewRef}
              style={styles.containercard}
            >

            <View style={styles.image}>
              <Ipresentation/>
            </View>
            <Text style={styles.textimage}>
                Te brindamos informacion durante tu viaje a la capital de la amistad 
            </Text>

            {

              Cards.map((info, index) => <Card key={index} image={info.image} icon={info.iconh} title={info.title} texto={info.texto} spam={info.spam} iconf={info.iconf} modal={info.modal} />)

            }
            
          </Animatable.View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  image: {
    marginTop: 80,
    alignItems: 'center',
    marginBottom: '-10%'
  },
  textimage: {
    color: '#CBBDF0',
    fontSize: 13,
    marginTop: 10,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    textAlign: 'center'
  },
  containercard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingBottom: '23%'
  }
})