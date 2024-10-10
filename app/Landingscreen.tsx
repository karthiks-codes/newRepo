
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function Landingscreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to home/dashboard after processing (you can change the route)
      router.push('/_sitemap'); // Change '/Home' to your desired route
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [router]);

  return (
    <ImageBackground
      source={require('../assets/images/lgim.png')} // Replace with your background image path
      style={styles.backgroundImage}
      blurRadius={5} // Adjust blur radius as needed
    >
      <View style={styles.container}>
        <Image source={require('../assets/images/clilog.png')} style={styles.logo} />

        {/* Loading Animation */}
        <ActivityIndicator size="large" color="#06402B" style={styles.loadingIndicator} />

        <Text style={styles.text}>Your dashboard is on its way,</Text>
        <Text style={styles.subtext}>just a moment more!</Text>
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
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 400, // Space between logo and loading indicator
  },
  text: {
    fontSize: 23,
    color: 'black', // Change color for better visibility against the background
  },
  subtext: {
    marginTop: 10,
    fontSize: 23,
    color: 'black',
  },
  loadingIndicator: {
    marginBottom: 20, // Space between loading indicator and text
  },
});