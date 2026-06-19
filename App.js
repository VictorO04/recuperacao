import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import data from './db.json';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.bandeira }} style={styles.flag} />
            <Text style={styles.countryText}>{item.selecao}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 64,
    height: 44,
    resizeMode: 'cover',
    marginRight: 12,
    borderRadius: 4,
  },
  countryText: {
    fontSize: 16,
  },
});
