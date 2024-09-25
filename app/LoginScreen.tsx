// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function LoginScreen() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const router = useRouter();

//   const handleSubmit = () => {
//     // Logic for login can be added here
//     router.push('/dashboard');
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/images/login-image.png')} // Set the same background as the SplashScreen
//       style={styles.backgroundImage}
//       blurRadius={3}
//     >
//       <SafeAreaView style={styles.container}>
        
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Get Started..</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//           <Button title="Send OTP" onPress={handleSubmit} color="#592941" />
//           <Button title="resend OTP" onPress={handleSubmit} color="#2E073F" />
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
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
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 50, // Position the logo above the form
//   },
//   logo: {
//     width: 200, // Adjust the size as needed
//     height: 100,
//     resizeMode: 'contain',
//   },
//   formContainer: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for form
//     padding: 20,
//     borderRadius: 10,
//     marginHorizontal: 20, // Add some horizontal margin to give space on the sides
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#000', // Title color for better contrast
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
// });



import React, { useState } from 'react';
import { View, TextInput, Button, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    // Logic for login can be added here
    router.push('/dashboard');
  };

  return (
    <ImageBackground
      source={require('../assets/images/login-image.png')} // Set the same background as the SplashScreen
      style={styles.backgroundImage}
      blurRadius={3}
    >
      <SafeAreaView style={styles.container}>
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>Get Started..</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          
          {/* Buttons arranged horizontally */}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Send OTP" onPress={handleSubmit} color="#592941" />
            </View>
            <View style={styles.button}>
              <Button title="Resend OTP" onPress={handleSubmit} color="#2E073F" />
            </View>
          </View>
          
        </View>
      </SafeAreaView>
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
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for form
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20, // Add some horizontal margin to give space on the sides
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Title color for better contrast
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Add space between the buttons
    width: '80%', // Ensure container is as wide as the input field
  },
  button: {
    flex: 1, // Each button takes equal space
    marginHorizontal: 5, // Add space between buttons
  },
});

