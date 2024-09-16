import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

const Botao = ({ titulo, onPress, estilo }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={estilo}>
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)} // Define pressed como true quando o botão é pressionado
      onPressOut={() => setPressed(false)} // Define pressed como false quando o botão é solto
      style={[styles.button, { backgroundColor: pressed ? '#9bade0' : '#383FDB' }]} // Altera a cor baseado no estado
    >
      <Text style={styles.text}>{titulo}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Botao;
