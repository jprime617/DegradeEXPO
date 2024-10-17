import { View, Text, StyleSheet, Button, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 20,
        width: 400,
        marginTop: 30,
        backgroundColor: '#F2E4E4'
    },
    texto: {
        fontWeight: 'bold'

    },
    espaco: {
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'gray'
        
    },
})

const Foto4 = ({ estilo, link, texto, ano, onde, desc }) => {


    return (
        <View style={style.container}>
            <View style={style.espaco}>

                <Pressable>
                    <Image
                        style={estilo}
                        resizeMode='contain'
                        source={{
                            uri: link
                        }}
                    />
                </Pressable>

                <Text style={style.texto}>
                    {texto}
                </Text>
                <Text style={style.texto}>
                    {ano}
                </Text>
                <Text style={style.texto}>
                    {onde}
                </Text>
                <Text style={style.texto}>
                    {desc}
                </Text>
            </View>
        </View>
    )
}

export default Foto4;