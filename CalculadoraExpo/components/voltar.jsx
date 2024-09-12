import { View, Text, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red'
        
    }
})

const Voltar = () => {
    return(
        <View style={style.container}>
            <Link href={'/'}>
                <Pressable style={style.botao}>
                    <Text>Voltar</Text>
                </Pressable>
            </Link>
        </View>
    )
}

export default Voltar