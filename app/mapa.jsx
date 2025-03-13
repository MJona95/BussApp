import { View, StyleSheet, ScrollView, Text, TouchableOpacity, useWindowDimensions, PixelRatio, Image } from "react-native";
import Constants  from "expo-constants";

import * as Animatable from 'react-native-animatable';
import * as Location from 'expo-location';  // 📌 Importamos el paquete de ubicación


import Card from "../components/PinCard";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import PinOrigen from "../assets/PinOrigen.png";
import PinDestino from "../assets/PinDestino.png"
import PinEstacionUno from "../assets/PinEstacion1.png"

import Header from '../components/Header'

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useFocusEffect } from "expo-router";

import { useFetchData } from "../hooks/useFetchData";

const pinSize = 90 / PixelRatio.get();

export default function Mapa(){

    const { width, height } = useWindowDimensions();

    const getFontSize = (size) => {
        const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
        const newSize = size * scale;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      };

    const EXPO_PUBLIC_API_KEY_GM = Constants.expoConfig.extra.apikeym;

    const [stations, setStations] = useState([]);

    // 📌 Estado para la ubicación del usuario
    const [userLocation, setUserLocation] = useState(null);

    // 📌 Función para solicitar permisos y obtener ubicación
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert("Permiso denegado", "Activa los permisos de ubicación en la configuración.");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });
    };

    const data = useFetchData('stations');

    useEffect(() => {
        
        if (data && data.length > 0) {
          setStations(data); // Actualizamos el estado solo cuando los datos están disponibles
        }

        getLocation();

      }, [data]);
    
    const viewRef = useRef(null);

    useFocusEffect(
        useCallback(() => {
          viewRef.current.fadeInUpBig();
          return () => {
            
          }
        }, [])
      );

    const [origin, setOrigin] = useState({
        latitude: 13.48878032749927, 
        longitude: -86.58153868149704
    });

    const [destination, setDestination] = useState({
        latitude: 12.134100, 
        longitude:  -86.192963
    });

    const [selectedEstation, setSelectionEstation] = useState(null);

    const styles = useMemo(
        () => StyleSheet.create({
            container: {
                flex: 1,
                zIndex: 1
            },
            seccionmapa: {
                alignItems: 'center',
                backgroundColor: 'white',
                borderTopRightRadius: width*0.01,
                borderTopLeftRadius: width*0.01,
                alignItems: 'center',
                marginTop: height * 0.02,
                paddingTop: height*0.088,
                height: height*1.015,
            },
            mapcontainer: {
                overflow: 'hidden',
                borderRadius: width * 0.05,
                marginTop: height * 0.05,
                marginBottom: height * 0.01,
            },
            mapa: {
                width: width*0.95,
                height: height*0.68,
            },
            destinos: {
                flexDirection: 'row',
            },
            destino: {
                backgroundColor: '#5D93D9',
                margin: height * 0.02,
                paddingHorizontal: width * 0.035,
                paddingVertical: height * 0.015,
                borderRadius: width * 0.05
            },
            textbutton:{
                color: 'white',
                fontSize: getFontSize(18),
            }
        })
    )

    return(
        <ScrollView style={styles.container}>
            <Header title="Mapa de"/>
            
            <Animatable.View 
                ref={viewRef}
                style={styles.seccionmapa}
            >
                <View style={styles.mapcontainer}>
                    <MapView 
                        provider={PROVIDER_GOOGLE}
                        onPress={() => setSelectionEstation(null)}
                        style={styles.mapa} 
                        initialRegion={{
                            latitude: origin.latitude,
                            longitude: origin.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                        showsUserLocation
                        showsMyLocationButton
                    >

                        
                        {
                            stations.map((station, index) => 
                            <Marker
                                onPress={() => setSelectionEstation(station)}
                                key={index}
                                coordinate={{latitude: station.latitude, longitude: station.longitude}} 
                                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}                           
                                >
                                <Image
                                    source={
                                        station.type === "origen"
                                        ? PinOrigen
                                        : station.type === "destino"
                                        ? PinDestino
                                        : PinEstacionUno
                                    }
                                    style={{ width: pinSize, height: pinSize, resizeMode: 'contain' }} // Ajusta el tamaño
                                    />
                                </Marker>)
                        }

                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={EXPO_PUBLIC_API_KEY_GM}
                            strokeColor="#5D93D9"
                            strokeWidth={4}
                        />

                    </MapView>
                    { selectedEstation && <Card estacion={selectedEstation}/> }
                </View>
                <View style={styles.destinos}>
                    <TouchableOpacity 
                        style={styles.destino}
                        onPress={() => {
                            setDestination({latitude: 13.622222851305803, longitude: -86.47608160981525 });
                        }}
                        >
                            <Text style={styles.textbutton} >Ocotal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.destino}
                        onPress={() => {setDestination({latitude: 13.092741, longitude: -86.351626 })}}
                    >
                            <Text style={styles.textbutton} >Esteli</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.destino}
                    onPress={() => {setDestination({latitude: 12.134100, longitude: -86.192963 })}}
                    >
                            <Text style={styles.textbutton} >Managua</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
            
        </ScrollView>
    );
}