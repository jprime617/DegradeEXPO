import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, Header } from 'react-native';
import { Link } from 'expo-router';
import Cabeca from '../../components/cabeca';
import Botao from '../../components/botao';


const style = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100,
        marginVertical: 30

    },
    botao: {
        marginTop: 30,
    }
})

export default Myapp = () => {
    return(
        <View style={style.container}>
            <Cabeca
                titulo={'Sobre Mim'}
            />
            <Image 
                style={style.image}
                source={require('../../assets/images/justice.gif')}
            />
            <Text>Essa é a Minha Pagina Muito Foda</Text>
            <Botao style={style.botao}
                estilo={style.botao}
                titulo={'Veja Meus Filmes Favoritos'}
                onPress={() => {console.log('nossa')}}
            />
        </View>
    )
}