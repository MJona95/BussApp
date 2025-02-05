import { StyleSheet, View, Text } from 'react-native';

import { useState, useEffect } from 'react';

import { useFetchData } from '../hooks/useFetchData';

export default function CardModalA() {

  const [expressbus, setExpresBus] = useState([]);
  
  const data = useFetchData('expressbus')

  useEffect(() => {
    if (data && data.length > 0) {
      setExpresBus(data); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data]);

  console.log(expressbus)

  return (
    <View>
      {
        expressbus.map((bus, index) => (
          <View>
            <Text>{bus.busnombre}</Text>
          </View>
        ))
      }
    </View>
  );

}

const styles = StyleSheet.create({
    
})