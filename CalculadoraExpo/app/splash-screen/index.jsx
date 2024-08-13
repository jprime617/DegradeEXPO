import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {


    return(
    <View style={styles.container}>
        <LinearGradient
            colors={['#292929','#000000', '#292928',]}
            style={styles.container}
            locations={[0.1,0.5,1]}
        >

        <StatusBar hidden={true} />
        
      
        <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/pt/0/0c/The_Lord_of_the_Rings_logo.png',
        }}  />
        </LinearGradient>
    </View>
    
    
    )};

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    logo: {
      width: 400,
      height: 100
    },
  });
  
  export default App;