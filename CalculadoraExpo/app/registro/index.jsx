import React, {useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet, SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const style = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",
        height: '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 0,
        padding: 0        
    },
    botao:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: "georgia"
    },
    titlePlus: {
        fontSize: 50,
        marginBottom: 20,
        fontFamily: "georgia"
    },
    input: {
        height: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#333',
        fontSize: 16,
    },
    textoC: {
        alignItems: "flex-start"
    },
    textoB: {
        fontFamily: "georgia"
    },
    caixa1: {
        width: "50%",
    }
})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [pressed, setPressed] = useState('')


    const registrarUsuario = async function () {
        if (!nome || !email || !senha){
            console.log("os parametros não foram todos preenchidos")
            alert("os parametros não foram todos preenchidos")
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: nome, email: email, password: senha})
        })
        if(!resposta){
            console.log('erro')
            alert('erro')
        }else if(resposta.status == 200){
            console.log('user criado com sucesso')
            alert('user criado com sucesso')
        }else {
            console.log('occorreu um erro')
            alert('ocorreu um erro')
        }
    }

    return(
        <SafeAreaView style={style.container}>
            
            <View style={style.caixa1}>
                <View>
                    <Text style={style.title}>Sign Up</Text>
                    <Text>Nome</Text>
                    <TextInput 
                        style={style.input}
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                         
                    />
                    <Text>Email</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Text>Senha</Text>
                    <TextInput
                        style={style.input} 
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        secureTextEntry={true}
                    />
                    <View>
                        <Pressable 
                            onPress={registrarUsuario}
                            onPressIn={() => setPressed(true)}
                            onPressOut={() => setPressed(false)}
                            style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'white' : 'gray',
                            },
                            style.botao,
      ]}
                        ><Text style={style.textoB}>Cadastrar</Text></Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}