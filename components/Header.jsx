import { View, Text, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import { StatusBar } from "expo-status-bar";

import { useCallback, useRef } from "react";
import { useFocusEffect } from "expo-router";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header({ title }){

  const viewRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      viewRef.current.slideInDown();
      return () => {
        
      }
    }, [])
  );

    return(
        <Animatable.View
            ref={viewRef}
            style={styles.header}>
              <StatusBar />
        <View style={styles.textos}>
        <Animatable.Text 
          animation="fadeInDown" 
          style={styles.title}>{title} <Text style={styles.spam}>BusApp</Text></Animatable.Text>
        <Text style={styles.subtitle}>Deseandote siempre un placentero viaje</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome5 name="bus-alt" size={40} color="#CBBDF0" />
      </View>
    </Animatable.View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5D93D9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'absolute',
        zIndex: 2
      },
      textos: {
        paddingHorizontal: 5,
        paddingBottom: 20,
        marginTop: '10%',  
        alignItems: 'center'
      },
      title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },
      spam: {
        color: '#CBBDF0',
      },
      subtitle: {
        color: 'white',
        paddingTop: 1,
        fontSize: 10
      },
      icon: {
        paddingHorizontal: 15,
        marginTop: '5%'
      }
})