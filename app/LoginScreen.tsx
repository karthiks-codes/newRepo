import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import * as Font from 'expo-font';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      });
      setFontLoaded(true);
    }
    
    loadFonts();
  }, []);

  const handleSendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
    }, 2000);
  };

  const handleReSendOtp = () => {
    console.log('Resending OTP');
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/LandingPage');
      setLoading(false);
    }, 2000);
  };

  if (!fontLoaded) {
    return <ActivityIndicator size="large" color="#2ECC71" style={styles.loadingIndicator} />;
  }

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../assets/images/bgImage.png')}
        style={styles.backgroundImage}
        blurRadius={4}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
              />
            </View>

            <Text style={styles.caption}>Rediscover Life, It Is Yours!</Text>

            <View style={styles.formContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>Get Started...</Text>
                {!otpSent ? (
                  <>
                    <TextInput
                      style={styles.input}
                      mode="outlined"
                      placeholder="Mobile Number"
                      keyboardType="phone-pad"
                      value={phoneNumber}
                      onChangeText={setPhoneNumber}
                      outlineColor="#ddd"
                      activeOutlineColor="#2ECC71"
                    />
                    <Button
                      mode="contained"
                      onPress={handleSendOtp}
                      style={styles.button}
                      contentStyle={styles.buttonContent}
                      labelStyle={styles.buttonText}
                      loading={loading}
                      disabled={loading}
                    >
                      Send OTP
                    </Button>
                  </>
                ) : (
                  <>
                    <Text style={styles.infoText}>Enter the OTP sent to {phoneNumber}</Text>
                    <TextInput
                      style={styles.input}
                      mode="outlined"
                      placeholder="OTP"
                      keyboardType="number-pad"
                      value={otp}
                      onChangeText={setOtp}
                      outlineColor="#ddd"
                      activeOutlineColor="#2ECC71"
                    />
                    <Button
                      mode="contained"
                      onPress={handleSubmit}
                      style={styles.button}
                      contentStyle={styles.buttonContent}
                      labelStyle={styles.buttonText}
                      loading={loading}
                      disabled={loading}
                    >
                      Verify OTP
                    </Button>
                    <Button
                      mode="text"
                      onPress={handleReSendOtp}
                      style={styles.resendButton}
                      labelStyle={styles.resendText}
                    >
                      Resend OTP
                    </Button>
                  </>
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </PaperProvider>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 35,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  innerContainer: {
    padding: 25,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    marginBottom: 25,
    color: '#333',
    textAlign: 'left',
    width: '100%',
  },
  infoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'left',
  },
  input: {
    height: 55,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2ECC71',
    borderRadius: 25,
    width: '100%',
    marginTop: 5,
  },
  buttonContent: {
    height: 45,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 15,
    alignSelf: 'center',
  },
  resendText: {
    fontFamily: 'Roboto-Regular',
    color: '#2ECC71',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});