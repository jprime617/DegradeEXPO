import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Cabeca from '../../../components/cabeca';
import Foto from '../../../components/fotos';
import Voltar from '../../../components/voltar';

const style = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#261F1F',
    },
    foto: {
        width: 300,
        height: 200,
        marginVertical: 30
    },
    espaco: {
        marginTop: 50
    }
})

export default Tela01 = () => {
    return(
        <View style={ style.container}>
            <StatusBar hidden={true} />
            <Cabeca
                    titulo={'Filmes favoritos'}
                />
            <View style={style.espaco}>
                <ScrollView>
                

            
                <Foto
                    estilo={style.foto}
                    link={'https://musicart.xboxlive.com/7/308f5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'}
                    texto={'O Senhor dos Anéis: A Sociedade do Anel'}
                    ano={'2001'}
                />
                <Foto
                    estilo={style.foto}
                    link={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibVaKlDmnuk3Qt9r6pwPBe2LWcseR0932j5q8wUqIldj5PLCFodIYmM8RyYoDrX-qxkQuuvUrdrmrm5_JV_bjw_zJ3ViFlmgjs0-SES9yxGiGjsz8xaio3PCaiwC82mdv2dYPENBOQWFg/s1600/homem+de+ferro.png'}
                    texto={'Homem de Ferro'}
                    ano={'2008'}
                />

                <Foto
                    estilo={style.foto}
                    link={'https://upload.wikimedia.org/wikipedia/pt/e/e0/Godzilla_Minus_One_Poster.jpeg'}
                    texto={'Godzilla Minus One'}
                    ano={'2023'}
                />
                    
                </ScrollView>
                
            </View>
            {/* <Voltar
                    link={'/myapp'}
                /> */}
        </View>
    )
}

