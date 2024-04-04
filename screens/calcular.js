import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Switch,
  Platform,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export default function Calcular({ navigation }) {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [delta, setDelta] = useState('');
  const [resultado, setResultado] = useState(false);
  const [X1, setX1] = useState(0);
  const [X2, setX2] = useState(0);

  const calcularX1 = () => {
    let intA = parseFloat(A, 10);
    let intB = parseFloat(B, 10);
    let intC = parseFloat(C, 10);
    let intDelta = Math.sqrt(intB * intB - 4 * intA * intC);
    setResultado(true);
    Keyboard.dismiss();
    alert(
      'X1 = ' +
        (-intB + intDelta) / (2 * intA) +
        ', X2 = ' +
        (-intB - intDelta ) / (2 * intA)
    );
  };
  const calcularX2 = () => {
    let intA = parseFloat(A, 10);
    let intB = parseFloat(B, 10);
    let intC = parseFloat(C, 10);
    setResultado(true);
    Keyboard.dismiss();
  };
  const limparDados = () => {
    setA('');
    setB('');
    setC('');
    setResultado(false);
    setX1(0);
    setX2(0);
    Keyboard.dismiss();
  };
   const entradaAleatoria = () => {
    let numeroAleatorio1 = Math.random() * 100
    let numeroAleatorio2 = Math.random() * 100
    let numeroAleatorio3 = Math.random() * 100
    setA(parseInt(numeroAleatorio1,10).toString())
    setB(parseInt(numeroAleatorio2,10).toString())
    setC(parseInt(numeroAleatorio3,10).toString())
    Keyboard.dismiss()
  };
  useEffect(() => {
    if (!resultado) return;
    const interval = setTimeout(() => {
      setResultado(false);
    }, 7000);
  }, [resultado]);
  return (
    <KeyboardAvoidingView
      style={styles.container3}
      behavoir={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Text style={styles.title3}>Calcular Fórmula de Bhaskara</Text>
        <View style={styles.viewInput}>
          <TextInput
            value={A}
            onChangeText={setA}
            keyboardType="number-pad"
            style={styles.input}
            returnKeyboardLabel="Done"
            returnkeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Digite A"
            placeholderTextColor="#c6d6d6"
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            value={B}
            onChangeText={setB}
            keyboardType="number-pad"
            style={styles.input}
            returnKeyboardLabel="Done"
            returnkeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Digite B"
            placeholderTextColor="#c6d6d6"
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            value={C}
            onChangeText={setC}
            keyboardType="number-pad"
            style={styles.input}
            returnKeyboardLabel="Done"
            returnkeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Digite C"
            placeholderTextColor="#c6d6d6"
          />
        </View>
        <View>
          <Pressable
            onPress={() => {
              calcularX1();
            }}
            style={styles.botaoCalcular2}>
            <Text style={styles.textoBotao2}>Calcular X</Text>
          </Pressable>
          <Pressable onPress={limparDados} style={styles.botaoCalcular2}>
            <Text style={styles.textoBotao2}>Limpar Conteúdo</Text>
          </Pressable>
          <Pressable onPress={entradaAleatoria} style={styles.botaoCalcular2}>
      <Text style={styles.textoBotao2}>Entrada Aleatória</Text>
      </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
