import { View, Text, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default function CardModalAbaut({ title, paragraph, link }) {
  return (
    <View style={styles.infoseccion}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{paragraph}</Text>
        <Text>{link}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoseccion: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.003,
    marginHorizontal: width * 0.01,
    borderRadius: width * 0.05,
    padding: width * 0.01,
  }, 
  title: {
    fontSize: width * 0.05,
    color: '#5D93D9',
    fontWeight: 'bold',
    marginVertical: width * 0.02
  },
  paragraph: {
    color: '#777',
    fontSize: width * 0.033,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
