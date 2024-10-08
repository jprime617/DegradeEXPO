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
    }
})

const Foto = ({ estilo, link, texto, ano, data }) => {

    
    return (
        <View style={style.container}>
            <View style={style.espaco}>
                <Link href={{
                    pathname: `myapp/detalhe/${data.id}`,
                    params: { 'data': JSON.stringify(data) }
                }} asChild>
                    <Pressable>
                        <Image
                            style={estilo}
                            resizeMode='contain'
                            source={{
                                uri: link
                            }}
                        />
                    </Pressable>
                </Link>
                <Text style={style.texto}>
                    {texto}
                </Text>
                <Text style={style.texto}>
                    {ano}
                </Text>
            </View>
        </View>
    )
}

export default Foto;