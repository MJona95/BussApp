import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, PixelRatio, TouchableOpacity, Modal } from 'react-native';

import CardModalI from '../components/CardModalI';
import CardModalM from '../components/CardModalM';
import CardModalA from '../components/CardModalA';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Card({image, icon, title, texto, spam, iconf, modal}) {

    const { width, height } = useWindowDimensions();

    const getFontSize = (size) => {
        const scale = width / 375; // 375 es el ancho de referencia del iPhone 6/7/8
        const newSize = size * scale;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    };

    const styles = useMemo(
        () => StyleSheet.create({
            container: {
                width: width * 0.9,
                height: height * 0.2285,
            },
            card: {
                backgroundColor: 'white',
                borderWidth: width*0.0015,
                borderColor: '#ccc',
                flex: 1,
                flexDirection: 'row',
                marginTop: height * 0.0248,
                borderRadius: width * 0.06,
                overflow: 'hidden'
            },
            image: {
                width: width*0.40,
                aspectRatio: 1,
            },
            contenido: {
                flex: 1,
                marginVertical: height*0.003
            },
            headerCard: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                textAlign: 'center',
                marginVertical: height*0.002,
                marginHorizontal: width*0.015,
                fontWeight: 900,
                fontSize: getFontSize(14.2),
                color: '#666'
            },
            descripcion: {
                paddingHorizontal: width * 0.032,
                fontSize: getFontSize(12),
                fontWeight: 300
            },
            spam:{
                paddingVertical: height*0.008,
                paddingHorizontal: width*0.0187,
                fontSize: getFontSize(10.5),
                fontWeight: 800,
                color: '#9b9b9b',
            },
            footerCard: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width*0.025
            },
            contentmodal: {
                flex: 1,
                marginTop: height*0.11,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderTopRightRadius: width*0.085,
                borderTopLeftRadius: width*0.085,
            },
            cardmodal: {
                backgroundColor: 'white',
                width: Dimensions.get('screen').width*0.90,
                borderRadius: width*0.055,
                paddingVertical: height*0.013,
                paddingHorizontal: width*0.025
            },
            buttonModal: {
                width: width*0.85,
                marginTop: height*0.045,
                backgroundColor: "rgba(0,0,0,0.1)",
                color: "rgba(0,0,0,0.6)",
                textAlign: 'center',
                paddingVertical: height*0.015,
                borderRadius: width*0.028,
                fontWeight: 'bold',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: getFontSize(14)
            }
        })
    )

    const [isVisible, setIsVisible] = useState(false);
    
    const secondColor = "#CBBDF0"

  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=>setIsVisible(true)}>
        <View style={styles.card}>
        <Image
            style={styles.image}
            source={{uri: `https://drive.google.com/uc?export=view&id=${image}`}}
        />
        <View style={styles.contenido}>
            <View style={styles.headerCard}>
                <FontAwesome5 name={icon} size={width * 0.038} color={secondColor} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.descripcion}>{texto}</Text>
            <View style={styles.footerCard}>
                <FontAwesome5 name={iconf} size={width*0.026} color={secondColor} />
                <Text style={styles.spam}>{spam}</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
        <Modal visible={isVisible} animationType='slide' transparent>  
            <View style={styles.contentmodal}>
            
                <View style={styles.cardmodal}>
                    {
                    modal === 'modal1' ? <CardModalI /> : modal === 'modal2' ? <CardModalM /> : <CardModalA />
                    }  
                    <TouchableOpacity onPress={()=>setIsVisible(false)}>
                        <Text style={styles.buttonModal}>cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal> 
    </>
  )
}
