import { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';

import CardModalI from '../components/CardModalI';
import CardModalM from '../components/CardModalM';
import CardModalA from '../components/CardModalA';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Card({image, icon, title, texto, spam, iconf, modal}) {

    const [isVisible, setIsVisible] = useState(false);
    
    const firstColor = "#5D93D9"
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
                <FontAwesome5 name={icon} size={15} color={secondColor} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.descripcion}>{texto}</Text>
            <View style={styles.footerCard}>
                <FontAwesome5 name={iconf} size={10} color={secondColor} />
                <Text style={styles.spam}>{spam}</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
    <Modal visible={isVisible} animationType='slide' transparent={true}>
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
        width: Dimensions.get('screen').width*0.9,
        height: Dimensions.get('screen').width*0.45,
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        marginTop: '8%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: 155,
        aspectRatio: 1,
    },
    contenido: {
        flex: 1,
        marginVertical: 5
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    descripcion: {
        paddingHorizontal: 15,
        fontSize: 12,
    },
    spam:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 10,
        fontWeight: 'bold',
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
        borderTopLeftRadius: 40
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
        fontWeight: 'bold'
    }
})