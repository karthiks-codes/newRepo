import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import SplashScreen from './SplashScreen';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/LoginScreen'); // Redirect to login after 2.5 seconds
    }, 2500);
  }, []);

  return <SplashScreen />;
}
