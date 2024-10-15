import { View, Text, Pressable, StyleSheet, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-key', jsonValue);
        console.log('Data saved');
    } catch (e) {
        console.log(e);
    }
};

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? console.log(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
};

export default function Memoria() {
    const [formData, setFormData] = useState({
        titulo: '',
        ano: '',
        onde: '',
        desc: ''
    });

    // Função para atualizar o estado com base no campo que foi alterado
    const handleInputChange = (name, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Título'
                value={formData.titulo}
                onChangeText={(value) => handleInputChange('titulo', value)}
                style={styles.input}
            />
            <TextInput
                placeholder='Ano'
                value={formData.ano}
                onChangeText={(value) => handleInputChange('ano', value)}
                style={styles.input}
            />
            <TextInput
                placeholder='Onde'
                value={formData.onde}
                onChangeText={(value) => handleInputChange('onde', value)}
                style={styles.input}
            />
            <TextInput
                placeholder='Descrição'
                value={formData.desc}
                onChangeText={(value) => handleInputChange('desc', value)}
                style={styles.input}
            />
            <Button
                title='Salvar'
                onPress={() => storeData(formData)}
            />
            <Button
                title='Receba'
                onPress={() => getData()}
            />
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
