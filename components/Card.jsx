import { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';

import CardModalI from '../components/CardModalI';
import CardModalM from '../components/CardModalM';
import CardModalA from '../components/CardModalA';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window')

export default function Card({image, icon, title, texto, spam, iconf, modal}) {

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

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: width * 0.45,
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#ccc',
        flex: 1,
        flexDirection: 'row',
        marginTop: width * 0.05,
        borderRadius: width * 0.06,
        overflow: 'hidden'
    },
    image: {
        width: '44.5%',
        aspectRatio: 1,
    },
    contenido: {
        flex: 1,
        marginVertical: '0.5%'
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: '1%',
        marginHorizontal: '5%',
        fontWeight: 900,
        fontSize: width * 0.041,
        color: '#666'
    },
    descripcion: {
        paddingHorizontal: width * 0.032,
        fontSize: width * 0.032,
        fontWeight: 300
    },
    spam:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 10,
        fontWeight: 800,
        color: '#9b9b9b',
    },
    footerCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    contentmodal: {
        flex: 1,
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    cardmodal: {
        width: '90%',
        backgroundColor: 'white',
        width: Dimensions.get('screen').width*0.90,
        borderRadius: 20,
        padding: 10
    },
    buttonModal: {
        width: '100%',
        marginTop: 24,
        backgroundColor: "rgba(0,0,0,0.1)",
        textAlign: 'center',
        padding: 10,
        borderRadius: 12,
        fontWeight: 'bold',
        alignItems: 'center',
    justifyContent: 'center',
    }
})