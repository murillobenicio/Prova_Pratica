import * as React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// You can import from local files
import styles from './style';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grécia</Text>
      <View>
        <Image/>
      </View>
    </View>
  );
}
