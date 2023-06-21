import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Rewards() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.content}>Cupom na Casas Bahia</Text>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.content}>Cupom na Magazine luiza</Text>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.content}>Cupom na C&A</Text>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.content}>Cupom na Bioage</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,   
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  content: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})