import { StyleSheet, View } from 'react-native';

import { useState, useEffect } from 'react';

import { useFetchData } from '../hooks/useFetchData';

import CardModalAbaut from './subcomponents/CardModalAbaut';

export default function CardModalA() {

  const [abautus, setAbautUs] = useState([]);
  
  const data = useFetchData('abautus')

  useEffect(() => {
    if (data && data.length > 0) {
      setAbautUs(data); // Actualizamos el estado solo cuando los datos están disponibles
    }
  }, [data]);

  return (
    <View>
      {
        abautus.map((info, index) => <CardModalAbaut key={index} title={info.title} paragraph={info.paragraph} />)
      }
    </View>
  );

}

const styles = StyleSheet.create({
    
})