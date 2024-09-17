import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, Header } from 'react-native';
import Cabeca from '../../components/cabeca';
import BotaoLink from '../../components/botaoLink';
import Voltar from '../../components/voltar';


const style = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100,
        marginVertical: 30

    },
    botao: {
        marginTop: 30,
    },
    caixa: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 20,
        width: 300,
        height: 400,
        backgroundColor: 'gray'
    }
})

export default Myapp = () => {
    return(
        <View style={style.container}>
            <Cabeca
                titulo={'Sobre Mim'}
            />
            <View style={style.caixa}>
                <Image 
                    style={style.image}
                    source={require('../../assets/images/justice.gif')}
                />
                <Text>Essa é a Minha Pagina Muito Foda</Text>
            

            
                <BotaoLink style={style.botao}
                    estilo={style.botao}
                    titulo={'Veja Meus Filmes Favoritos'}
                    onPress={() => {console.log('Filmes/tela01')}}
                    caminho={'/myapp/tela1'}
                />

                <BotaoLink style={style.botao}
                    estilo={style.botao}
                    titulo={'Veja Meus Livros Favoritos'}
                    onPress={() => {console.log('Livros/tela02')}}
                    caminho={'/myapp/tela2'}
                />

            
            </View>
            
            <Voltar
                link={'/'}
                />
            
        </View>
    )
}