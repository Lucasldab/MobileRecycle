import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  return (
    <View style={globalStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <Text style={globalStyles.button}>Informações sobre reciclagem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text style={globalStyles.button}>Pontos de Reciclagem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Identifier')}>
          <Text style={globalStyles.button}>Classifique o seu lixo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <Text style={globalStyles.button}>Agende sua Coleta de Resíduos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
          <Text style={globalStyles.button}>Programa de Recompensas</Text>
        </TouchableOpacity>
    </View>
  );
}