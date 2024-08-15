import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing, Pressable, Alert, FlatList } from 'react-native';


const Info = [
    {id: 0, nome: 'davy jones', trabalho: 'coisas de pro player', completo: true,},
    {id: 1, nome: 'leon da central', trabalho: 'pegar no meu pau', completo: false},
    {id: 2, nome: 'vitor gemaplys', trabalho: 'fenda da sunga filha puta', completo: false},
    {id: 3, nome: 'xbox milgrau', trabalho: 'racismo', completo: false,},
];




const App = () => {
    const [tarefa, setTarefa] = useState(Info);

    const fazer = function(id){
        setTarefa(tarefa.map(item =>
            item.id === id ? { ...item, completo: !item.completo} : item));
        
    }
    

    return <View style={styles.container}>
        <Text>Nossa Testes</Text>
        <FlatList
        data={tarefa}
        renderItem={({item}) => <View>
            <Text style={item.completo ? styles.complet : styles.incomplet}>O {item.nome} trabalha com {item.trabalho}</Text>
            <Button title="feito" onPress={() => fazer(item.id)}></Button>
        
        </View>}
        keyExtractor={item => item.id}
        >

        </FlatList>
    </View>
} 

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    complet:{
        textDecorationLine: 'line-through'
    },
    incomplet:{
        textDecorationLine: 'none'
    }
})

export default App