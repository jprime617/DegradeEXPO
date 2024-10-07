import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, SafeAreaView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';

export default function Camero() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [facing, setFacing] = useState('back');
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [linkEscaneado, setLinkescaneado] = useState(false)

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

    const LinkFoiEscaneado = (codeL) => {
        if (!linkEscaneado) {
            Linking.openURL(codeL.data)
            setLinkescaneado(true)
            setTimeout(() => setLinkescaneado(false),5000)
            
        }
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
                <CameraView barcodeScannerSettings={{
                    barcodeTypes: ['qr']
                }} onBarcodeScanned={(code) => LinkFoiEscaneado(code)} facing={facing} style={style.camera} ref={cameraRef}>
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo suave
    },
    textopermissao: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        color: '#333',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    image: {
        height: '70%', // Ajuste a altura da imagem
        width: '100%',
        borderRadius: 10, // Bordas arredondadas
        marginBottom: 10, // Espaço abaixo da imagem
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo semitransparente
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
    },
});
