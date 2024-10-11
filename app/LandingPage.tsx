import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Navigate to home/dashboard after processing (you can change the route)
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/meditation-modified.png')} // The background image
      style={styles.backgroundImage}
    >
      {/* Blur effect */}
      <BlurView intensity={0} style={styles.blurContainer}>
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      <Text style={styles.text}>Please Wait ...</Text>
      <Text style={styles.subtext}>We are processing your data...</Text>
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
    ...StyleSheet.absoluteFillObject, // This makes the blur fill the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginTop:75,
    //marginBottom:10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 22,
    marginTop: 550,
    color: 'black',
  },
  subtext: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
  },
  loadingContainer: {
    top:540,   // Adjust this value for the loading spinner's position
    alignItems: 'center',
  },
});