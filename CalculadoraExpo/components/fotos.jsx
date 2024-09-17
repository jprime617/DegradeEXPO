import { View, Text, StyleSheet, Button, TextInput, Pressable, Image } from 'react-native';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 20,
        width: 400,
        marginTop: 30
    },
    texto: {
        marginVertical: 30
    }
})

const Foto = ({estilo, link, texto}) => {
    return(
        <View style={style.container}>
            <Image
                style={estilo}
                source={{
                    uri: link
                }}
            />
            <Text style={style.texto}>
                {texto}
            </Text>

        </View>
    )
}

export default Foto;