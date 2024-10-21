

// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Provider as PaperProvider } from 'react-native-paper';
// import * as Font from 'expo-font';

// export default function LoginScreen() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const router = useRouter();

//   const [captionText, setCaptionText] = useState<string>('');
//   const fullCaption = "Rediscover Life, It Is Yours!";
//   const typingSpeed = 150;

//   useEffect(() => {
//     const loadFonts = async () => {
//       await Font.loadAsync({
//         'CedarvilleCursive': require('../assets/fonts/CedarvilleCursive-Regular.ttf'),
//       });
//     };

//     loadFonts();

//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < fullCaption.length) {
//         setCaptionText(prev => prev + fullCaption[index]);
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, typingSpeed);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleSendOtp = () => {
//     setOtpSent(true);
//   };

//   const handleSubmit = () => {
//     router.push('/Landingscreen');
//   };

//   return (
//     <PaperProvider>
//       <ImageBackground
//         source={require('../assets/images/lgim.png')}
//         style={styles.backgroundImage}
//         blurRadius={4}
//       >
//         <SafeAreaView style={styles.container}>
//           <View style={styles.contentContainer}>
//             <View style={styles.logoAndCaptionContainer}>
//               <Image
//                 source={require('../assets/images/clilog.png')}
//                 style={styles.logo}
//               />
//               <Text style={[styles.caption, { fontFamily: 'PlayfairDairy' }]}>{captionText}</Text>
//             </View>

//             <View style={styles.formContainer}>
//               <Text style={styles.title}>Login</Text>
//               {!otpSent ? (
//                 <>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Mobile Number"
//                     keyboardType="phone-pad"
//                     value={phoneNumber}
//                     onChangeText={setPhoneNumber}
//                   />
//                   <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//                     <Text style={styles.buttonText}>Send OTP</Text>
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   {/* OTP Input and Verification Logic */}
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter OTP"
//                     keyboardType="number-pad"
//                   />
//                   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                     <Text style={styles.buttonText}>Verify OTP</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </View>
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
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   logoAndCaptionContainer: {
//     alignItems: 'center',
//     marginBottom: 5, // Adjust spacing between logo and form if needed
//   },
//   logo: {
//     width: 170,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 0, // Spacing between logo and caption
//   },
//   caption: {
//     fontSize: 24,
//     color: '#333',
//     textAlign: 'center',
//     paddingHorizontal: 10,
//     marginTop: 0,
//   },
//   formContainer: {
//     position: 'absolute', // Fix the position of the login block
//     bottom: 250,          // Adjust the position as per your need
//     alignSelf: 'center',  // Center the login block horizontally
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//     padding: 30,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 15,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#2ECC71',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 15,
//     width: '80%',
//     alignItems: 'center',
//     alignSelf : 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
    
//   },
// });

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();

  // Removed animation logic
  const captionText = "Rediscover Life, It Is Yours!";

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleSubmit = () => {
    router.push('/Landingscreen');
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../assets/images/lgim.png')}
        style={styles.backgroundImage}
        blurRadius={4}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.logoAndCaptionContainer}>
              <Image
                source={require('../assets/images/clilog.png')}
                style={styles.logo}
              />
              <Text style={[styles.caption, { fontFamily: 'PlayfairDairy' }]}>{captionText}</Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.title}>Login</Text>
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
                  {/* OTP Input and Verification Logic */}
                  <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    keyboardType="number-pad"
                  />
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
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
  },
  logoAndCaptionContainer: {
    alignItems: 'center',
    marginBottom: 5, // Adjust spacing between logo and form if needed
  },
  logo: {
    width: 170,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 0, // Spacing between logo and caption
  },
  caption: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 0,
  },
  formContainer: {
    position: 'absolute', // Fix the position of the login block
    bottom: 250,          // Adjust the position as per your need
    alignSelf: 'center',  // Center the login block horizontally
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 30,
    borderRadius: 25,
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    alignSelf : 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
