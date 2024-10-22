// import React from 'react';
// import { View, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function SplashScreen() {
//   return (
//     <ImageBackground 
//       source={require('../assets/images/demo.png')} 
//       style={styles.backgroundImage}
//     >
//       <StatusBar style="dark" />
//       <SafeAreaView style={styles.container}>
//         <View style={styles.logoContainer}>
//           <Image 
//             source={require('../assets/images/logo.png')} 
//             style={styles.logo} 
//           />
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
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 370, // Adjust this value to position the logo as desired
//   },
//   logo: {
//     width: 200, // Adjust width as needed
//     height: 100, // Adjust height as needed
//     resizeMode: 'contain',
//   },
// });



// import React, { useEffect, useRef } from 'react';
// import { View, Image, StyleSheet, ImageBackground, SafeAreaView, Animated } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

// const SplashScreen: React.FC = () => {
// const scaleAnim = useRef(new Animated.Value(0)).current; // For logo scale
// const fadeAnim = useRef(new Animated.Value(0)).current; // For loading indicator fade-in

// useEffect(() => {
//      // Start animations
//     Animated.parallel([
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//     }),
//       Animated.timing(fadeAnim, {
//                 toValue: 1,
//          duration: 2000,
//          useNativeDriver: true,
//       }),
//     ]).start();
//    }, [scaleAnim, fadeAnim]);

//    return (
//      <PaperProvider>
//       <ImageBackground 
//          source={require('../assets/images/demo.png')} 
//          style={styles.backgroundImage}
//         blurRadius={2}
//       >
//         <StatusBar style="dark" />
//         <SafeAreaView style={styles.container}>
//           {/* Logo at the top */}
//           <View style={styles.logoContainer}>
//             <Animated.Image 
//               source={require('../assets/images/logo.png')} 
//               style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} 
//              />
//            </View>
//           {/* Spacer to push loading indicator to the bottom */}
//            <View style={styles.spacer} />

//            {/* Loading Indicator at the bottom */}
//            <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
//             <View style={styles.loadingIndicator}>
//               <ActivityIndicator animating={true} color="#2ECC71" size="large" />
//             </View>
//            </Animated.View>
//         </SafeAreaView>    
//            </ImageBackground>
//      </PaperProvider>
//    );
//  };

//  const styles = StyleSheet.create({
//   backgroundImage: {
//      flex: 1,
//      width: '100%',
//     height: '100%',
//   },
//   container: {
//          flex: 1,
//     justifyContent: 'space-between', // Space between logo and loading indicator
//     alignItems: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 30, // Adjust this value to position the logo as desired
//    },
//    logo: {
//      width: 200, // Adjust width as needed
//      height: 100, // Adjust height as needed
//    resizeMode: 'contain',
//   },
//   spacer: {
//      flexGrow: 1, // This spacer will push the loading indicator down
//    },
//    loadingContainer: {
//      justifyContent: 'center',
//      alignItems: 'center',
//      marginBottom: 300, // Adjust this value to position the loading indicator as desired
//    },
//    loadingIndicator: {
//      //backgroundColor: '#ffffff', // Background color for the loading indicator
//      borderRadius: 50, // Make it circular
//      //padding: 20, // Padding around the indicator
//      elevation: 5, // Add shadow effect on Android
//      shadowColor: '#000', // Shadow color for iOS
//      shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
//      shadowOpacity: 0.3, // Shadow opacity for iOS
//      shadowRadius: 4, // Shadow radius for iOS
//    },
//  });

//  export default SplashScreen;






import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ImageBackground, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

const SplashScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For loading indicator fade-in

  useEffect(() => {
    // Start animation only for the loading indicator
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <PaperProvider>
      <ImageBackground 
        source={require('../assets/images/demo.png')} 
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.container}>
          {/* Logo at the top (no animation) */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/logo.png')} 
              style={styles.logo} 
            />
          </View>
          
          {/* Spacer to push loading indicator to the bottom */}
          <View style={styles.spacer} />

          {/* Loading Indicator at the bottom */}
          <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
            <View style={styles.loadingIndicator}>
              <ActivityIndicator animating={true} color="#2ECC71" size="large" />
            </View>
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
  loadingIndicator: {
    borderRadius: 50, // Make it circular
    elevation: 5, // Add shadow effect on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
});

export default SplashScreen;