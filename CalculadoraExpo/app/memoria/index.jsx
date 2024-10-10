import { View, Text, Pressable, StyleSheet, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';



const saveData = async (save, array) => {
    try {
        const newData = { ...array, id: array.length + 1}
        array.push(save)
        array.push(newData)
        
        console.log(array)
        
    } catch (error) {
        console.log(error)
    }
}

const getData = async () => {
    try{
        const value = await AsyncStorage.getItem('my-key')
        console.log(value)
        if (value !== null) {
            console.log('tem coisa ai')
        }
    } catch(error){
        console.log(error)
    }
}

const clearData = async () => {
    try{
        await AsyncStorage.removeItem('my-key')
    }catch(error){
        console.log(error)
    }
}

export default function Memoria() {
    const [info, setInfo] = useState('')
    const [data, setData] = useState({id: 0, titulo: '', data: '', onde: '', desc: '', uri: ''})
    const [storageData, setStorageData] = useState([])
    const massa = []


    return (
        <View style={styles.container}>
            <Text>Titulo</Text>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                onChangeText={(text) => setData({...data, titulo: text})}
                value={data.titulo}
            />
            <Text>data</Text>
            <TextInput
                style={styles.input}
                placeholder="data"
                onChangeText={(text) => setData({...data, data: text})}
                value={data.data}
            />
            <Text>onde</Text>
            <TextInput
                style={styles.input}
                placeholder="Onde"
                onChangeText={(text) => setData({...data, onde: text})}
                value={data.onde}
            />
            <Text>desc</Text>
            <TextInput
                style={styles.input}
                placeholder="desc"
                onChangeText={(text) => setData({...data, desc: text})}
                value={data.desc}
            />
            <Button title="Set" onPress={() => {saveData(data, massa);}}/>
            <Button title="Get" onPress={getData}/>
            <Button title='Clear' onPress={clearData}/>
            <Button title='mostra data' onPress={() => console.log(data)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'gray',
        height: 50,
        width: 'auto'
    }
})