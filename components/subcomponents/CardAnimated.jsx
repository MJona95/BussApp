import { useState } from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import { View } from 'react-native-animatable';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function CardAnimated({ iconb, image, busnombre, tel, numasiento, iconhora, hora, coloricon, ruta }) {
    const [isVisible, setIsVisible] = useState(false);
    const [bgColor, setBgColor] = useState('#c2c2c2');

    const heightAnimated = useSharedValue(height * 0.10); // Altura inicial estado inicial
    const opacityAnimated = useSharedValue(0); // Opacidad inicial (oculto)

    // Definir animaciones correctamente
    const cardStyleAnimated = useAnimatedStyle(() => ({
        height: withTiming(heightAnimated.value, { duration: 500 }) 
    }));

    const infoAnimatedStyle = useAnimatedStyle(() => ({
        opacity: withTiming(opacityAnimated.value, { duration: 500 }) 
    }));

    const handleCallPress = async () => {
        await Linking.openURL(`tel:${tel}`);
    }

    const handleWhatsAppPress = async () => {
        await Linking.openURL(`https://wa.me/${tel}?text=Hola ¿qué tal?, quería hacer una consulta sobre boletos disponibles`);
    }

    const handleSmsPress = async () => {
        await Linking.openURL(`sms:${tel}?body=Hola ¿qué tal?, quería hacer una consulta sobre boletos disponibles`);
    }

    return (
        <>
        <Animated.View style={[styles.card, cardStyleAnimated]}>
            <View style={styles.infobus}>
                <View style={styles.preanimated}>
                    <FontAwesome5 style={styles.icon} name={iconb} size={width * 0.065} color='white' />
                    <Text style={styles.title}>{busnombre}</Text>
                </View>
                <Animated.View style={[styles.allinfo, infoAnimatedStyle]}>
                    <Text style={styles.numasiento}>La capacidad de la unidad es de: {numasiento} usuarios</Text>
                    <View style={styles.socialmedia}>
                    <Image 
                        source={{uri: `https://drive.google.com/uc?export=view&id=${image}`}}
                        style={styles.image}
                    />
                    <View style={styles.social}>
                        <TouchableOpacity style={styles.contact} onPress={() => {handleCallPress()}} >
                            <FontAwesome5 style={styles.iconc} name="phone" size={width * 0.025} color='#fff' />
                            <Text style={styles.telefono}>{tel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contact} onPress={() => {handleWhatsAppPress()}} >
                            <FontAwesome5 style={styles.iconc} name="whatsapp" size={width * 0.035} color='#fff' />
                            <Text style={styles.telefono}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contact} onPress={() => {handleCallPress()}} >
                            <FontAwesome5 style={styles.iconc} name="comments" size={width * 0.035} color='#fff' />
                            <Text style={styles.telefono}>Mensaje</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contact} onPress={() => {handleSmsPress()}} >
                            <FontAwesome5 style={styles.iconc} name={iconhora} size={width * 0.025} color='#fff' />
                            <Text style={styles.telefono}>{hora}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contact} onPress={() => {handleSmsPress()}} >
                            <FontAwesome5 style={styles.iconc} name='route' size={width * 0.025} color='#fff' />
                            <Text style={styles.telefono}>{ruta}</Text>
                        </TouchableOpacity>
                    
                    </View>
                    </View>
                </Animated.View>
            </View>
        </Animated.View>

        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={() => {
                const newHeight = isVisible ? height * 0.10 : height * 0.40;
                heightAnimated.value = newHeight;
                opacityAnimated.value = isVisible ? 0 : 1; // Oculta o muestra la info
                setBgColor(isVisible ? '#c2c2c2' : '#5D93D9');
                setIsVisible(!isVisible);
            }}
        >
            <Text style={styles.buttonText}>{isVisible ? 'Ver menos' : 'Ver más'}</Text>
        </TouchableOpacity>    
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.85,
        backgroundColor: '#CBBDF0',
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: width * 0.02
    },
    button: {
        backgroundColor: '#c2c2c2',
        borderWidth: width * 0.01,
        borderColor: 'white',
        padding: width * 0.010,
        marginTop: width * -0.08,
        borderRadius: width * 0.05,
        alignItems: 'center',
        width: width * 0.30,
        height: height * 0.05,
        marginLeft: width * 0.48,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.04,
        fontWeight: 'bold'
    },
    infobus: {
        flex: 1, 
    },
    preanimated:{
        flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        fontSize: width * 0.070,
        color: 'white',
        marginHorizontal: width * 0.020,
        fontWeight: 'bold'
    },
    allinfo: {
        flexDirection: 'column',
        marginVertical: width * 0.01,
        marginHorizontal: height * 0.014,
    },
    numasiento: {
        fontSize: width * 0.037,
        textAlign: 'center',
        fontWeight: 300
    },
    contact: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: width * 0.020,
        paddingHorizontal: width * 0.015,
        borderWidth: 0.18,
        borderRadius: width * 0.05
    },
    telefono: {
        marginHorizontal: width * 0.02,
        fontSize: width * 0.031,
        fontWeight: 300
    },
    image: {
        width: width * 0.43, 
        height: height * 0.26,
        borderRadius: width * 0.045,
        marginVertical: height * 0.025
    },
    iconc: {
        marginTop: height * 0.001
    },
    socialmedia: {
        flexDirection: 'row'
    },
    social: {
        justifyContent: 'center',
        marginLeft: width * 0.035
    }
});
