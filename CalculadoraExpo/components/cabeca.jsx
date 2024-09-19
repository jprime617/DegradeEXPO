import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, } from 'react-native';

const style = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: '#F23535',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 30,
        position: 'absolute',
        top: 0,
        zIndex: 1
    },
    texto: {
        marginLeft: 30,
        color: '#F2E4E4',
        fontWeight: 'bold'
    }
})

const Cabeca = ({titulo}) => {
    return(
        <View style={style.container}>
            <Text style={style.texto}>{titulo}</Text>
        </View>
    )
}

export default Cabeca;