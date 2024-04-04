import * as React from 'react';
import { Text, View, Pressable,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// You can import from local files
import styles from './style';

export default function Sobre() {
  return (
    <View style={styles.container2}>
      <Text style={styles.title2}>Sobre</Text>
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
