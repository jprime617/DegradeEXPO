import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import App from '../app/calculadora2';

const Botao = ({ titulo, onPress }) => {
    
  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.button]}
    >
      <Text style={[styles.text]}>{titulo}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BDCDF7',
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