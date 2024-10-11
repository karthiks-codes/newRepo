import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur'; // Required for the blur effect

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to check if OTP is sent
  const router = useRouter();

  const handleSendOtp = () => {
    // Logic to send OTP to the phone number
    setIsOtpSent(true);
  };

  const handleSubmit = () => {
    // Logic for OTP verification
    if (otp) {
      // Logic to verify the OTP can go here
      // For example, after successful verification:
      router.push('/LandingPage'); // Navigate to landing page after OTP verification
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/meditation-modified.png')} 
      style={styles.backgroundImage}
      
    >
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <BlurView intensity={0}  style={styles.blurContainer}>
        <View style={styles.container}>
          
          <Text style={styles.title}>WELCOME</Text>
          
          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          {/* Conditional rendering of OTP field */}
          {isOtpSent && (
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
            />
          )}

          {/* Send OTP Button */}
          {!isOtpSent ? (
            <Button title="Send OTP" onPress={handleSendOtp} color="#28a745" />
          ) : (
            <Button title="Submit" onPress={handleSubmit} color="#28a745" />
          )}

          
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject, // Fills the entire screen
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
  container: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adds a white background to the content box
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom:550,
    resizeMode: 'contain',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'green',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  
  
});
