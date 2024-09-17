import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

const BotaoLink = ({ titulo, onPress, estilo, caminho }) => {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    setPressed(false); // Reset the pressed state
    if (onPress) onPress();
    router.push(caminho); // Navigate to the specified path
  };

  return (
    <View style={estilo}>
      <Pressable
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={handlePress}
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

export default BotaoLink;
