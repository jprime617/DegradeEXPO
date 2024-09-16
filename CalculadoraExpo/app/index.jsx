import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, } from 'react-native';
import { Link } from 'expo-router';


const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'gray'
        
    },
})

export default app = () => {


    const Data = [
        {id: 0, titulo: 'Calculadora', link: '/calculadora'},
        {id: 1, titulo: 'Calculadora2', link: '/calculadora2'},
        {id: 2, titulo: 'Flatlist', link: '/flatlist'},
        {id: 3, titulo: 'Pokémon', link: '/pokemon'},
        {id: 4, titulo: 'Registro', link: '/registro'},
        {id: 5, titulo: 'Splash-Screen', link: '/splash-screen'},
        {id: 6, titulo: 'Yu-Go-Jo', link: '/yu-go-jo'},
        {id: 7, titulo: 'Sobre-Mim', link: '/myapp'},
        
    ]

    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    return(
        <View style={style.container}>
            <FlatList
                data={Data}
                renderItem={({item}) => <Link href={item.link} asChild><Pressable style={style.botao}><Text>{item.titulo}</Text></Pressable></Link>}
                keyExtractor={item => item.id}
            
            />

            
        </View>
    )
}