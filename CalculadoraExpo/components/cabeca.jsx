import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, } from 'react-native';

const style = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center'
    },
    texto: {
        marginLeft: 30
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