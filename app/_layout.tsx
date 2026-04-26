import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<'index' | '(tabs)'>('index');
  const router = useRouter();

  useEffect(() => {
    const checkStatus = async () => {
      const hasSeen = await AsyncStorage.getItem('hasCompletedOnboarding');
      if (hasSeen === 'true') {
        setInitialRoute('(tabs)');
      }
      setIsReady(true);
    };
    checkStatus();
  }, []);

  if (!isReady) return null; // כאן אפשר לשים Splash Screen

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}