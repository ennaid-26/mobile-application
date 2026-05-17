// I updated the profile card to include an interactive name input, greeting, and a dynamic counter. 05/17/2026
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const message =
    count > 0
      ? `${name ? `${name}, ` : ''}you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image 
        source={require('../../assets/images/Dianne PHOTO.jpg')} 
        style={styles.image} 
      />

      {/* Static Info for your Profile Card */}
      <Text style={styles.profileBio}>MMA student • CS126</Text>

      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.text}>
        {name === '' ? 'Please enter your name' : `Hello, ${name}! 👋`}
      </Text>

      {/* Dynamic Counter Message */}
      <Text style={styles.text}>{message}</Text>
    
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  profileBio: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    gap: 8, 
  },
});