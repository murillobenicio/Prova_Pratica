import * as React from 'react';
import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


 export default function Formula() {
  return (
    <ScrollView style={styles.container2}>
      <Text style={styles.title2}>História</Text>
      <ScrollView>
        <Text style={styles.Text}>
        Período Pré-Histórico: A civilização grega começou a se desenvolver por volta do terceiro milênio a.C.,
         com sociedades agrícolas e comunidades minoicas e micênicas.
         Estes povos construíram grandes palácios, como o de Cnossos em Creta.
        </Text>

        <Text style={styles.Text}>
        Período Arcaico (c. 800 a.C. - 500 a.C.): Durante este período, as cidades-estado gregas (polis) começaram a emergir.
         As cidades mais proeminentes eram Atenas e Esparta.
         A democracia ateniense começou a se desenvolver, enquanto Esparta era conhecida por sua sociedade militarista.
        </Text>
        
        <Text style={styles.Text}>
        Período Clássico (c. 500 a.C. - 323 a.C.): Este período é muitas vezes considerado o auge da civilização grega.
         Atenas emergiu como um centro cultural e intelectual, produzindo filósofos como Sócrates, Platão e Aristóteles, bem como dramaturgos como Sófocles, Eurípides e Ésquilo.
          Durante as Guerras Médicas (c. 499 a.C. - 449 a.C.),
         Atenas e outras cidades-estado gregas se uniram para repelir as invasões persas.
        </Text>
        
        <Text style={styles.Text}>
        Guerras do Peloponeso (431 a.C. - 404 a.C.):
         Conflito entre Atenas e Esparta, que acabou enfraquecendo significativamente as cidades-estado gregas e preparou o terreno para a ascensão de Macedônia.
        </Text>
       
        <Text style={styles.Text}>
        Período Helenístico (c. 323 a.C. - 31 a.C.): Após a conquista de Alexandre, o Grande, a Grécia entrou na era helenística, 
        caracterizada pela disseminação da cultura grega por todo o império de Alexandre. 
        Isso influenciou a arte, a religião, a filosofia e a ciência em todo o mundo mediterrâneo.
        </Text>
       
        <Text style={styles.Text}>
        Domínio Romano: A Grécia foi gradualmente incorporada ao Império Romano e perdeu sua independência política,
         embora continuasse a ser um importante centro cultural e intelectual.
        </Text>
        <Text style={styles.Text}>
        Declínio e Legado: A civilização grega antiga eventualmente entrou em declínio, mas seu legado perdura até os dias de hoje.
         Suas contribuições para a filosofia, política, arte, ciência e literatura continuam a influenciar o mundo moderno.
        </Text>
      </ScrollView>
    </ScrollView>
  );
}