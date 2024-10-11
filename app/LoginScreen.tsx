import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router'; // Assuming you're still using this
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import * as Font from 'expo-font'; // You can keep this if you want to load fonts

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const router = useRouter();
  
  const [captionText, setCaptionText] = useState('');
  const fullCaption = "Rediscover Life, It Is Yours!";
  const typingSpeed = 150;

  // Load fonts and manage caption typing effect
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
        'DancingScript-Bold': require('../assets/fonts/DancingScript-Bold.ttf'),
        'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
      });
      setFontLoaded(true);
    }
    
    loadFonts();

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullCaption.length) {
        setCaptionText(prev => prev + fullCaption[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
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

  // Show loading indicator until font is loaded
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

            <Text style={styles.caption}>{captionText}</Text>

            <View style={styles.formContainer}>
              <Text style={styles.title}>Get Started</Text>
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
    resizeMode: 'center',
  },
  caption: {
    fontFamily: 'Roboto-Italic',
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 30,
    borderRadius: 25,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
  },
  infoText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  
},
button:{
backgroundColor:'#2ECC71',
paddingVertical :8 ,
paddingHorizontal :30 ,
borderRadius :15 ,
width:'80%'
},
buttonText:{
fontFamily:'Roboto-Bold', // Use Roboto Bold here
color:'#fff' ,
fontSize :18 ,
},
resendButton:{
marginTop :15 ,
},
resendText:{
fontFamily:'Roboto-Regular', // Use Roboto Regular here
color:'#2ECC71',
fontSize :16 ,
textDecorationLine :'underline' ,
},
loadingIndicator:{
   flexGrow :1 ,
   justifyContent :'center' ,
   alignItems :'center' ,
   height:'100%' 
},
});