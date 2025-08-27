import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import React from 'react'

interface FormProp {
    handleSearch(keywords: string):void
}

export default function SearchBar(props: FormProp) {
    const[name, setName] = React.useState("")
    
    
    const onSearch= () =>{
        props.handleSearch(name);
        setName("");
    }
  
    return (
    <View>
      <TextInput 
      style={styles.input}
      onChangeText={setName}
      value={name}
      placeholder="Pesquisar"/>
      
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#303030ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#202020ff',
    backgroundColor: '#dbdbdbff',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1d1d1dff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

});
