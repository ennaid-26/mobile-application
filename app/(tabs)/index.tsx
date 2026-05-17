import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.screen}>
      
      <Image 
        source={require('../../assets/images/Dianne PHOTO.jpg')} 
        style={styles.photo} 
      />

      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.input}
        value={name}
      />

      <Text style={styles.greeting}>
        {name === '' ? 'Hello!' : `Hello, ${name}! 👋`}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '80%',          
    maxWidth: 400,         
    paddingHorizontal: 15, 
    paddingVertical: 10,   
    marginBottom: 20,
    borderRadius: 20,      
    backgroundColor: '#ffffff',
    textAlign: 'center' 
  },
  greeting: {
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  }
});