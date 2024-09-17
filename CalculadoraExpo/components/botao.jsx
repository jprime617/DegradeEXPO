import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

const Botao = ({ titulo, onPress, estilo}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={estilo}>
        <Pressable
          onPress={onPress}
          onPressIn={() => setPressed(true)} 
          onPressOut={() => setPressed(false)} 
          style={[styles.button, { backgroundColor: pressed ? '#9bade0' : '#383FDB' }]}
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
