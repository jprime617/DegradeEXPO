import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 30,
        top: 750
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#F23535',
        width: 50,
        height: 50
    },
    botaoText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

const Voltar = ({ link,}) => {

    const texto = '<'
    return (
        <View style={style.container}>
            <Link href={link} style={style.botao}>
                <Text style={style.botaoText}>{texto}</Text>
            </Link>
        </View>
    )
}

export default Voltar;
