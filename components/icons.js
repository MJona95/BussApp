import FontAwesome from '@expo/vector-icons/FontAwesome';

export const icons = {
    index: (props) => <FontAwesome name="home" size={25} {...props} />,
    mapa: (props) => <FontAwesome name="map" size={18} {...props} />,
    itinerario: (props) => <FontAwesome name="book" size={18} {...props} />,
    privado: (props) => <FontAwesome name="bus" size={18} {...props} />
}