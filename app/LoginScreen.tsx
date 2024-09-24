import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    // Logic for login can be added here
    // For now, just navigate to the dashboard or home screen
    router.push('/dashboard');
  };

  return (
    <ImageBackground
      source={require('../assets/images/login-image.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* <Image source={require('../assets/images/lifeclinic-logo.png')} style={styles.logo} /> */}
        <Text style={styles.title}>Get Started..</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button title="send OTP" onPress={handleSubmit} color="#28a745" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  button:{
    alignItems : 'center',
    },
    
});