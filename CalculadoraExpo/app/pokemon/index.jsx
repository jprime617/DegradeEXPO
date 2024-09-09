import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemon: {

    },
    imagem: {
        height: '300px',
        width: '300px'
    }
})

export default Seletor = () => {

    const [pokemon, setPokemon] = useState('');
    const [lista_pokemons, setListaPokemons] = useState([])
    const [type, setType] = useState('normal')
    const [lista_types, setListaTypes] = useState([])
    const [sprite, setSprite] = useState('')

    useEffect(() => {
        try{
            fetch(`https://pokeapi.co/api/v2/type/`)
            .then(response => response.json())
            .then(dados => setListaTypes(dados.results))
        }catch(error){
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try{
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
            .then(response => response.json())
            .then(dados => setListaPokemons(dados.pokemon))
        }catch(error){
            console.log(error)
        }
    }, [type])

    useEffect(() => {
        try{
            fetch(pokemon)
            .then(response => response.json())
            .then(dados => setSprite(dados.sprites))
        }catch(error){
            console.log(error)
        }
    }, [pokemon])

    


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
                    <Picker.Item key={index} label={item.pokemon.name} value={item.pokemon.url}/> 
                ))}
            </Picker>

            <Picker
                selectedValue={type}
                style={style.pokemon}
                onValueChange={(itemValue) => setType(itemValue)} 
            >
                <Picker.Item label='Selecione um Tipo' /> 
                {lista_types.map((item, index) => ( 
                    <Picker.Item key={index} label={item.name} value={item.name}/>
                ))}
            </Picker> 
            <Button
                title='Confirma'
                onPress={() => {console.log(pokemon,type)}}
                />

            <Image
                style={style.imagem}
                source={{
                    uri: sprite.front_default
                }}
            />
            

        </View>
    )
}