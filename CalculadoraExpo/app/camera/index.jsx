import { useState, useRef } from "react"
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native'
import { CameraView, useCameraPermissions, CameraType } from 'expo-camera'

export default function Camero() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [facing, setFacing] = useState('back')
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)


    function trocaCamera() {
        setFacing(current => (current === 'back' ? 'front' : 'back'))
    }

    if (!permissao) {
        return (
            <View></View>
        )
    }

    if (!permissao.granted) {
        return (
            <View style={style.container}>
                <Text style={style.textopermissao}>Você Precissa Permitir a Camera</Text>
                <Button style={style.botao} title="Permitir" onPress={pedirPermissao} />
            </View>
        )
    }
    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
        
    }


    return (
        <View style={style.container}>
            <CameraView facing={facing} style={style.camera} ref={cameraRef}>
                <View>
                    <Button style={style.botaoB} title="OI" onPress={tirarFoto}/>
                    <Button style={style.botaoB} title="TrocarCamera" onPress={trocaCamera}/>
                    
                </View>
            </CameraView>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',

    },
    textopermissao: {
        textAlign: 'center'
    },
    camera: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    botaoCamera: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    botaoB: {
        
    }


})