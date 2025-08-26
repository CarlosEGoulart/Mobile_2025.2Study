import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login'
import Post from "./src/components/Post/index"
import SearchBar from './src/components/Post/SearchBar';
import React from 'react';

export default function App() {
  const handleSearch = (keywords: string) => {
    console.log("Pesquisando: " + keywords)
  };
  
  return (
    <View style={styles.container}>
      <Text>Carlosgram</Text>
      <Text>----Pesquisa----</Text>
      <SearchBar handleSearch={handleSearch}/>
      <Text>----Login----</Text>
      <Login />
      <Text>----Posts----</Text>
      <Post author='Julia' 
        content='Photo' 
        title='Foto na faculdade' 
        likes={178} 
      />
      <Post author='Carlos' 
        content='Photo' 
        title='Foto na academia' 
        likes={1} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});
