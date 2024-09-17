import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Cabeca from '../../components/cabeca';
import BotaoLink from '../../components/botaoLink';
import Voltar from '../../components/voltar';


const style = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#261F1F',
        
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100,
        marginVertical: 30,
        resizeMode: 'cover'

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
        backgroundColor: '#F2E4E4'
    },
    borda: {
        borderRadius: 50
    }
})

export default Myapp = () => {

    const [gif, setGif] = useState(null)

    const gifs = [
        require('../../assets/gifs/Azazel.gif'),
        require('../../assets/gifs/Cerberus.gif'),
        require('../../assets/gifs/Judgement.gif'),
        require('../../assets/gifs/Justice.gif'),
        require('../../assets/gifs/Lucifer.gif'),
        require('../../assets/gifs/Malina.gif'),
        require('../../assets/gifs/Modeus.gif'),
        require('../../assets/gifs/Pandemonica.gif'),
        require('../../assets/gifs/Zdrada.gif')
    ]

    const gifRandom = () => {
        const randomIndex = Math.floor(Math.random() * gifs.length);
        return gifs[randomIndex];
    };

    useEffect(() => {
        setGif(gifRandom())
    }, [])


    return(
        <View style={style.container}>
            <StatusBar hidden={true} />
            <Cabeca
                titulo={'Sobre Mim'}
            />

            <View style={style.caixa}>
                <View style={style.borda}>
                    <Image 
                        style={style.image}
                        source={gif}
                        resizeMode='contain'
                    />
                </View>
                <Text>Essa é a Minha Pagina</Text>
            

            
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
            
            
        </View>
    )
}