import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[numero1, setNumero1]= useState('');
  const[numero2, setNumero2]= useState('');
  const[tulokset, setTulokset]= useState('');

  const kasitteleSumma = () => {
    const summa = parseFloat(numero1) + parseFloat(numero2);
    setTulokset(summa);
  }; 

  const kasitteleErotus = () => {
    const erotus = parseFloat(numero1) - parseFloat(numero2);
    setTulokset(erotus);
  }; 


  return (
    <View style={styles.container}>
      <Text>Result: {tulokset} </Text>
      <TextInput
          style={{width: 200, borderColor: 'gray', borderWidth: 1}}
          keyboardType='number-pad'
          onChangeText={text => setNumero1(text)}
      /> 
      <TextInput
          style={{width: 200, borderColor: 'gray', borderWidth: 1}}
          keyboardType='number-pad'
          onChangeText={text => setNumero2(text)}
      />
      <View style={{flexDirection: 'row',
            alignItems: 'center'}}>    
        <Button title='+' onPress={kasitteleSumma}/>
      <View style={{width: 12}}/>
        <Button title='-' onPress={kasitteleErotus}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
