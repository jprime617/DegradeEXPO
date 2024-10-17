import { View, Text, Pressable, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Foto4 from '../../components/fotos4';


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function Memoria() {

    const [dataInfo, setDataInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('memoria');
                const jsonValueC = jsonValue ? JSON.parse(jsonValue) : null;
                setDataInfo(jsonValueC)
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, [])



    return (
        <View style={styles.container}>

            <FlatList
                data={dataInfo}
                renderItem={({ item }) => <Foto4 estilo={styles.imagem} link={item.foto} texto={item.titulo} ano={item.ano} onde={item.onde} desc={item.desc} />}
                keyExtractor={item => item.id}
            />
            <Link href={'/memoria/salvar'} asChild>
                <Pressable>
                    <Text style={styles.botao}>
                        Criar memoria
                    </Text>
                </Pressable>
            </Link>
            {/* <Pressable onPress={() => console.log(dataInfo)}>
                <Text>
                    Data
                </Text>
            </Pressable> */}




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 300,
        height: 200,
        marginVertical: 30
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    botao: {
        backgroundColor: 'blue',
        height: 50,
        width: 100
    }

})