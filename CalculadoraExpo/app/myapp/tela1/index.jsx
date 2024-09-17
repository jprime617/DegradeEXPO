import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cabeca from '../../../components/cabeca';
import Foto from '../../../components/fotos';
import Voltar from '../../../components/voltar';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto: {
        width: 200,
        height: 200
    }
})

export default Tela01 = () => {
    return(
        <View style={ style.container}>
            <ScrollView>
            <Cabeca
                titulo={'Filmes favoritos'}
            />

            
            <Foto
                estilo={style.foto}
                link={'https://w7.pngwing.com/pngs/461/156/png-transparent-logo-the-lord-of-the-rings-drawing-lord-of-rings-text-logo-lord-of-the-rings-the-return-of-the-king.png'}
                texto={'Senhos dos aneis'}
            />
            <Foto
                estilo={style.foto}
                link={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibVaKlDmnuk3Qt9r6pwPBe2LWcseR0932j5q8wUqIldj5PLCFodIYmM8RyYoDrX-qxkQuuvUrdrmrm5_JV_bjw_zJ3ViFlmgjs0-SES9yxGiGjsz8xaio3PCaiwC82mdv2dYPENBOQWFg/s1600/homem+de+ferro.png'}
                texto={'Homem de Ferro'}/>
            </ScrollView>
            <Voltar
                link={'/myapp'}
            />
        </View>
    )
}

