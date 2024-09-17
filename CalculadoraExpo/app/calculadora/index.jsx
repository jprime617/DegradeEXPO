import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Voltar from "../../components/voltar";

const App = () => {
    const [number, onChangeText] = React.useState('')
    const [number2, onChangeText2] = React.useState('')
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

    return(
        <View style={styles.container}>
            <Text>Calculadora</Text>
            <TextInput 
            onChangeText={onChangeText}
            value={number}
            placeholder="insira o numero aqui"
            keyboardType="numeric"
            />
            <TextInput 
            onChangeText={onChangeText2}
            value={number2}
            placeholder="insira o numero aqui 2"
            keyboardType="numeric"
            />

        <View style={buttons.container}>
            <Button
                title="+"
                onPress={() => soma()}
            />

            <Button
                title="-"
                onPress={() => sub()}
            />

            <Button
                title="X"
                onPress={() => x()}
            />

            <Button
                title="%"
                onPress={() => div()}
            />
            </View>

            <Text>o valor é {resultado}</Text>

            <Voltar
            link={'/'}
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

const buttons = StyleSheet.create({
    container: {
        width: 200,

    },
});

export default App