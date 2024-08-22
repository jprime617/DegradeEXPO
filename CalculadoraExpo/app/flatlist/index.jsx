import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing, Pressable, Alert, FlatList } from 'react-native';


const Info = [
    {id: 0, nome: 'davy jones', trabalho: 'Jogar Dark Souls', completo: true,},
    {id: 1, nome: 'leon', trabalho: 'Fazer video do novo Flip 4', completo: false},
    {id: 2, nome: 'vitor gemaplys', trabalho: 'Fazer musica nova', completo: false},
    {id: 3, nome: 'xbox', trabalho: 'Fazer Jogo Bom de Verdade', completo: false,},
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
            <Text style={item.completo ? styles.complet : styles.incomplet}>{item.nome} Tarefa é: {item.trabalho}</Text>
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