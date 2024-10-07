import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, SafeAreaView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function Camero() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [facing, setFacing] = useState('back');
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);

    function trocaCamera() {
        setFacing(ladoCamera => (ladoCamera === 'back' ? 'front' : 'back'));
    }

    if (!permissao) {
        return <View />;
    }

    if (!permissao.granted) {
        return (
            <View style={style.container}>
                <Text style={style.textopermissao}>Você Precisa Permitir a Câmera</Text>
                <Button style={style.botao} title="Permitir" onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 1,
            base64: true
        });
        setFoto(fotoBase64);
        console.log(fotoBase64);
    };

    const salvarFoto = async () => {
        MediaLibrary,MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    return (
        <SafeAreaView style={style.container}>
            {foto ? (
                <View style={style.camera}>
                    <Image style={style.image} source={{uri: foto.uri}} resizeMode="contain" />
                    <Button title="Salvar" onPress={salvarFoto} />
                    <Button title="Descartar" onPress={() => setFoto(null)} />
                </View>
            ) : (
                <CameraView facing={facing} style={style.camera} ref={cameraRef}>
                    <SafeAreaView>
                        <Button title="Tirar Foto" onPress={tirarFoto} />
                        <Button title="Trocar Câmera" onPress={trocaCamera} />
                    </SafeAreaView>
                </CameraView>
            )}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    botao: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
    },
    textopermissao: {
        textAlign: 'center'
    },
    camera: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    image: {
        height: '100%',
        width: '100%'
    },
});
