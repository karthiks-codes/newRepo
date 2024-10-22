



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Provider as PaperProvider } from 'react-native-paper';

// export default function LoginScreen() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const router = useRouter();

//   const handleSendOtp = () => {
//     console.log(`Sending OTP to ${phoneNumber}`);
//     setOtpSent(true);
//   };

//   const handleReSendOtp = () => {
//     console.log('Resending OTP');
//   };

//   const handleSubmit = () => {
//     console.log(`Verifying OTP: ${otp}`);
//     router.push('/LandingPage');
//   };

//   return (
//     <PaperProvider>
//       <ImageBackground
//         source={require('../assets/images/splash screen.png')}
//         style={styles.backgroundImage}
//         blurRadius={10}
//       >
//         <View style={styles.whiteTint} />

//         <SafeAreaView style={styles.container}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={styles.keyboardContainer}
//           >
//             <View style={styles.contentContainer}>
//               <View style={styles.logoContainer}>
//                 <Image
//                   source={require('../assets/images/logo.png')}
//                   style={styles.logo}
//                 />
//               </View>

//               <Text style={styles.caption}>Rediscover Life, It Is Yours!</Text>

//               <View style={styles.formContainer}>
//                 <Text style={styles.title}>LOGIN</Text>
//                 {!otpSent ? (
//                   <>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Enter Mobile Number"
//                       keyboardType="phone-pad"
//                       value={phoneNumber}
//                       onChangeText={setPhoneNumber}
//                       placeholderTextColor="#888"
//                     />
//                     <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//                       <Text style={styles.buttonText}>Send OTP</Text>
//                     </TouchableOpacity>
//                   </>
//                 ) : (
//                   <>
//                     <Text style={styles.infoText}>Enter OTP</Text>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Enter OTP"
//                       keyboardType="number-pad"
//                       value={otp}
//                       onChangeText={setOtp}
//                       placeholderTextColor="#888"
//                     />
//                     <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                       <Text style={styles.buttonText}>Verify OTP</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.resendButton} onPress={handleReSendOtp}>
//                       <Text style={styles.resendText}>Resend OTP</Text>
//                     </TouchableOpacity>
//                   </>
//                 )}
//               </View>
//             </View>
//           </KeyboardAvoidingView>

//           {/* Trademark Notice */}
//           <View style={styles.trademarkContainer}>
//             <Text style={styles.trademarkText}>    ©2024 LifeClinic</Text>
//             <Text style={styles.trademarkText}>   all rights reserved</Text> 
//           </View>

//         </SafeAreaView>
//       </ImageBackground>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   whiteTint: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   keyboardContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     width: '100%',
//     paddingVertical: 20,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     marginBottom:1,
//     resizeMode: 'contain',
//   },
//   caption: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 50,
//   },
//   formContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     paddingHorizontal: 70,
//     paddingVertical: 10,
//     marginBottom: 20,
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     width: '90%',
//    },
//    title:{
//      fontSize :22,
//      fontWeight:'bold',
//      color:'#333', 
//      textAlign:'center', 
//      marginBottom :30,
//    },
//    input:{
//      height :50,
//      width:'100%',
//      borderColor:'#ddd',
//      borderWidth :1,
//      borderRadius :10,
//      paddingHorizontal :45,
//      marginBottom :20,
//      fontSize :16,
//      backgroundColor :'#fff',
//      color :'#333',
//    },
//    button:{
//      backgroundColor:'#1DB954',
//      paddingVertical :14,
//      paddingHorizontal :30,
//      borderRadius :20,
//      width :'80%',
//      alignItems :'center',
//      alignSelf :'center',
//    },
//    buttonText:{
//      color:'#fff',
//      fontSize :18,
//      fontWeight :'600',
//    },
//    infoText:{
//      fontSize :14,
//      color:'#333', 
//      marginBottom :20,
//      textAlign :'center', 
//    },
//    resendButton:{
//      marginTop :15,
//      alignItems :'center', 
//    },
//    resendText:{
//      color:'#1DB954', 
//      fontSize :16, 
//      textDecorationLine :'underline', 
//    },
//    trademarkContainer:{
//      position: 'absolute', // Position it at the bottom
//      bottom: 10, // Adjust this value as needed
//      left: '50%', // Center horizontally
//      transform: [{ translateX: -50 }], // Center adjustment
//    },
//    trademarkText:{
//      color:'#333', // Change the text color as needed
//      fontSize :14, // Adjust font size if necessary
//      textAlign:'justify', // Center the text
//    }
// });







// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Provider as PaperProvider } from 'react-native-paper';

// export default function LoginScreen() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const router = useRouter();

//   const handleSendOtp = () => {
//     console.log(`Sending OTP to ${phoneNumber}`);
//     setOtpSent(true);
//   };

//   const handleReSendOtp = () => {
//     console.log('Resending OTP');
//   };

//   const handleSubmit = () => {
//     console.log(`Verifying OTP: ${otp}`);
//     router.push('/LandingPage');
//   };

//   return (
//     <PaperProvider>
//       <ImageBackground
//         source={require('../assets/images/splash screen.png')}
//         style={styles.backgroundImage}
//         blurRadius={10}
//       >
//         <View style={styles.whiteTint} />

//         <SafeAreaView style={styles.container}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={styles.keyboardContainer}
//           >
//             {/* Logo and Caption Container */}
//             <View style={styles.topContainer}>
//               <View style={styles.logoContainer}>
//                 <Image
//                   source={require('../assets/images/logo.png')}
//                   style={styles.logo}
//                 />
//               </View>
//               <Text style={styles.caption}>Rediscover Life, It Is Yours!</Text>
//             </View>

//             {/* Form Container */}
//             <View style={styles.formContainer}>
//               <Text style={styles.title}>LOGIN</Text>
//               {!otpSent ? (
//                 <>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter Mobile Number"
//                     keyboardType="phone-pad"
//                     value={phoneNumber}
//                     onChangeText={setPhoneNumber}
//                     placeholderTextColor="#888"
//                   />
//                   <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//                     <Text style={styles.buttonText}>Send OTP</Text>
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   <Text style={styles.infoText}>Enter OTP</Text>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter OTP"
//                     keyboardType="number-pad"
//                     value={otp}
//                     onChangeText={setOtp}
//                     placeholderTextColor="#888"
//                   />
//                   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                     <Text style={styles.buttonText}>Verify OTP</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.resendButton} onPress={handleReSendOtp}>
//                     <Text style={styles.resendText}>Resend OTP</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </View>
//           </KeyboardAvoidingView>

//           {/* Trademark Notice */}
//           <View style={styles.trademarkContainer}>
//             <Text style={styles.trademarkText}>©2024 LifeClinic</Text>
//             <Text style={styles.trademarkText}>all rights reserved</Text>
//           </View>
//         </SafeAreaView>
//       </ImageBackground>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   whiteTint: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   keyboardContainer: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//   },
//   topContainer: {
//     alignItems: 'center',
//     marginBottom: 30, // Space between caption and form
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 55,
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//   },
//   caption: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 50,
//   },
//   formContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     paddingHorizontal: 30,
//     paddingVertical: 20,
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     width: '90%',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#1DB954',
//     paddingVertical: 14,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//     width: '80%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   resendButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   resendText: {
//     color: '#1DB954',
//     fontSize: 16,
//     textDecorationLine: 'underline',
//   },
//   trademarkContainer: {
//     position: 'absolute',
//     bottom: 10,
//     alignItems: 'center',
//   },
//   trademarkText: {
//     color: '#333',
//     fontSize: 14,
//   },
// });


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';

const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();

  const handleSendOtp = () => {
    console.log(`Sending OTP to ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleReSendOtp = () => {
    console.log('Resending OTP');
  };

  const handleSubmit = () => {
    console.log(`Verifying OTP: ${otp}`);
    router.push('/LandingPage');
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../assets/images/splash screen.png')}
        style={styles.backgroundImage}
        blurRadius={10}
      >
        <View style={styles.whiteTint} />

        <SafeAreaView style={styles.container}>
          {/* Logo and Caption Container */}
          <View style={styles.topContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.caption}>Rediscover Life, It Is Yours!</Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardContainer}
          >
            {/* Form Container */}
            <View style={styles.formContainer}>
              <Text style={styles.title}>LOGIN</Text>
              {!otpSent ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholderTextColor="#888"
                  />
                  <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                    placeholderTextColor="#888"
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
          </KeyboardAvoidingView>

          {/* Trademark Notice */}
          <View style={styles.trademarkContainer}>
            <Text style={styles.trademarkText}>©2024 LifeClinic, all rights reserved</Text>
            {/* <Text style={styles.trademarkText}></Text> */}

            <Text style={styles.trademarkText}>Cookies     Terms       Privacy Policy</Text>
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
  whiteTint: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.01, // 5% from the top of the screen
    marginBottom: height * 0.02, // Added margin bottom to reduce space
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  caption: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  keyboardContainer: {
    width: '100%',
    justifyContent: 'flex-start', // Changed from 'center' to 'flex-start'
    alignItems: 'center',
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: height * 0.1, // Added margin top to bring it closer to the caption
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resendButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  resendText: {
    color: '#1DB954',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  trademarkContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  trademarkText: {
    color: '#333',
    fontSize: 14,
  },
});