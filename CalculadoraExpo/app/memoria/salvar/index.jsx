import { View, Text, Pressable, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';


const arrayInfo = []

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('memoria', jsonValue);
        console.log('Tá salvo essa bosta');
    } catch (error) {
        console.log(error);
    }
};

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        console.log('Todo o armazenamento foi limpo!');
    } catch (error) {
        console.log(error);
    }
};






export default function Salvar() {
    const [image, setImage] = useState('');
    const [formData, setFormData] = useState({
        titulo: '',
        ano: '',
        onde: '',
        desc: '',
        foto: ''
    });

    const Salva = (info) => {
        if (!info.titulo || !info.ano || !info.onde || !info.desc || !info.foto) {
            console.log('ta faltando coisa ai irmao')
            return;
        } else {
            arrayInfo.push(info)
            console.log(arrayInfo)
            storeData(arrayInfo)
            setFormData('')
            setImage(null)
        }
    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setFormData({ ...formData, foto: result.assets[0].uri })
        }
    };



    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Título'
                value={formData.titulo}
                onChangeText={nossa => setFormData({ ...formData, titulo: nossa })}
                style={styles.input}
                require
            />
            <TextInput
                placeholder='Ano'
                value={formData.ano}
                onChangeText={nossa => setFormData({ ...formData, ano: nossa })}
                style={styles.input}
                require
            />
            <TextInput
                placeholder='Onde'
                value={formData.onde}
                onChangeText={nossa => setFormData({ ...formData, onde: nossa })}
                style={styles.input}
                require
            />
            <TextInput
                placeholder='Descrição'
                value={formData.desc}
                onChangeText={nossa => setFormData({ ...formData, desc: nossa })}
                style={styles.input}
                require
            />
            <Button title="Selecione Uma Foto" onPress={pickImage} />
            <Button
                title='Salvar'
                onPress={() => Salva(formData)}
            />
            <Link href={'/memoria'} asChild>
                <Pressable>
                    <Text>
                        Voltar
                    </Text>
                </Pressable>
            </Link>
            
            {/* <Button title='Apagar' onPress={clearStorage} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        backgroundColor: 'gray',
        height: 50,
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    }
});
