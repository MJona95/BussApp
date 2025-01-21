import FontAwesome from '@expo/vector-icons/FontAwesome';

export const icons = {
    index: (props) => <FontAwesome name="home" size={25} {...props} />,
    mapa: (props) => <FontAwesome name="map" size={18} {...props} />,
    intinerario: (props) => <FontAwesome name="book" size={18} {...props} />,
    nosotros: (props) => <FontAwesome name="users" size={18} {...props} />
}