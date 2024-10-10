
import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ImageBackground, SafeAreaView, Animated, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

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
        source={require('../assets/images/meditation-woman.png')} 
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          {/* Logo at the top */}
          <View style={styles.logoContainer}>
            <Animated.Image 
              source={require('../assets/images/lifeclinic-logo.png')} 
              style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} 
            />
          </View>

          {/* Spacer to push loading indicator to the bottom */}
          <View style={styles.spacer} />

          {/* Loading Indicator at the center */}
          <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
            <ActivityIndicator animating={true} color="#6402B" size="large" />
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
    justifyContent: 'space-between', // Space between logo and loading indicator
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30, // Adjust this value to position the logo as desired
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    resizeMode: 'contain',
  },
  spacer: {
    flexGrow: 1, // This spacer will push the loading indicator down
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300, // Adjust this value to position the loading indicator as desired
  },
});

export default SplashScreen;