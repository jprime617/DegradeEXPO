import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, Pressable, SafeAreaView } from 'react-native';
import { useContext } from 'react';
import { Link } from 'expo-router';
import Foto2 from '../../components/fotos2';
import { AppContext } from '../../scripts/AppContext';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 300,
        height: 200,
        marginVertical: 30
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'gray'
    }
});

const Data = [
    { id: 0, prod_nome: 'Coca Cola 500ml', prod_preco: 15.50, imagem: 'https://img.elo7.com.br/product/600x380/8CBE68/garrafinha-coca-cola-500ml-personalizada-coca-cola.jpg' },
    { id: 1, prod_nome: 'Coxinha de Frango', prod_preco: 5.00, imagem: 'https://blog.winesofargentina.com/wp-content/uploads/2021/09/Coxinhas_apertura.jpg' },
    { id: 2, prod_nome: 'Salsicha', prod_preco: 3.00, imagem: 'https://phygital-files.mercafacil.com/mercado-milenio/uploads/produto/salsicha_emp_frita_milenio_pc140gr_a335ca78-f4bb-4655-981e-a4c7b0a9957a.jpg' },
    { id: 3, prod_nome: 'Concord: Game of the year Edition - midia fisica', prod_preco: 1.50, imagem: 'https://www.adrenaline.com.br/wp-content/uploads/2024/06/concord-midia-fisica-pre-venda.jpg' },
    { id: 4, prod_nome: 'PlayStation 5 Pro', prod_preco: 6999.90, imagem: 'https://cdn.oantagonista.com/uploads/2024/09/PS5-Pro-veja-especificacoes-mudancas-e-preco-do-novo-console-da-Sony.webp' }

];


const Item = ({ title }) => (
    <View style={style.item}>
        <Text style={style.title}>{title}</Text>
    </View>
);

export default Ifome = () => {

    const { detail, setDetail } = useContext(AppContext)

    const Save = (item) => {
        setDetail((prevDetail) => [...prevDetail, item])
    }


    return (
        <SafeAreaView style={style.container}>
            <Link href='./carrinho' asChild>
                <Pressable style={style.botao}>
                    <Text>Carrinho</Text>
                </Pressable>
            </Link>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Foto2 estilo={style.imagem} link={item.imagem} texto={item.prod_nome} ano={`R$${item.prod_preco}`} funcao={() => Save(item)} />}
                
            />
            
            

        </SafeAreaView>
    )
}