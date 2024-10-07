import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();
  
  // State for animated letters
  const [captionText, setCaptionText] = useState<string>('');
  const fullCaption = "Rediscover Life, It Is Yours!"; // Full caption text
  const typingSpeed = 150; // Speed of typing effect in milliseconds

  useEffect(() => {
    // Typing effect for the caption
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullCaption.length) {
        setCaptionText(prev => prev + fullCaption[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleSendOtp = () => {
    // Logic for sending OTP
    setOtpSent(true);
  };

  const handleReSendOtp = () => {
    // Logic for resending OTP
    console.log('Resending OTP');
  };

  const handleSubmit = () => {
    // Logic for verifying OTP and logging in
    router.push('/LandingPage');
  };

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

            {/* Typing Caption */}
            <Text style={styles.caption}>{captionText}</Text>

            <View style={styles.formContainer}>
              <Text style={styles.title}>Get Started</Text>
              {!otpSent ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.infoText}>Enter the OTP sent to {phoneNumber}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="OTP"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                  />
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.resendButton} onPress={handleReSendOtp}>
                    <Text style={styles.resendText}>Resend OTP</Text>
                  </TouchableOpacity>
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
    paddingBottom: 80, // Adjusted padding to create more space between logo and form
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adjust this value to increase/decrease space below the logo
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'center',
  },
  caption: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40, // Increased space between caption and form container
   },
   formContainer:{
     alignItems:'center' ,
     backgroundColor:'rgba(255 ,255 ,255 ,0.9)' ,
     padding :30 ,
     borderRadius :25 ,
     marginHorizontal :20 ,
     shadowColor:"#000" ,
     shadowOffset:{
       width :0 ,
       height :2 ,
     },
     shadowOpacity :0.25 ,
     shadowRadius :3.84 ,
     elevation :5 ,
   },
   title:{
     fontSize :28 ,
     fontWeight :'bold' ,
     marginBottom :20 ,
     color:'#333' ,
   },
   infoText:{
     fontSize :14 ,
     color:'#666' ,
     marginBottom :15 ,
     textAlign :'center' ,
   },
   input:{
     height :50 ,
     width :'100%' ,
     borderColor :'#ddd' ,
     borderWidth :1 ,
     borderRadius :15 ,
     paddingHorizontal :15 ,
     marginBottom :15 ,
     fontSize :16 ,
     backgroundColor :'#fff' ,
   },
   button:{
     backgroundColor:'#2ECC71' ,
     paddingVertical :12 ,
     paddingHorizontal :30 ,
     borderRadius :15 ,
     width :'80%' ,
     alignItems :'center' ,
   },
   buttonText:{
     color:'#fff' ,
     fontSize :18 ,
     fontWeight :'bold' ,
   },
   resendButton:{
     marginTop :15 ,
   },
   resendText:{
     color:'#2ECC71' ,
     fontSize :16 ,
     textDecorationLine :'underline' ,
   },
});