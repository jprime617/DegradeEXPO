import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Voltar from "../../components/voltar";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemon: {

    }
})

export default Seletor = () => {

    const [pokemon, setPokemon] = useState('');

    const lista_pokemon = [
        { nome: 'Rayquaza', value: 'rayquaza'},
        { nome: 'Necrozma', value: 'necrozma'},
        { nome: 'Yvetal', value: 'yvetal'},
        { nome: 'Eternatus', value: 'eternatus'}
    ];


    return(
        <View style={style.container}>
            <Text> Selecione um Pokemon</Text>
            <Picker
                selectedValue={pokemon} //'pokemon' é o valor que está selecionado nesse momento
                style={style.pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)} //define o 'setPokemon' como 'itemValue' no caso o pokemon selecionado 
            >
                <Picker.Item label='Selecione um Pokémon' /> {/*Define que dentro do Picker teremos a placeHolder 'Selecione um Pokémon */}
                {lista_pokemon.map((item, index) => ( 
                    <Picker.Item key={index} label={item.nome} value={item.value}/> 
                ))}
            </Picker> {/*faz uma lista que passa por todo conteudo do 'lista_pokemon' o 'item' é a informação de dentro da lista e o 'index' a posição dentro do array*/}

            <Voltar
            link={'/'}
            />

        </View>
    )
}