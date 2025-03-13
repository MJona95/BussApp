import { View, Text, StyleSheet, useWindowDimensions, PixelRatio } from "react-native";

import * as Animatable from 'react-native-animatable';

import { StatusBar } from "expo-status-bar";

import { useCallback, useRef, useMemo } from "react";
import { useFocusEffect } from "expo-router";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header({ title }){

  const { width, height } = useWindowDimensions();

  const getFontSize = (size) => {
    const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const styles = useMemo(
    () => StyleSheet.create({
      header: {
          backgroundColor: '#5D93D9',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          width: width*1,
          borderBottomLeftRadius: width * 0.095,
          borderBottomRightRadius: width * 0.095,
          position: 'absolute',
  
          zIndex: 1, // Asegura que esté por encima del scroll
        },
        textos: {
          paddingHorizontal: 5,
          paddingVertical: height*0.039,
          alignItems: 'center'
        },
        title: {
          color: 'white',
          fontSize: getFontSize(25),
          fontWeight: 'bold',
        },
        spam: {
          color: '#CBBDF0',
        },
        subtitle: {
          color: 'white',
          paddingTop: 1,
          fontSize: getFontSize(12)
        },
        icon: {
          paddingHorizontal: width*0.01,
          marginTop: height*0.01
        }
  })
  )

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

const styles = StyleSheet.create()