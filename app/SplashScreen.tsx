import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ImageBackground, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

const SplashScreen: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current; // For logo scale
  const fadeAnim = useRef(new Animated.Value(0)).current; // For loading indicator fade-in

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, fadeAnim]);

  return (
    <PaperProvider>
      <ImageBackground 
        source={require('../assets/images/meditation.png')} 
        style={styles.backgroundImage}
        blurRadius={3.5}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Animated.Image 
              source={require('../assets/images/logo.png')} 
              style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} 
            />
          </View>
          <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
            <ActivityIndicator animating={true} color="#2ECC71" size="large" />
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </PaperProvider>
  );
};

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
    marginTop: 80, // Adjust this value to position the logo as desired
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50, // Adjust this value to position the loading indicator as desired
  },
});

export default SplashScreen;