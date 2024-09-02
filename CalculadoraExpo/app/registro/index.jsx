import React, {useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
    botao:{
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center'
    }
})

export default SignUp = () => {

    return(
        <View style={style.container}>
            <Text>Sign Up</Text>
            <TextInput placeholder="Nome"/>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Senha"/>
            <Pressable style={style.botao}><Text>Sign Up</Text></Pressable>
        </View>
    )
}