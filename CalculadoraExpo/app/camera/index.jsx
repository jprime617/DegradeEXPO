import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Camero() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [facing, setFacing] = useState('back');
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [linkEscaneado, setLinkescaneado] = useState(false)
    const [fotoTirada, setFotoTirada] = useState(false)

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
            setFotoTirada(true)
            const fotoBase64 = await cameraRef.current?.takePictureAsync({
                quality: 1,
                base64: true
            });
            setFoto(fotoBase64);
            setTimeout(() => setFotoTirada(false), 1000)
    };

    const salvarFoto = async () => {
        MediaLibrary, MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    const LinkFoiEscaneado = (codeL) => {
        if (!linkEscaneado) {
            Linking.openURL(codeL.data)
            setLinkescaneado(true)
            setTimeout(() => setLinkescaneado(false), 5000)

        }
    }

    return (
        <SafeAreaView style={style.container}>
            {foto ? (
                <View style={style.camera}>
                    <Image style={style.image} source={{ uri: foto.uri }} resizeMode="contain" />
                    <SafeAreaView style={style.buttonContainer}>
                        <Pressable style={style.botaoA} onPress={salvarFoto}><MaterialIcons name="save-alt" size={60} color="black" /></Pressable>
                        <Pressable style={style.botaoO} onPress={() => setFoto(null)}><FontAwesome name="remove" size={50} color="black" /></Pressable>
                    </SafeAreaView>
                </View>
            ) : (
                <CameraView barcodeScannerSettings={{
                    barcodeTypes: ['qr']
                }} onBarcodeScanned={(code) => LinkFoiEscaneado(code)} facing={facing} style={style.camera} ref={cameraRef}>
                    <SafeAreaView style={style.buttonContainer}>
                        <Pressable style={style.botaoS} onPress={() => (!fotoTirada) ? tirarFoto() : console.log('calma la paizao')}><Ionicons name="camera" size={60} color="black" /></Pressable>
                        <Pressable style={style.botaoR} onPress={trocaCamera}><FontAwesome6 name="camera-rotate" size={40} color="black" /></Pressable>

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
        backgroundColor: '#f0f0f0',
    },
    textopermissao: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        color: '#333',
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: '70%',
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 20,
    },
    botaoS: {
        backgroundColor: 'none',
        position: 'absolute',
        top: 380
    },
    botaoR: {
        backgroundColor: 'none',
        position: 'absolute',
        top: 393,
        left: 50
    },
    botaoA: {
        backgroundColor: 'none',
        position: 'absolute',
        top: 50,
    },
    botaoO: {
        backgroundColor: 'none',
        position: 'absolute',
        top: 55,
        left: 40
    },

});
