
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Easing } from "react-native";

import * as Animatable from 'react-native-animatable';

import Card from "../components/PinCard";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { EXPO_PUBLIC_API_KEY_GM } from "@env"

import PinOrigen from "../img/PinOrigen.png";
import PinDestino from "../img/PinDestino.png"
import PinEstacionUno from "../img/PinEstacion1.png"

import Header from '../components/Header'

import { useState, useEffect, useRef, useCallback } from "react";
import { useFocusEffect } from "expo-router";

import { useFetchData } from "../hooks/useFetchData";

export default function Mapa(){

    const [stations, setStations] = useState([]);

    const data = useFetchData('stations')

    useEffect(() => {
        if (data && data.length > 0) {
          setStations(data); // Actualizamos el estado solo cuando los datos están disponibles
        }
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

    return(
        <ScrollView style={styles.container}>
            <Header title="Mapa de"/>
            
            <Animatable.View 
                ref={viewRef}
                style={styles.seccionmapa}
            >
                <View style={styles.mapcontainer}>
                    <MapView 
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
                                image={station.image == "Origen" ? PinOrigen : (station.image == "Destino" ?PinDestino : PinEstacionUno) }
                                coordinate={{latitude: station.latitude, longitude: station.longitude}} 
                                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}                           
                                >
                                
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
                    <TouchableOpacity style={styles.destino}
                        onPress={() => {setDestination({latitude: 13.622222851305803, longitude: -86.47608160981525 })}}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1
    },
    seccionmapa: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: 'center',
        marginTop: '10%',
        paddingTop: '16%',
        height: Dimensions.get('screen').height*0.90,
    },
    mapcontainer: {
        overflow: 'hidden',
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 5,
    },
    mapa: {
        width: Dimensions.get('screen').width*0.95,
        height: Dimensions.get('screen').height*0.61,
    },
    destinos: {
        flexDirection: 'row',
    },
    destino: {
        backgroundColor: '#5D93D9',
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 20
    },
    textbutton:{
        color: 'white',
        fontSize: 18,
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 10,
        backgroundColor: 'red'
    }
});