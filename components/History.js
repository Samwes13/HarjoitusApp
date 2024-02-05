import React from 'react';
import { View, Text, FlatList, StyleSheet  } from 'react-native';


export default function History({ route }) {
  const history = route.params.history;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.item} >{item.operation} = {item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 56, // Adjust this value based on your design
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    textAlign: 'center',
    fontSize: 16,
  },
});
