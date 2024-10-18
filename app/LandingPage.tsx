import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font'; // Import expo-font

// Load fonts function
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });
};

export default function LandingPage() {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadFontsAsync();

    const timer = setTimeout(() => {
      // Navigate to home/dashboard after processing (you can change the route)
      // router.push('/home');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [router]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />; // Show loader while fonts are loading
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <BlurView intensity={50} style={styles.absolute} tint="light" />
        <View style={styles.content}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={[styles.slogan, { fontFamily: 'Roboto-Regular' }]}>Rediscover Life, It Is Yours!</Text>
          <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
          <Text style={[styles.text, { fontFamily: 'Roboto-Regular' }]}>Please Wait ...</Text>
          <Text style={[styles.subtext, { fontFamily: 'Roboto-Regular' }]}>We are processing your data...</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Light green background color
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  loader: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
  },
});