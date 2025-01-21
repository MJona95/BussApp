import { View, StyleSheet, ScrollView, Text } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { database } from '../src/fb';
import { collection, getDocs } from 'firebase/firestore';

import Header from '../components/Header'
import Ipresentation from '../components/Ipresentation';
import Card from '../components/Card';

import { dataL } from '../components/dataL';

import { useRef, useCallback, useState, useEffect } from 'react';

import { useFocusEffect } from 'expo-router';

export default function home() {

  const [ Ldata, setLdata ] = useState([]);

  const [ Fdata, setFdata ] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        
        // Obtén la colección 'indexcards' desde Firestore
      const querySnapshot = await getDocs(collection(database, 'indexcards'));

      // Mapeamos los datos para extraer únicamente el array de objetos `indexcards`
      const indexCard = querySnapshot.docs.flatMap(doc => {
        const data = doc.data(); // Obtén los datos del documento
        return data.indexcards || []; // Retorna el array `indexcards` o un array vacío si no existe
      });

        setFdata(indexCard)
        console.log(setFdata)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    setLdata(dataL[0])
    console.log("");
    console.log(setLdata)

  }, []);

  const viewRef = useRef(null);

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

              Fdata.map((info, index) => <Card key={index} image={info.image} icon={info.iconh} title={info.title} texto={info.texto} spam={info.spam} iconf={info.iconf} modal={info.modal} />)

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