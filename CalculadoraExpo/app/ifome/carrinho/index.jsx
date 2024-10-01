import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../../scripts/AppContext';
import Foto3 from '../../../components/fotos3';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imagem: {
        width: 300,
        height: 200,
        marginVertical: 30
    },
    totalText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
});

const PrecoT = (itens) => {
    return itens.reduce((total, item) => total + item.prod_preco, 0).toFixed(2);
};

export default Carrinho = () => {
    const { detail } = useContext(AppContext);


    const [total, setTotal] = useState(0);


    useEffect(() => {
        const totalPreco = PrecoT(detail);
        setTotal(totalPreco);
    }, [detail]);

    if (detail.length === 0) {
        return (
            <View style={style.container}>
                <Text>O carrinho está vazio</Text>
            </View>
        );
    }

    return (
        <View style={style.container}>
            <Text style={style.totalText}>
                Total: R${total}
            </Text>
            <FlatList
                data={detail}
                renderItem={({ item }) => (
                    <Foto3
                        estilo={style.imagem}
                        link={item.imagem}
                        texto={item.prod_nome}
                        ano={`R$${item.prod_preco}`}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    );
};
