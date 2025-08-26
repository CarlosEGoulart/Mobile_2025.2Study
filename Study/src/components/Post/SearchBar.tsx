import { StyleSheet, View, Button, TextInput} from 'react-native';
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
      <Button title="Pesquisar" onPress={onSearch}/>
    </View>
  )

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });