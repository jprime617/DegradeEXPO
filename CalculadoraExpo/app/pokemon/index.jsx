import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

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
    const [lista_pokemons, setListaPokemons] = useState([])

    useEffect(() => {
        try{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(dados => setListaPokemons(dados.results))
        }catch(error){
            console.log(error)
        }
    }, [])

    


    return(
        <View style={style.container}>
            <Text> Selecione um Pokemon</Text>
            <Picker
                selectedValue={pokemon}
                style={style.pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)} 
            >
                <Picker.Item label='Selecione um Pokémon' /> 
                {lista_pokemons.map((item, index) => ( 
                    <Picker.Item key={index} label={item.name} value={item.url}/> 
                ))}
            </Picker> 

        </View>
    )
}