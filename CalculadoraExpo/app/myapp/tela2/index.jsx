import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import Cabeca from '../../../components/cabeca';
import Foto from '../../../components/fotos';
import { DataL } from '../../../components/data';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#261F1F'
    },
    foto: {
        width: 200,
        height: 300
    },
    espaco: {
        marginTop: 50
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})



const Item = ({ title }) => (
    <View style={style.item}>
        <Text style={style.title}>{title}</Text>
    </View>
);

export default Tela02 = () => {
    return (
        <View style={style.container}>
            <StatusBar hidden={true} />
            <Cabeca
                titulo={'Livros Favoritos'}
            />
            <View style={style.espaco}>

                <FlatList
                    data={DataL}
                    renderItem={({ item }) => <Foto estilo={style.foto} link={item.link} texto={item.titulo} ano={item.ano} data={item} />}
                    keyExtractor={item => item.id}
                />

            </View>
            {/* <Voltar
                    link={'/myapp'}
                /> */}
        </View>
    )
}

