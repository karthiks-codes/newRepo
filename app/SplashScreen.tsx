import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

const SplashScreen: React.FC = () => {
  return (
    <PaperProvider>
      <ImageBackground
        source={require('../assets/images/meditation.png')}
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo} // Keeping the original logo size
            />
          </View>
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color="#2ECC71" size="large" />
          </View>
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
    justifyContent: 'center', // Centering content vertically
    alignItems: 'center', // Centering content horizontally
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80, // Keeping the same margin for logo position
  },
  logo: {
    width: 200, // Original width of the logo
    height: 100, // Original height of the logo
    resizeMode: 'contain', // Ensures the logo scales properly without being cut off
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50, // Keeping the same margin for loading indicator
  },
});

export default SplashScreen;