import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

const BotaoLink = ({ titulo, onPress, estilo, caminho }) => {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    setPressed(false);
    if (onPress) onPress();
    router.push(caminho);
  };

  return (
    <View style={estilo}>
      <Pressable
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={handlePress}
        style={[styles.button, { backgroundColor: pressed ? '#733434' : '#F23535' }]}
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

export default BotaoLink;
