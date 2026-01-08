import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      setDisplayName(name);
      Alert.alert('Welcome!', `Hello, ${name}!`);
    } else {
      Alert.alert('Error', 'Please enter your name');
      setDisplayName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First Lab Jan 6!</Text>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>What's Your Name?</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      <Button title="Submit" onPress={handleSubmit} />
      
      {displayName ? (
        <View style={styles.greetingContainer}>
        <Text style={styles.displayText}>
          Hello, {displayName}!
        </Text>
        <Image
            source={require('./assets/leaf.png')}
            style={styles.image}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20205fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  greetingContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  displayText: {
    marginTop: 30,
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});