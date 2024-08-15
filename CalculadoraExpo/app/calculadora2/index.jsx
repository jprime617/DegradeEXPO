import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Botao from "../../components/botao";

const App = () => {
    const [number, onChangeText] = React.useState('')
    const [resultado, setResultado] = useState('')

    const soma = function () {
        setResultado(Number(number) + Number(number2))
        return number
    }
    const sub = function () {
        setResultado(Number(number) - Number(number2))
        return number
    }
    const x = function () {
        setResultado(Number(number) * Number(number2))
        return number
    }
    const div = function () {
        setResultado(Number(number) / Number(number2))
        return number
    }
    const alerta = function () {
        return Alert.alert('Nossa')
    }

    const addB = function (num) {
        console.log(num)
        onChangeText(number + num)
        // return Alert.alert(num)
    }

    return(
        <View style={styles.container}>
            <Text>{number}</Text>
            <Botao
                titulo={"Nossa"}
                onPress={alerta}
            />
            <Botao
                titulo={"1"}
                onPress={() => addB(1)}
            />
            <Botao
                titulo={"2"}
                onPress={() => addB(2)}
            />
            <Botao
                titulo={"3"}
                onPress={() => addB(3)}
            />
            <Botao
                titulo={"4"}
                onPress={() => addB(4)}
            />
            <Botao
                titulo={"5"}
                onPress={() => addB(5)}
            />
            <Botao
                titulo={"6"}
                onPress={() => addB(6)}
            />
            <Botao
                titulo={"7"}
                onPress={() => addB(7)}
            />
            <Botao
                titulo={"8"}
                onPress={() => addB(8)}
            />
            <Botao
                titulo={"9"}
                onPress={() => addB(9)}
            />
            


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default App