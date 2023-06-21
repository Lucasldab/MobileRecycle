import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MarkerPage({route}) {
const {params} = route

  return (
    <View style={globalStyles.container}>
      <Text>Informações sobre local de reciclagem:</Text>
      <Text>Este local recicla {params.idItem}</Text>
      <Text>Funcionamento: {params.horario}</Text>
    </View>
  );
}