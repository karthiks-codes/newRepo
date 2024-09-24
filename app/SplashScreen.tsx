import React from 'react';
import { View, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/meditation-woman.png')} 
      style={styles.backgroundImage}
    >
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/lifeclinic-logo.png')} 
            style={styles.logo} 
          />
        </View>
      </SafeAreaView>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50, // Adjust this value to position the logo as desired
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    resizeMode: 'contain',
  },
});