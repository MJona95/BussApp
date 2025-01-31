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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home() {

  const [ Ldata, setLdata ] = useState([]);
  const [ Fdata, setFdata ] = useState([]);
  const [ Cards, setCards ] = useState([]);
  const [valueDate, setValueDate] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        
        //Se busca una variable llamada dateLastFetching y su valor se guarda en Date
        const storageDate = await AsyncStorage.getItem('dateLastFetching')
        //setValueDate se cambia de null al valor guardato previamente en Date
        setValueDate(storageDate)
        /*Se hace una comparacion del valor de valueDate si es diferente a null significa
        que hay un valor guardado de la ultima vez que se hicieron cambios en dicha variable*/
        if(valueDate !== null) {

          const lastDate = new Date(valueDate);
          const today = new Date()
          const todayFormatt = new Date(today.toISOString().split('T')[0]);

          const diffTime = todayFormatt - lastDate
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Diferencia en días

          
          console.log(`han transcurrido ${diffDays} dias `)
          //Comparacion de la ultima fecha con la fecha actual para saber si ya pasaron 90 dias
          console.log(valueDate+' es el primer dia');

          
        } else {
          const toDay = new Date().toISOString().split('T')[0];
          const Date = await AsyncStorage.setItem('dateLastFetching', toDay)
          setValueDate(Date)
          console.log(valueDate)
        }

        // Obtén la colección 'indexcards' desde Firestore
        const querySnapshot = await getDocs(collection(database, 'indexcards'));

        // Mapeamos los datos para extraer únicamente el array de objetos `indexcards`
        const indexCard = querySnapshot.docs.flatMap(doc => {
          const data = doc.data(); // Obtén los datos del documento
          return data.indexcards || []; // Retorna el array `indexcards` o un array vacío si no existe
        });

        setFdata(indexCard)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    

    fetchData();

    setLdata(dataL[0])

    Fdata != [] ? setCards(Fdata) : setCards(Ldata)

    console.log('====================================================================================')
    console.log(Fdata)

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