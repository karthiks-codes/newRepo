
// import React, { useEffect, useRef } from 'react';
// import { View, StyleSheet, ImageBackground, SafeAreaView, Animated, ActivityIndicator } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { Provider as PaperProvider, Text } from 'react-native-paper';

// const SplashScreen: React.FC = () => {
//   const scaleAnim = useRef(new Animated.Value(0)).current; // For logo scale
//   const fadeAnim = useRef(new Animated.Value(0)).current; // For loading indicator fade-in

//   useEffect(() => {
//     // Start animations
//     Animated.parallel([
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [scaleAnim, fadeAnim]);

//   return (
//     <PaperProvider>
//       <ImageBackground 
//         source={require('../assets/images/meditation-woman.png')} 
//         style={styles.backgroundImage}
//         blurRadius={2}
//       >
//         <StatusBar style="dark" />
//         <SafeAreaView style={styles.container}>
//           {/* Logo at the top */}
//           <View style={styles.logoContainer}>
//             <Animated.Image 
//               source={require('../assets/images/lifeclinic-logo.png')} 
//               style={[styles.logo, { transform: [{ scale: scaleAnim }], opacity: 0.8 }]} // Adjust opacity here
//               resizeMode="contain" // Ensures the logo fits within its bounds
//             />
//             {/* <Text style={styles.title}>Welcome to Life Clinic</Text> */}
//           </View>

//           {/* Spacer to push loading indicator to the bottom */}
//           <View style={styles.spacer} />

//           {/* Loading Indicator at the center */}
//           <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
//             <ActivityIndicator animating={true} color="#6402B" size="large" />
//             <Text style={styles.loadingText}>Loading...</Text>
//           </Animated.View>
//         </SafeAreaView>
//       </ImageBackground>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-between', // Space between logo and loading indicator
//     alignItems: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 30, // Adjust this value to position the logo as desired
//   },
//   logo: {
//     width: 200, // Adjust width as needed
//     height: 100, // Adjust height as needed
//     backgroundColor: 'transparent', // Make sure any background is transparent
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff', // Change this to match your theme
//     marginTop: 10,
//   },
//   spacer: {
//     flexGrow: 1, // This spacer will push the loading indicator down
//   },
//   loadingContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 300, // Adjust this value to position the loading indicator as desired
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#fff', // Change this to match your theme
//   },
// });

// export default SplashScreen;

import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Animated, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, Text } from 'react-native-paper';

const SplashScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For loading indicator fade-in

  useEffect(() => {
    // Start animations
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <PaperProvider>
      <ImageBackground 
        source={require('../assets/images/meditation-woman.png')} 
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          {/* Logo at the top without animation */}
          <View style={styles.logoContainer}>
            <Animated.Image 
              source={require('../assets/images/lifeclinic-logo.png')} 
              style={[styles.logo, { opacity: 0.8 }]} // Adjust opacity here
              resizeMode="contain" // Ensures the logo fits within its bounds
            />
            {/* <Text style={styles.title}>Welcome to Life Clinic</Text> */}
          </View>

          {/* Spacer to push loading indicator to the bottom */}
          <View style={styles.spacer} />

          {/* Loading Indicator at the center */}
          <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
            <ActivityIndicator animating={true} color="#6402B" size="large" />
            <Text style={styles.loadingText}>Loading...</Text>
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
    backgroundColor: 'transparent', // Make sure any background is transparent
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Change this to match your theme
    marginTop: 10,
  },
  spacer: {
    flexGrow: 1, // This spacer will push the loading indicator down
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300, // Adjust this value to position the loading indicator as desired
  },
  loadingText: {
    marginTop: 10,
    color: '#fff', // Change this to match your theme
  },
});

export default SplashScreen;