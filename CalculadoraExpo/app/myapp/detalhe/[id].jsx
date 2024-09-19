import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import Cabeca from '../../../components/cabeca';

const style = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#261F1F',
    },
    image: {
        height: 500,
        width: 400,
        marginTop: 30
    },
    caixa: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 20,
        backgroundColor: '#F2E4E4',
        marginTop: 60
    },
    texto: {
        marginHorizontal: 5,
        marginVertical: 30,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        width: 300
    },
    reto: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DetalheScreen = () => {

    const { data } = useLocalSearchParams();
    const nossa = JSON.parse(data)
    console.log(nossa)
    return (
        <View style={style.container}>
            <StatusBar hidden={true} />
            <Cabeca
                titulo={nossa.titulo}
            />
            <View style={style.caixa}>
                <ScrollView>
                    <View style={ style.reto}>
                        <Image
                            style={style.image}
                            resizeMode='contain'
                            source={{
                                uri: nossa.link
                            }}
                        />
                        <Text style={style.texto}>
                            {nossa.descricao}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
