import * as React from 'react';
import { useCallback } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// You can import from local files
import styles from './style';

export default function Inicio({ navigation }) {

SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Inter-Bold',color: '#c6d6d6',textAlign: 'center',marginTop: '30%',marginBottom: '10%',fontSize: 48,}}>Grécia</Text>
      <View>
        <Image/>
      </View>
    </View>
  );
}

