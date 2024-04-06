import * as React from 'react';
import { Text, View, Pressable,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// You can import from local files
import styles from './style';

export default function Sobre() {
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
    <View style={styles.container2}>
      <Text style={{fontFamily: 'Inter-Bold',color: '#c6d6d6',textAlign: 'center',marginTop: '30%',marginBottom: '10%',fontSize: 48,}}>Sobre</Text>
      <View>
        <Text style={styles.Text3}>
          Meu nome é Murillo Benício do 3º Info, e estou fazendo um Aplicativo
          para mostrar a hístoria da antiga Grécia. Estou usando o Github - Codespace para
          desenvolver o este aplicativo. E é a prova do professor Grazziane.
        </Text>
      </View>
    </View>
  );
}
